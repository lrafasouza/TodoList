export interface Tarefa {
    id?: number,
    tarefa: string,
    categoria: string,
    concluido: boolean,
    criadoEm?: Date,
    atualizadoEm?: Date
}