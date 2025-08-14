import { useState } from "react";


function App() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState('');
  const [years, setYears] = useState(0);
  const [description, setDescription] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Ho inviato i dati');

    if (!name || !username || !password || !years || description.trim() === '') {
      console.error('Tutti i campi devono essere compilati!')
    } else if (years < 0) {
      console.error('Non puoi inserire un numero minore di 0.');
    } else if (!select) {
      console.error('Scegliere una specializzazione!');
      return;
    }

    console.log({
      name,
      username,
      password,
      select,
      years,
      description
    });

    // reset form 
    setName('');
    setUsername('');
    setPassword('');
    setSelect('');
    setYears(0);
    setDescription('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Inserisci il nome
          <input type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          Inserisci username
          <input type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>

        <label>
          Inserisci password
          <input type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <label>
          Scegli specializzazione
          <select value={select} onChange={e => setSelect(e.target.value)}>
            <option value="">Specializzazione:</option>
            <option value="full-stack">Full Stack</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        </label>

        <label>
          Anni di esperienza
          <input type="number"
            value={years}
            onChange={e => setYears(Number(e.target.value))}
          />
        </label>

        <label>
          Inserisci una breve descrizione
          <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </label>

        <button type="submit">Invia il form</button>
      </form>
    </>
  )
}

export default App
