import './style.css'
import CharCard from "../CharCard"

function Characters({char}){

    return (
        <div className="main">
            {
                char.map( c => <CharCard name={c.name.length > 15 ? c.name.slice(0,16) + "..." : c.name} image={c.image} key={c.id} status={c.status} species={c.species}></CharCard>)
            }   
        </div>  
    )
}

export default Characters