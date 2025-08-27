import ColorJsIo from "colorjs.io";

/**
 * Take in two colors and mix the second into the first by a given percentage.
 * @param colorA - the receiving (or main) color
 * @param colorB - the color that is being mixed in
 * @param percentage - to what percentage the color is being mixed in from 0 to 1
 * @returns the resulting color
 */
export function mix(
  colorA: string,
  colorB: string,
  percentage: number,
): string {
  return new ColorJsIo(colorA)
    .mix(colorB, percentage)
    .to("srgb")
    .toString({ format: "hex" });
}
