function calculateRectangleArea(
  lengthOfRectangle: number,
  widthOfRectangle: number,
): number {
  return lengthOfRectangle * widthOfRectangle;
}
let lengthOfRectangle = 5;
let widthOfRectangle = 10;
let area = calculateRectangleArea(lengthOfRectangle, widthOfRectangle);
console.log(`The area of rectangle is: ${area}`);
