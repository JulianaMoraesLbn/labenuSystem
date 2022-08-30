import { connectionDataBase } from "../../../data/connectionDataBase";
import { createEstudanteDTO } from '../../../model/types'
import { DataBaseErr } from '../../../error/customError'


export class CreateEstudanteData extends connectionDataBase {
    public newEstudante = async (inputData: createEstudanteDTO) => {

        try {
            console.log("inputData", inputData)

            const { id, name, email, data_nasc, turma_id } = inputData

            const result = await CreateEstudanteData.connection('estudante')
                .insert({
                    id,
                    name,
                    email,
                    data_nasc,
                    turma_id
                })

                console.log(result)
                return result

        } catch (err: any) {
            console.log(err)
            throw new DataBaseErr(err.sqlMessage)
        }

    }
}