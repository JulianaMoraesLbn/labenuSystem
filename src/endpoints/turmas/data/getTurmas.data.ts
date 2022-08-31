import { connectionDataBase } from "../../../data/connectionDataBase";
import { DataBaseErr, GenericError } from "../../../error/customError";
import { upDateModuloDTO } from "../../../model/types";


export class GetTurmasData extends connectionDataBase {
    public getTurmasAtcive = async (): Promise<any> => {

        try {

            const result = await connectionDataBase.connection('turma')
                .select("name", "modulo")
                .where("modulo", "!=", 0)

            console.log("result data", result)

            return result

        } catch (err: any) {
            console.log(err)
            throw new GenericError
        }
    }

    public putTurmasModulo = async (input: upDateModuloDTO) => {

        try {
            const { turma, modulo } = input

            const result = await GetTurmasData.connection('turma')
                .where('name', '=', `${turma}`)
                .update("modulo", `${modulo}`)
            
            return result

        } catch(err:any) {
            throw new DataBaseErr(err.sqlMessage)
        }



    }
}