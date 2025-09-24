export default async function postNovoAtendimento(db, formData) {
    try {
        const query = `
            INSERT INTO consultas (data_consulta, hora_consulta, local_id, especialidade_id)
            VALUES (?, ?, ?, ?)
        `;

        const valores = [
            formData.data,
            formData.hora,
            formData.local,
            formData.especialidade,
        ];

        const [result] = await db.query(query, valores);
        return result.insertId;
    } catch (error) {
        console.error('Erro ao inserir novo atendimento:', error);
        throw error;
    }
}
