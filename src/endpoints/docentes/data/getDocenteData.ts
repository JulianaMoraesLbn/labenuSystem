import { connectionDataBase } from "../../../data/connectionDataBase";
import { DataBaseErr } from "../../../error/customError";



export class GetDocenteData extends connectionDataBase {
    public getDocente = async (): Promise<object>=> {

        try {

            const result = await connectionDataBase.connection('docente')
                .select("*")

            return result

        } catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }


    }
}