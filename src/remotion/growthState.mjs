import { interpolate } from 'remotion';
import { getOffer } from '../config/pricing.mjs';

export function growthState(frame) {
  const clamp = { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' };
  const userCount = Math.round(interpolate(frame, [30, 180], [10, 200], clamp));
  return {
    userCount,
    progress: interpolate(frame, [30, 180], [0, 1], clamp),
    competitorCost: userCount * 6,
    venmailCost: getOffer('business').amount,
  };
}
