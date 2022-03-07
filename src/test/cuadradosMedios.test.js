import { cuadradosMedios } from "../utils/algorithms";

describe("algoritmo de cuadrados medios", () => {
    test("semilla de 3 digitos", () => {
        expect(cuadradosMedios(345, 5)).toEqual(
            [
                [1, 345, "0119025", 190, 0.19],
                [2, 190, "36100", 610, 0.61],
                [3, 610, "0372100", 721, 0.721],
                [4, 721, "0519841", 198, 0.198],
                [5, 198, "39204", 920, 0.92]
            ]
        );
    });

    test("semilla de 4 digitos", () => {
        expect(cuadradosMedios(2345, 5)).toEqual(
            [
                [1, 2345, "05499025", 4990, 0.499],
                [2, 4990, "24900100", 9001, 0.9001],
                [3, 9001, "81018001", 180, 0.0180],
                [4, 180, "032400", 3240, 0.3240],
                [5, 3240, "10497600", 4976, 0.4976]
            ]
        );
    });
});