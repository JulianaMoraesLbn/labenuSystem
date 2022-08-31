import { createDocenteTurmaDTO } from '../../../model/types'
import {createDocenteTurmaData} from '../data/createDocenteTurma.data'

export class createDocenteTurmaBusiness {
    public newDocenteTurma = async (input: createDocenteTurmaDTO ) => {

        const { id, docente_id, turma_id } = input

        const inputData: createDocenteTurmaDTO = {
            id, 
            docente_id,
            turma_id
        }

        const newCreateDocenteTurmaData = new createDocenteTurmaData()
        return await newCreateDocenteTurmaData.newDocenteTurma(inputData)
        
    }
}