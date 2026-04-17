import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ABTestContext = createContext(null);

// Define all active tests and their variants
const ACTIVE_TESTS = {
  hero_v1: { variants: ["A", "B"], weight: 0.5 },
  hero_cta_v1: { variants: ["A", "B"], weight: 0.5 },
  reckoning_v1: { variants: ["A", "B"], weight: 0.5 },
  footer_cta_v1: { variants: ["A", "B"], weight: 0.5 },
};

function getStorageKey(testName) {
  return `ab_test_${testName}`;
}

function assignVariant(testName) {
  const test = ACTIVE_TESTS[testName];
  if (!test) return "A";
  return Math.random() < test.weight ? "A" : "B";
}

export function ABTestProvider({ children }) {
  const [variants, setVariants] = useState({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const assigned = {};

    for (const testName of Object.keys(ACTIVE_TESTS)) {
      const key = getStorageKey(testName);
      const stored = localStorage.getItem(key);

      if (stored) {
        assigned[testName] = stored;
      } else {
        const variant = assignVariant(testName);
        localStorage.setItem(key, variant);
        assigned[testName] = variant;

        // Fire GA4 assignment event
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "ab_test_assigned", {
            test_name: testName,
            variant: variant,
          });
        }
      }
    }

    setVariants(assigned);
    setIsReady(true);
  }, []);

  const getVariant = useCallback(
    (testName) => {
      return variants[testName] || "A";
    },
    [variants]
  );

  return (
    <ABTestContext.Provider value={{ variants, getVariant, isReady }}>
      {children}
    </ABTestContext.Provider>
  );
}

export function useABTest(testName) {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error("useABTest must be used within an ABTestProvider");
  }
  return {
    variant: context.getVariant(testName),
    isReady: context.isReady,
  };
}
