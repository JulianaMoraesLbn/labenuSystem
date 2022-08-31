import { upDateModuloDTO } from "../../../model/types"
import { GetTurmasData } from "../data/getTurmas.data"


export class GetTurmasBusiness {
    public getTurmasAtcive = async ():Promise<any> => {

            const getTurmasData = new GetTurmasData()
            return  await getTurmasData.getTurmasAtcive()

    }

    public putTurmasModulo =async (input:upDateModuloDTO) => {
        
            const putTurmaData = new GetTurmasData()
            return await putTurmaData.putTurmasModulo(input)
        
    }
}