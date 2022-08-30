import { Request, Response } from 'express'
import { MissingInformation } from '../../../error/customError'
import { CreateHobbyBusiness } from '../business/createhobby.business'


export class CreateHobbyController {
    public createHobby = async (req: Request, res: Response) => {

        try {

            const { nome } = req.body

            if (!nome) {
                throw new MissingInformation
            }

            const createnewHobby = new CreateHobbyBusiness()
            await createnewHobby.createHobby(nome)

            res.sendStatus(200)

        } catch (err: any) {
            res.status(err.statusCode).send(err.message)

        }

    }
}