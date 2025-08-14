import { useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

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
      console.error('Tutti i campi devono essere compilati!');
    }

    if ((!letters.includes(username) && symbols.includes(username)) || username.length !== 6) {
      console.error('Username non valido!');
    }

    if (password.trim().length <= 8 && !(password.split('').some((char: string) => letters.includes(char)) && !(password.split('').some(char => numbers.includes(char))) && !(password.split('').some(char => symbols.includes(char))))) {
      console.error('Password non valida!');
    }

    if (years < 0) {
      console.error('Non puoi inserire un numero minore di 0.');
    }

    if (!select) {
      console.error('Scegliere una specializzazione!');
      return;
    }

    if (description.trim().length < 100 || description.trim().length > 1000) {
      console.error('La descrizione deve contenere tra i 100 e i 1000 caratteri.');
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

          Hai scritto: {description.trim().length}/1000 caratteri
          <textarea value={description} onChange={e => setDescription(e.target.value)}>
          </textarea>
        </label>

        <button type="submit">Invia il form</button>
      </form>
    </>
  )
}

export default App
