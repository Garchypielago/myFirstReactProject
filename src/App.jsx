import './App.css'
import HeaderComponent from './components/HeaderComponent';
import ButtonComponent from './components/ButtonComponent';
import { useEffect, useState } from 'react';
import LoginComponent from './components/LoginComponent';
import MoviesList from './components/MoviesList';
import PokemonList from './components/PokemonList';

function App() {
  // let number = 0; 
  // asyn vars
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");
  let myPlaceholder = "Escribe aqui";

  const [greetings, setGreetings] = useState("Bienvenidos a mi web");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact us"
  };

  const [user, setUser] = useState({
    // userName: "Alejandro",
    // email: "alejandro@gmail.com"
  });

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  }

  const condition = true;
  const [showMovies, setShowMovies] = useState(true);

  
  // useEffect(()=>{
  //   console.log("Ejecucion cada vez que se renderiza el componente raiz");
  // })
  useEffect(() => {
    console.log("Ejecucion con cada cmabio de la variale reactiva de la variable user");
  }, [user])


  const sayHello = () => {
    alert("Pulsaste algo.");
  }

  const handleChange = (event) => {
    console.log(event.target.value);
  }

  const addOne = () => {
    // number++;
    setNumber(number + 1);

    // async var
    console.log(number)
  }

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className='main-content'>

        <h2 onClick={sayHello}>Hola {user.userName}!</h2>

        <LoginComponent handleLogin={login}></LoginComponent>

        <hr />
        <input type="text" placeholder={myPlaceholder} value={myValue} onChange={handleChange} />

        <hr />
        <h3 onClick={addOne}>Number: {number}</h3>

        <hr />
        <ButtonComponent></ButtonComponent>

        <hr />
        {user.userName && <h2>Hola de nuevo {user.userName}!</h2>}

        {condition && <h2>La condicion se cumple</h2>}
        {!condition && <h2>La condicion no se cumple</h2>}

        {condition ? (
          <h2>La condicion se cumple</h2>
        ) : (
          <h2>La condicion no se cumple</h2>
        )}

        <button onClick={()=> setShowMovies(!showMovies)}>Toggle movies</button>

        {showMovies && <MoviesList></MoviesList>}

        <PokemonList></PokemonList>

      </main>
    </>
  )
}

export default App
