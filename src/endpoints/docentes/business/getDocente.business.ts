import { GetDocenteData } from "../data/getDocenteData"


export class GetDocenteBusiness {
    public getDocente = async () => {
        
        const getDocenteData = new GetDocenteData()
        return await getDocenteData.getDocente()
    }
}