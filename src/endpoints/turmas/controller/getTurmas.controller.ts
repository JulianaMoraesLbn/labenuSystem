import { GetTurmasBusiness } from "../business/getTurmas.business"
import { Request, Response } from 'express'
import { upDateModuloDTO } from "../../../model/types"
import { GenericError, MissingInformation } from "../../../error/customError"

export class GetTurmasController {

    public getTurmasActive = async (req: Request, res: Response):Promise<void> => {
        
        try{

            let result
            const {turma, modulo} = req.body
            const getTurmas = new GetTurmasBusiness() 

            if(!turma && !modulo){ 
                result = await getTurmas.getTurmasAtcive()
                res.status(200).send(result)
            }


            if(modulo && turma){
                const input:upDateModuloDTO = {
                    turma,
                    modulo
                }
                await getTurmas.putTurmasModulo(input)
                res.sendStatus(200)
            }
        

        }catch(err:any){
            throw new GenericError
        }
        
    }
}