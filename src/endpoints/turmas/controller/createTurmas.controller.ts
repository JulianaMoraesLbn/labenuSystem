import { Request, Response } from 'express'
import { generateId } from '../../../services/generateId'
import {createTurmaDTO} from '../../../model/types'
import {GenericError, MissingInformation} from '../../../error/customError'
import { createTurmaBusiness } from '../business/createTurmas.business'

export class createTurmaController {

    public newTurma = async (req: Request, res: Response) => {

        try {

            const { name, modulo } = req.body

            console.log(name, modulo)

            if(!name || !modulo){
                throw new MissingInformation
            }

            if(modulo !== 0 && modulo > 6){
                throw new GenericError
            }

            const input: createTurmaDTO = {
                id: generateId(),
                name,
                modulo
            }

            const newCreateTurma = new createTurmaBusiness()
            await newCreateTurma.newTurma(input)

            res.sendStatus(201)

        } catch(err:any) {
            console.log(err)
            res.status(err.statusCode).send(err.message)
        }

    }

}