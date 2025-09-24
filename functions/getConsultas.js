export default async function getConsultas(db) {
  try {
    if (!db || typeof db.query !== 'function') {
      throw new Error('Conexão com o banco de dados inválida');
    }

    const [rows] = await db.query(`
      SELECT 
        consultas.id AS consulta_id,
        consultas.data_consulta,
        consultas.hora_consulta,
        consultas.medico_consulta,
        consultas.especialidade_id,
        especialidades.tipo_especialidade AS especialidade_nome,
        consultas.local_id,
        locais_de_atendimento.nome_local AS local_nome,
        locais_de_atendimento.endereco AS local_endereco
      FROM consultas
      LEFT JOIN especialidades ON consultas.especialidade_id = especialidades.id
      LEFT JOIN locais_de_atendimento ON consultas.local_id = locais_de_atendimento.id
    `);
    return rows;
  } catch (error) {
    console.error('Erro ao buscar consultas:', {
      message: error.message,
      code: error.code,
      sqlMessage: error.sqlMessage,
    });
    throw error;
  }
}