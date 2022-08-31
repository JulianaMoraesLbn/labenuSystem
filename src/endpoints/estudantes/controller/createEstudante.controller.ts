import { Request, Response } from 'express'
import { MissingInformation } from '../../../error/customError'
import { generateId } from '../../../services/generateId'
import { consultOrCreateHobbyDTO, createDocenteTurmaDTO, createEstudanteDTO } from '../../../model/types'
import { createEstudanteBusiness } from '../business/createEstudante.business'

export class createEstudanteController {
    public newEstudante = async (req: Request, res: Response) => {

        try {

            const { name, email, data_nasc, turma_id, hobby } = req.body

            if (!name || !email || !data_nasc  || !turma_id || !hobby) {
                throw new MissingInformation
            }

            const inputEstudante: createEstudanteDTO = {
                id: generateId(),
                name,
                email,
                turma_id,
                data_nasc
            }

            const inputHobbyEstdante: consultOrCreateHobbyDTO = {
                id: generateId(),
                estudante_id: inputEstudante.id,
                hobby
            }


            const newEstdanteBusiness = new createEstudanteBusiness()

            await newEstdanteBusiness.newEstudante(inputEstudante)
            await newEstdanteBusiness.newEstudanteHobby(inputHobbyEstdante)

            res.sendStatus(201)

        } catch (err: any) {
            console.log("erro", err)

        }


    }
}