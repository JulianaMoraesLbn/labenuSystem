
export interface createDocenteDTO {
        id: string,
        name: string, 
        email: string, 
        data_nasc: string,
        turma_id: string
}

export interface createEstudanteDTO {
    id: string,
    name: string, 
    email: string, 
    turma_id: string,
    data_nasc: string, 
}

export interface consultOrCreateHobbyDTO {
    id: string,
    estudante_id: string,
    hobby: string[]
}

export interface relationEstudanteHobbyDTO {
    estudante_id: string,
    hobby_id: string[]
}

export interface createDocenteTurmaDTO{
    id: string,
    docente_id: string,
    turma_id: string[]
}

export interface createTurmaDTO{
    id: string,
    name: string,
    modulo: number
}

export interface upDateDocenteTurmaDTO{
    docente_id: string,
    turma_id: string[]
}

export interface upDateModuloDTO{
    turma: string,
    modulo: number
}

export interface upDateEstudanteTurmaDTO{
    estudante_id: string,
    turma_id: number
}

export interface createHobbyDTO{
    id: string,
    nome: string
}

export interface createEspecialidadeDTO{
    id: string,
    name: string
}

export interface consultEspecialidadeDTO{
    id: string,
    docente_id:string,
    especialidades: string[]
}

export enum especialidadeTypes {
    JS = 'JS',
    CSS = 'CSS',
    REACT = 'REACT',
    TS = 'TS',
    POO = 'POO'
}

export interface getAquisitionIdDTO{
    user_id: string
}

export interface getProductDTO {
    title: string,
    order: string
}

export type product = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type user = {
    id: string,
    name: string, 
    email: string,
    password: string
}

export type aquisition = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}

export type userType = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type productType = {
    id: string,
    name: string,
    price: number,
	image_url: string
}