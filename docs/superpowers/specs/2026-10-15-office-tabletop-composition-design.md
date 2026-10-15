# Office tabletop composition design

## Goal

Make the Venia collaboration visual read as an office desk scene at a glance while preserving the workspace screenshot as the primary visual.

## Composition

- Replace the neutral, abstract background treatment with a warm tabletop that begins beneath the laptop and extends to the lower edge of the artwork.
- Reduce the apparent bezel weight and give the laptop a modest perspective through its base, shadow, and screen proportions.
- Place a cropped notebook, pen, and small plant silhouette at the desk edges. These are compositional cues only and must never cover the workspace screenshot.
- Retain soft window light in the upper background for depth, but remove visual noise that competes with the display.

## Responsive behavior

- The workspace display remains the largest element at every breakpoint.
- Foreground objects are cropped at the art boundaries and scale down or simplify on narrow screens.
- The visual remains a single non-interactive image alternative with the existing descriptive alt text.

## Acceptance criteria

- At desktop width, the tabletop, at least two foreground desk cues, and laptop silhouette are visibly distinct.
- The screenshot remains fully readable and is not obscured by decorative objects.
- At mobile width, no horizontal overflow occurs and the workspace display remains dominant.
- Existing Venia destination, copy, and accessibility behavior remain unchanged.
