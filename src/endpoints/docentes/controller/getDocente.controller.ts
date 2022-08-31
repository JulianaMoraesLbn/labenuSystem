import { GetDocenteBusiness } from "../business/getDocente.business"
import { Request, Response } from 'express'
import { GenericError } from "../../../error/customError"

export class GetDocenteController {
    public getDocente = async (req: Request, res: Response): Promise<void> => {

        try {

            const getDocenteBusiness = new GetDocenteBusiness()
            const result =  await getDocenteBusiness.getDocente()

            console.log("result controller", result )
            res.status(200).send(result)

        } catch(err:any) {
            console.log("err controller", err)
            throw new GenericError
        }

    }
}