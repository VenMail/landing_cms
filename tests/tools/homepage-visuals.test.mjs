import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readSource = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("the homepage demo uses the recorded Venmail product video", async () => {
  const source = await readSource("../../src/components/PageSections/ProductDemo.jsx");

  assert.match(source, /src="\/venmail_demo_v4\.mp4"/);
  assert.doesNotMatch(source, /ProductWalkthrough|@remotion\/player/);
});

test("audience cards use real product screenshots rather than Remotion clips", async () => {
  const source = await readSource("../../src/components/PageSections/BusinessesSection.jsx");

  assert.match(source, /from "next\/image"/);
  assert.match(source, /image: "\/email-dashboard-preview\.png"/);
  assert.match(source, /image: "\/screenshot-full\.webp"/);
  assert.match(source, /image: "\/campaign_composer\.png"/);
  assert.doesNotMatch(source, /@remotion\/player|LazySovereigntyClip|LazyWhiteLabelClip|LazyGrowthScalingClip/);
  assert.doesNotMatch(source, /partner\/partner\.png/);
});
