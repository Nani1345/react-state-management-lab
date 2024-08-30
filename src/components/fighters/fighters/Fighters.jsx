const Fighters = (props) => {
    return ( 
        <>
            <h3>Fighters</h3>
            <ul className="fighters">
                {props.zombieFighters.map((zombieFighter) => 
                    <li key = {zombieFighter.name}>
                        <img src={zombieFighter.img} alt={zombieFighter.name} />
                        <div>name: {zombieFighter.name}</div>
                        <div>price: {zombieFighter.price}</div>
                        <div>strength: {zombieFighter.strength}</div>
                        <div>agility: {zombieFighter.agility}</div>
                        <button onClick={() => props.handleAddFighter(zombieFighter)}>Add</button> 
                    </li>
                )}
            </ul>
        </>
     )
}
 
export default Fighters