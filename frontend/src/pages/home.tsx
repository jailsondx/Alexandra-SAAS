import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const NODE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${NODE_URL}`);
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Falha ao carregar dados do backend');
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Página Inicial</h1>
      <p>{NODE_URL}</p>
      {error ? (
        <p>{error}</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Home;