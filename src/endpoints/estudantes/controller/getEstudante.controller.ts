import { Request, Response } from 'express'
import { GetEstudantesBusiness } from '../business/getEstudantes.business'

export class GetEstudantesController {

    public getEstudantes = async (req: Request, res: Response):Promise<void> => {
        
        try{

            const {name} = req.body
            console.log("name", name)
            
            const getEstudantes = new GetEstudantesBusiness() 
            const result = await getEstudantes.getEstudantes(name)

            console.log("result controler", result)

            res.status(200).send(result)

        }catch(err:any){

            console.log("err controller", err)

        }
        
    }
}