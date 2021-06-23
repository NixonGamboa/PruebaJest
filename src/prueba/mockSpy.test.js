import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // calls the original implementation
  expect(app.doAdd(3, 2)).toEqual(5);
  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(3, 2);
});
test("calls math.multiply", () => {
  const multiplyMock = jest.spyOn(math, "multiply");
  // calls the original implementation
  expect(app.doMultiply(3, 2)).toEqual(6);
  // and the spy stores the calls to add
  expect(multiplyMock).toHaveBeenCalledWith(3, 2);
});