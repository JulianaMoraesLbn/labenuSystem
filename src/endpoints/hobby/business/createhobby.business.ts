import { Request, Response } from 'express'
import { MissingInformation } from '../../../error/customError'
import { createHobbyDTO } from '../../../model/types'
import { generateId } from '../../../services/generateId'
import { HobbyData } from '../data/hobby.data'


export class CreateHobbyBusiness {
    public createHobby = async (nome: string) => {

        const inputData:createHobbyDTO = {
            id: generateId(),
            nome

        }

        const createnewHobbyData = new HobbyData()
        createnewHobbyData.createHobby(inputData)
    }
}