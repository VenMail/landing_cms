import { Composition } from "remotion";
import HeroFlythrough, { heroFlythroughConfig } from "./compositions/HeroFlythrough";
import EmailReckoning, { emailReckoningConfig } from "./compositions/EmailReckoning";
import ProductWalkthrough, { productWalkthroughConfig } from "./compositions/ProductWalkthrough";
import SovereigntyClip, { sovereigntyClipConfig } from "./compositions/SovereigntyClip";
import WhiteLabelClip, { whiteLabelClipConfig } from "./compositions/WhiteLabelClip";
import GrowthScalingClip, { growthScalingClipConfig } from "./compositions/GrowthScalingClip";

export function RemotionRoot() {
  return (
    <>
      <Composition {...heroFlythroughConfig} />
      <Composition {...emailReckoningConfig} />
      <Composition {...productWalkthroughConfig} />
      <Composition {...sovereigntyClipConfig} />
      <Composition {...whiteLabelClipConfig} />
      <Composition {...growthScalingClipConfig} />
    </>
  );
}
