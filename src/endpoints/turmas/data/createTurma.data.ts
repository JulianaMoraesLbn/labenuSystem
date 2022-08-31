import { connectionDataBase } from '../../../data/connectionDataBase'
import { DataBaseErr } from '../../../error/customError'
import { createTurmaDTO } from '../../../model/types'

export class createTurmaData extends connectionDataBase {
    public newTurma = async (inputData: createTurmaDTO) => {

        try {

            const { id, name, modulo } = inputData

            await createTurmaData.connection('turma')
                .insert({
                    id,
                    name,
                    modulo
                })

        } catch(err:any) {
            console.log(err)
            throw new DataBaseErr(err.sqlMessage)
        }

    }
}