import { Request, Response } from 'express'
import { MissingInformation } from '../../../error/customError'
import { generateId } from '../../../services/generateId'
import { createDocenteTurmaDTO } from '../../../model/types'
import { createDocenteTurmaBusiness } from '../business/createDocenteTurma.business'

export class createDocenteTurmaController {
    public newDocenteTurma = async (req: Request, res: Response) => {

        try {

            const { docente_id, turma_id } = req.body

            if (!docente_id || !turma_id) {
                throw new MissingInformation
            }

            const input: createDocenteTurmaDTO = {
                id: "",
                docente_id,
                turma_id
            }

            const newDocenteTurmaBusiness = new createDocenteTurmaBusiness()
            await newDocenteTurmaBusiness.newDocenteTurma(input)

            res.sendStatus(201)
        } catch(err:any) {
            res.status(err.statusCode).send(err.message)
        }
    }
}