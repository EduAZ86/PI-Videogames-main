import Card from "../Card/Card"

const CardsContainer = () => {
    const videoGames = [1,2,3,4,5,6]
    return(
        <div>
            {videoGames.map((game)=>{
                return <Card
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    img={game.background_image}
                    generos={game.genres}
                />
            })}
        </div>
    )
}

export default CardsContainer