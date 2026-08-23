import './Header.css';
import SearchBar from './SearchBar.jsx';

function Header(props) {

  return (
    <header>
      <nav>
        <button onClick={props.GoHome}>Home</button>
      </nav>
      <SearchBar SearchPokemon={props.SearchPokemon} />
    </header>
  )
}

export default Header
