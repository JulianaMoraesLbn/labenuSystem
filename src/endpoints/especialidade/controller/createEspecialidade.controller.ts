import { Request, Response } from 'express'
import { MissingInformation } from '../../../error/customError'
import { createEspecialidadeBusiness } from '../business/cresteEspecialidade.business'


export class createEspecialidadeController {
    public newEspecialidadeController =async (req: Request, res: Response) => {

        try{

            const {name} = req.body

            if(!name){
                throw new MissingInformation
            }

            const newEspecialidadeBusiness = new createEspecialidadeBusiness()
            newEspecialidadeBusiness.newEspecialidadeBusiness(name)

            res.sendStatus(200)

        }catch(err:any){
            res.status(err.statusCode).send(err.message)
        }

        
    }
}