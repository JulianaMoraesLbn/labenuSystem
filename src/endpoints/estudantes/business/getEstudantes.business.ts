import { GetEstudantesData } from "../data/getEstudantes.data"


export class GetEstudantesBusiness {
    public getEstudantes = async (name:string)  => {

            const getEstudantesData = new GetEstudantesData()
            return await getEstudantesData.getEstudantesName(name)
       
    }
}