import { degenerating } from "./algorithms";

export const degeneratingMessage = (result) => {
    const resultObj = degenerating(result);
    if(Object.keys(resultObj).length > 0) {
        return `La lista se degenera en: i = ${resultObj.indexes[0]}, i = ${resultObj.indexes[1]}, ri = ${resultObj.number}`;
    }
    return "";
};