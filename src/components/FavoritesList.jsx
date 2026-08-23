import './FavoritesList.css';

function FavoritesList(props) {
    const favoritesList= props.favoritesList;

    return (
        <>
            <h2>Favoritos ({favoritesList.length})</h2>
            <ul>
                {favoritesList[0] &&
                    <li>{favoritesList[0]}</li>
                }
                {favoritesList[1] &&
                    <li>{favoritesList[1]}</li>
                }
                {favoritesList[2] &&
                    <li>{favoritesList[2]}</li>
                }
                {favoritesList[3] &&
                    <li>...</li>
                }
            </ul>
        </>
    )
}

export default FavoritesList
