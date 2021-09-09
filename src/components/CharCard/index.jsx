import './style.css'

function CharCard({name, image, status, species}){

    return (
        <>
        {
        status === "Alive" ? 
            <div className="alive">
                <label className="label_name">{name}</label>
                <img className="pic" src={image} alt={name}></img>
                <label className="label_atr">species: {species}</label>
                <label className="label_atr">status: {status}</label>
                
            </div> 
            : 
            <div className="dead">
                <label className="label_name">{name}</label>
                <img className="pic" src={image} alt={name}></img>
                <label className="label_atr">species: {species}</label>
                <label className="label_atr">status: {status}</label>
            </div>
        }
        </>
    )
}

export default CharCard