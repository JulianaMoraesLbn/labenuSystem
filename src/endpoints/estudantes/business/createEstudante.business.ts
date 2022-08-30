import { consultOrCreateHobbyDTO, createEstudanteDTO, relationEstudanteHobbyDTO } from '../../../model/types'
import { generateId } from '../../../services/generateId'
import { HobbyData } from '../../hobby/data/hobby.data'
import { CreateEstudanteData } from '../data/createEstudante.data'


export class createEstudanteBusiness {
    public newEstudante = async (input: createEstudanteDTO) => {

        console.log("input", input)

        const { id, name, email, data_nasc, turma_id } = input

        const inputData: createEstudanteDTO = {
            id,
            name,
            email,
            data_nasc,
            turma_id
        }

        const newEstdanteData = new CreateEstudanteData()
        newEstdanteData.newEstudante(inputData)
    }

    public newEstudanteHobby = async (inputHobbyEstdante: consultOrCreateHobbyDTO) => {

        const { id, estudante_id, hobby } = inputHobbyEstdante

        const consultOrNewHobby = new HobbyData()
        const resultConsult = await consultOrNewHobby.createHobbies(hobby)
        console.log("resultConsult", resultConsult)

        let hobby_id:string[] = []
        for(let i of resultConsult[0]){
            hobby_id.push(i.id)
            console.log("i.id", i.id)
        }

        const inputRelation: relationEstudanteHobbyDTO = {
            estudante_id,
            hobby_id
        }

        consultOrNewHobby.relationEstudanteHobby(inputRelation)

    }
}

