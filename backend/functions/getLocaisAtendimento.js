export default async function getLocaisAtendimento(db) {
    console.log('Buscando locais de atendimento no banco de dados...');
    try {
        const [rows] = await db.query('SELECT * FROM local_atendimento');
        return rows;
    } catch (error) {
        console.error('Erro ao buscar locais de atendimento:', error);
        throw error;
    }
}