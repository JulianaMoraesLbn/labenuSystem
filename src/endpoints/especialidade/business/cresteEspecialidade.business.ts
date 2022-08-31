import { createEspecialidadeDTO } from "../../../model/types"
import { generateId } from "../../../services/generateId"
import { consultEspecialidadeData } from "../data/consultEspecialidade.data"



export class createEspecialidadeBusiness{
    public newEspecialidadeBusiness =async (name:string) => {

        const input:createEspecialidadeDTO = {
            id: generateId(),
            name
        }

        const newEspecialidadeData = new consultEspecialidadeData()

        newEspecialidadeData.newEspecialidade(input)
        
    }
}