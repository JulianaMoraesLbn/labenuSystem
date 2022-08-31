import { createTurmaDTO } from '../../../model/types'
import {createTurmaData} from '../data/createTurma.data'

export class createTurmaBusiness {
    public newTurma = async (input: createTurmaDTO) => {

        const { id, name, modulo } = input

        console.log(id, name, modulo)

        const inputData: createTurmaDTO = {
            id,
            name,
            modulo
        }

        const newTurmaData = new createTurmaData()
        await newTurmaData.newTurma(inputData)

    }
}