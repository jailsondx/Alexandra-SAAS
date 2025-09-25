export default async function getEspecialidades(db) {
    try {
        const [rows] = await db.query('SELECT * FROM especialidades');
        return rows;
    } catch (error) {
        console.error('Erro ao buscar locais de atendimento:', error);
        throw error;
    }
}