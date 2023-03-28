import React, { useState, useEffect } from 'react';

type UserType = {
  name: string,
  blog: string;
  avatar_url: string;
  }

function App() {
  const[count, setCount] = useState(0);
  const[countB, setCountB] = useState(10);
  const[user, setUser] = useState<UserType>();

  //1 - useEffect utilização
  useEffect(() => {
    console.log("Roda a cada renderização")
  })

  // 2- array de dependencias
  useEffect(() => {
    console.log("So roda ao incrementar valor")
  },[count]);

  // 3- array de dependecia vazio
  useEffect(() => {
    console.log("so roda uma vez")
  }, [])

// 4- clean up function (limpesa de memoria) legal pra usar depois de evento de clique
useEffect(() => {
  const time = setTimeout(()=>{
    console.log(`o incrementador foi alterado ${count} vezes.`)
  }, 2000);

  return() => {
    clearTimeout(time);

  };
}, [count]);

// 5- fetch xom useEffect (usado quando precisa consulmir dados de API)
  useEffect(() => {
    fetch("https://api.github.com/users/jamile15")
    .then((res) => res.json())
    .then((json) => setUser(json));
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => setCount((prevCount) => prevCount +1)}>Renderizar</button>
        <p>{count}</p>
      </div>

      <div>
        <button onClick={() => setCountB((prevCountB) => prevCountB +5)}>Renderizar B</button>
        <p>{countB}</p>
      </div>

      <div>
        <p>Dados do usuário:</p>
        <h1>Nome: {user?.name}</h1>
        <img src={user?.avatar_url} alt='test'/>
      </div>
     
    </div>
  );
}

export default App;
