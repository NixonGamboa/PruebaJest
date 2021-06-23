import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  // accede al metodo original
  const originalAdd = math.add;
  // mockear la copia del metodo
  math.add = jest.fn(originalAdd);
  //testear el metodo doAdd de app
  expect(app.doAdd(1, 2)).toEqual(3);
  // espiar el llamado al metodo
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // sobreescribir el metodo mock
  math.add.mockImplementation(() => "mock");
  //Evaluar el retorno "mock" del metodo sobreescrito
  expect(app.doAdd(1, 2)).toEqual("mock");
  // espiar el llamado al metodo
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // volviendo a la implementacion original
  math.add = originalAdd;
  // evaluar la respuesta del metodo original
  expect(app.doAdd(1, 2)).toEqual(3);
});