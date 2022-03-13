import { degenerating } from "../utils/algorithms";

describe("Degeneracion de numeros", () => {
    test("Lista sin degenerar", () => {
        expect(degenerating([
            [1, 345, "0119025", 190, 0.19],
            [2, 190, "36100", 610, 0.61],
            [3, 610, "0372100", 721, 0.721],
            [4, 721, "0519841", 198, 0.198],
            [5, 198, "39204", 920, 0.92]
        ])).toEqual({});
    });

    test("Lista degenerada", () => {
        expect(degenerating([
            [1, 345, "0119025", 190, 0.19],
            [2, 190, "36100", 610, 0.61],
            [3, 610, "0372100", 721, 0.721],
            [4, 721, "0519841", 198, 0.198],
            [5, 198, "39204", 920, 0.19]
        ])).toEqual({
            number: 0.19,
            indexes: [1, 5]
        });
    });
});