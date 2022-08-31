import { Request, Response } from 'express'
import { MissingInformation } from '../../../error/customError'
import { generateId } from '../../../services/generateId'
import { consultEspecialidadeDTO, createDocenteDTO } from '../../../model/types'
import { createDocenteBusiness } from '../business/createDocente.business'

export class createDocenteController {
    public newDocente = async (req: Request, res: Response) => {

        try {

            const { name, email, data_nasc, turma_id, especialidades } = req.body

            if (!name || !email || !data_nasc) {
                throw new MissingInformation
            }
            
            if(!especialidades ){
                especialidades.push("js")
            }



            const inputDocente: createDocenteDTO = {
                id: generateId(),
                name,
                email,
                data_nasc,
                turma_id
            }


            const inputEspecialidade:consultEspecialidadeDTO = {
                id: '',
                docente_id: inputDocente.id,
                especialidades
            }

            const newDocenteBusiness = new createDocenteBusiness()
            await newDocenteBusiness.newDocente(inputDocente)
            await newDocenteBusiness.consultOrCreateEspecialidade(inputEspecialidade)
            
            res.sendStatus(201)
        } catch(err:any) {
            console.log(err)
            res.status(err.statusCode).send(err.message)
        }
    }
}