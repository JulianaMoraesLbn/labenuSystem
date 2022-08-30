import { connectionDataBase } from "../../../data/connectionDataBase";
import { GenericError } from "../../../error/customError";


export class GetEstudantesData extends connectionDataBase {
    public getEstudantesName = async (name: string):Promise<Object>=> {

        try {

            const result = await connectionDataBase.connection('estudante')
                .select("*")
                .where("name", "like", `%${name}%`)

            return result

        } catch (err: any) {
            throw new GenericError
        }
    }
}