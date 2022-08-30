import { connectionDataBase } from '../../../data/connectionDataBase'
import { createDocenteTurmaDTO } from '../../../model/types'
import {DataBaseErr} from '../../../error/customError'
import { generateId } from '../../../services/generateId'


export class createDocenteTurmaData extends connectionDataBase {
    public newDocenteTurma = async (inputData: createDocenteTurmaDTO) => {

        try {

            const { id, docente_id, turma_id } = inputData

            for (let turma of turma_id) {
                await createDocenteTurmaData.connection('docente_turma')
                    .insert({
                        id: generateId(),
                        docente_id,
                        turma_id: turma
                    })
            }

        } catch(err:any) {
            throw new DataBaseErr(err.sqlMessage)
        }
    }
}