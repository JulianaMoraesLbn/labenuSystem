import { connectionDataBase } from "../../../data/connectionDataBase";
import { DataBaseErr } from "../../../error/customError";
import { consultEspecialidadeDTO, createEspecialidadeDTO } from "../../../model/types";
import { generateId } from "../../../services/generateId";



export class consultEspecialidadeData extends connectionDataBase {
    public createEspecialidadeDocente = async (inputEspecialidade: consultEspecialidadeDTO) => {

        try {

            const { docente_id, especialidades } = inputEspecialidade

            //verifica e cadastra na planilha de especialidades sem duplicar
            await consultEspecialidadeData.connection.raw(`
            INSERT INTO especialidade (id, name) VALUES ${especialidades.map(especialidade => `("${generateId()}", "${especialidade}")`)} ON DUPLICATE KEY UPDATE created_at = CURRENT_TIMESTAMP;`)

            //retorna o id das especialidades
            const resultId = await consultEspecialidadeData.connection.raw(`
                SELECT id FROM especialidade WHERE name in (${especialidades.map(especialidade => `"${especialidade}"`)}); 
            `)

            let espec_id: string[] = []
            for (let i of resultId[0]) {
                espec_id.push(i.id)
            }

            //cadastra na planilha de relacionamento docente especialidade
            await consultEspecialidadeData.connection.raw(`
            INSERT INTO docente_especialidade (id, docente_id, especialidade_id) VALUES ${espec_id.map(cada_id => `("${generateId()}", "${docente_id}", "${cada_id}")`)}  ON DUPLICATE KEY UPDATE created_at = CURRENT_TIMESTAMP;`)

        } catch (err: any) {
            throw new DataBaseErr(err.sqlMessage)
        }

    }


    public newEspecialidade = async (input: createEspecialidadeDTO) => {

        try {

            const { id, name } = input

            await consultEspecialidadeData.connection('especialidade')
                .insert({
                    id,
                    name
                })

        } catch(err:any){
            throw new DataBaseErr(err.sqlMessage)
        }


    }
}