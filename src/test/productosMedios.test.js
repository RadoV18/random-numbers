import { productosMedios } from "../utils/algorithms";

describe("Productos Medios", () => {
    test("Semillas de 4 digitos: 1503 y 2303", () => {
        expect(productosMedios(1503, 2303, 5)).toEqual(
            [
                [1, "1503 · 2303", "03461409", 4614, 0.4614],
                [2, "2303 · 4614", "10626042", 6260, 0.626],
                [3, "4614 · 6260", "28883640", 8836, 0.8836],
                [4, "6260 · 8836", "55313360", 3133, 0.3133],
                [5, "8836 · 3133", "27683188", 6831, 0.6831]
            ]
        );
    });
});