import { useABTest } from "@/contexts/ABTestContext";

export default function ABVariant({ testName, a, b }) {
  const { variant, isReady } = useABTest(testName);

  // Show variant A as default during SSR/hydration
  if (!isReady) return a;

  return variant === "A" ? a : b;
}
