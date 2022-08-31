import { upDateEstudanteTurmaDTO } from "../../../model/types";
import { PutEstudanteTurmaData } from "../data/putEstudanteTurma.data";


export class PutEstudanteTurmaBusiness {
    public putEstudanteTurma = async (input:upDateEstudanteTurmaDTO) => {
        console.log("input business", input)
        const putEstudanteData = new PutEstudanteTurmaData()
        return await putEstudanteData.putEstudanteTurma(input)
    }
}