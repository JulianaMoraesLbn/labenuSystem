import {consultEspecialidadeDTO, createDocenteDTO} from '../../../model/types'
import { consultEspecialidadeData } from '../../especialidade/data/consultEspecialidade.data'
import { createDocenteData } from '../data/createDocente.data'

export class createDocenteBusiness {
    public newDocente = async (input: createDocenteDTO) => {

        const {id, name, email, data_nasc, turma_id} = input

        const inputData: createDocenteDTO = {
            id, 
            name, 
            email, 
            data_nasc,
            turma_id
        }

        const newCreateDocenteData = new createDocenteData()
        return await newCreateDocenteData.newDocente(inputData)

    }

    public consultOrCreateEspecialidade =async (inputEspecialidade:consultEspecialidadeDTO) => {

        const consultEspecialidade = new consultEspecialidadeData()
        consultEspecialidade.createEspecialidadeDocente(inputEspecialidade)
    }
}