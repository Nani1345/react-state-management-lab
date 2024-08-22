// src/App.jsx

import { useState } from "react";
import'./app.css'


const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  
  const [zombieFighters, setZombieFighter] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);
  

const handleAddFighter = (id) => {

  const selectedFighter = zombieFighters.find(fighter => fighter.id ===id)
  if(!selectedFighter) return

  
  
  
  if (money >= selectedFighter.price){
    const newTeam = [...team, selectedFighter]
    setTeam(newTeam)
    
   
    setMoney(money => money - selectedFighter.price)

  
    if(newTeam.length > 0){setTotalStrength(totalStrength => totalStrength + selectedFighter.strength) }else{setTotalStrength(0)}

    if(newTeam.length > 0){setTotalAgility(totalAgility => totalAgility + selectedFighter.agility) }else{ setTotalAgility(0)}
 
  } else{
    console.log("Not enough money")
  }
}

function handleRemoveFighter(id) {
  const selectedMember = team.find(member => member.id ===id)
  if (!selectedMember) return;

  // const updateTeam = team.filter(member => member.id !== id);  all members will be removed

  const index = team.findIndex(member => member.id === id);
  if (index === -1) return; // 
  const [removedMember] = team.splice(index, 1); 

 
  setTeam([...team])
  setMoney(money => money + selectedMember.price)
  setTotalStrength(totalStrength => totalStrength - selectedMember.strength) 
  setTotalAgility(totalAgility => totalAgility - selectedMember.agility)
}



  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility:{totalAgility}</h3>
      <h3>Team</h3>
      <ul className="team">
        {team.length >0 ? team.map((teamMember) => 
          <li key ={teamMember.id} >
            <img src={teamMember.img} alt={teamMember.name} />
            <div>name: {teamMember.name}</div>
            <div>price: {teamMember.price}</div>
            <div>strength: {teamMember.strength}</div>
            <div>agility: {teamMember.agility}</div>
            <button onClick={() => handleRemoveFighter(teamMember.id)}>Romove</button>
          </li>) : 'Pick some team members! '}
      </ul>


      <h3>Fighters</h3>
      <ul className="fighters">  
        {zombieFighters.map((zombieFighter) => 
          <li key = {zombieFighter.id}>
            <img src={zombieFighter.img} alt={zombieFighter.name} />
            <div>name: {zombieFighter.name}</div>
            <div>price: {zombieFighter.price}</div>
            <div>strength: {zombieFighter.strength}</div>
            <div>agility: {zombieFighter.agility}</div>
            <button onClick={() => handleAddFighter(zombieFighter.id)}>Add</button>
            
          </li>
        )}
      </ul>
    </>

  );
}

export default App
