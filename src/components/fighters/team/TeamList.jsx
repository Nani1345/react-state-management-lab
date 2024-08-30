const TeamList = (props) => {
    return ( 
        <>
            <h3>Team</h3>
            <ul className="team">
                {props.team.length > 0 ? props.team.map((teamMember) => 
                    <li key ={teamMember.name} >
                        <img src={teamMember.img} alt={teamMember.name} />
                        <p>name: {teamMember.name}</p>
                        <p>price: {teamMember.price}</p>
                        <p>strength: {teamMember.strength}</p>
                        <p>agility: {teamMember.agility}</p>
                        <button onClick={() => props.handleRemoveFighter(teamMember)}>Romove</button>
                    </li>) : 'Pick some team members!'
                }
            </ul>
        </>
     )
}
 
export default TeamList