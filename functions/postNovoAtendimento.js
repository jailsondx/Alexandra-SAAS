export default async function postNovoAtendimento(db, formData){
    try {
        const [rows] = await db.query('SELECT * FROM especialidades');
        return rows;
    } catch (error) {
        console.error('Erro ao buscar locais de atendimento:', error);
        throw error;
    }
}