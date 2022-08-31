import { Request, Response } from 'express'
import { MissingInformation } from '../../../error/customError'
import { upDateEstudanteTurmaDTO } from '../../../model/types'
import { GetEstudantesBusiness } from '../business/getEstudantes.business'
import { PutEstudanteTurmaBusiness } from '../business/putEstudanteTurmaBusiness'

export class PutEstudantesTurmaController {

    public putEstudanteTurma = async (req: Request, res: Response): Promise<void> => {

        try {
            const { estudante_id, turma_id } = req.body

            const input: upDateEstudanteTurmaDTO = {
                estudante_id,
                turma_id
            }

            const putEstudante = new PutEstudanteTurmaBusiness()
            await putEstudante.putEstudanteTurma(input)

            res.sendStatus(200)

        } catch (err: any) {
            throw new MissingInformation
        }

    }
}