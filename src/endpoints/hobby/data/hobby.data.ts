import { connectionDataBase } from "../../../data/connectionDataBase";
import { DataBaseErr } from "../../../error/customError";
import { createHobbyDTO, relationEstudanteHobbyDTO } from "../../../model/types";
import { generateId } from "../../../services/generateId";



export class HobbyData extends connectionDataBase {
    public createHobby = async (inputData: createHobbyDTO) => {

        try {

            const { id, nome } = inputData

            await HobbyData.connection('hobby')
                .insert({
                    id,
                    nome
                })

        } catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }


    }


    public createHobbies = async (hobbys: string[]) => {

        try {

            await HobbyData.connection.raw(`
            INSERT INTO hobby (id, nome) VALUES ${hobbys.map(cadaHobby => `("${generateId()}", "${cadaHobby}")`)}  ON DUPLICATE KEY UPDATE created_at = CURRENT_TIMESTAMP;
        `)

            const resultId = await HobbyData.connection.raw(`
            SELECT id FROM hobby WHERE nome in (${hobbys.map(cadaHobby => `"${cadaHobby}"`)}); 
        `)

            return resultId

        } catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }


    }

    public relationEstudanteHobby = async (inputRelation: relationEstudanteHobbyDTO) => {
        console.log(inputRelation)

        try {

            const { estudante_id, hobby_id } = inputRelation

            const resultRelation = await HobbyData.connection.raw(`
            INSERT INTO estudante_hobby (id, estudante_id, hobby_id) VALUES ${hobby_id.map((cada_id) => { return `("${generateId()}","${estudante_id}", "${cada_id}")` })};
        `)

        } catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }
    }
}