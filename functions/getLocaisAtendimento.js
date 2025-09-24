export default async function getLocaisAtendimento(db) {
    try {
        const [rows] = await db.query('SELECT * FROM locais_de_atendimento');
        return rows;
    } catch (error) {
        console.error('Erro ao buscar locais de atendimento:', error);
        throw error;
    }
}