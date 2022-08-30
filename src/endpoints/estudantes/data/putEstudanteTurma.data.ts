import { connectionDataBase } from "../../../data/connectionDataBase";
import { DataBaseErr } from "../../../error/customError";
import { upDateEstudanteTurmaDTO } from "../../../model/types";


export class PutEstudanteTurmaData extends connectionDataBase {
    public putEstudanteTurma = async (input: upDateEstudanteTurmaDTO) => {

        try {

            const { estudante_id, turma_id } = input

            await PutEstudanteTurmaData.connection('estudante')
                .where('id', '=', `${estudante_id}`)
                .update("turma_id", `${turma_id}`)

        } catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }

    }
}