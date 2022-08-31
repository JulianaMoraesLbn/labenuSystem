import { connectionDataBase } from '../../../data/connectionDataBase'
import { createDocenteDTO } from '../../../model/types'
import {DataBaseErr} from '../../../error/customError'

export class createDocenteData extends connectionDataBase{
    public newDocente = async (inputData: createDocenteDTO) => {

        try{

            const {id, name, email, data_nasc, turma_id} = inputData

            await createDocenteData.connection('docente')
            .insert({
                id, 
                name, 
                email, 
                data_nasc,
                turma_id
            })

        }catch(err:any){
            throw new DataBaseErr(err.sqlMessage)
        }

    }
    
}