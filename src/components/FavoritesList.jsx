import './FavoritesList.css';

function FavoritesList(props) {
    const favoritesList = props.favoritesList;
    const SearchPokemon = props.SearchPokemon;

    return (
        <div className='pokeFavorites'>
            <h2>Favoritos ({favoritesList.length})</h2>
            <ul>
                {favoritesList[0] &&
                    <span onClick={() => SearchPokemon(favoritesList[0])}>
                        <li>{favoritesList[0]}</li>
                    </span>
                }
                {favoritesList[1] &&
                    <span onClick={() => SearchPokemon(favoritesList[1])}>
                        <li>{favoritesList[1]}</li>
                    </span>}
                {favoritesList[2] &&
                    <span onClick={() => SearchPokemon(favoritesList[2])}>
                        <li>{favoritesList[2]}</li>
                    </span>}
                {favoritesList[3] &&
                    <li>...</li>
                }
            </ul>
        </div>
    )
}

export default FavoritesList
