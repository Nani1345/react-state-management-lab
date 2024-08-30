// npm modules
import { useState } from "react";

// components
import Fighters from "./components/fighters/fighters/Fighters";
import TeamList from "./components/fighters/team/TeamList";

// data
import { fightersData } from "./data/data";

// css
import'./app.css'


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighter] = useState(fightersData);

  const handleAddFighter = (fighter) => {
    

    if (money >= fighter.price){
      setTeam([...team, fighter])
      setZombieFighter(zombieFighters.filter(fig => fig.name !== fighter.name))
      setMoney(money => money - fighter.price)
      setTotalStrength(totalStrength => totalStrength + fighter.strength) 
      setTotalAgility(totalAgility => totalAgility + fighter.agility) 
    } else{
      console.log("Not enough money")
    }
  }

  function handleRemoveFighter(fighter) {
    setTeam(team.filter(fig => fig.name !== fighter.name))
    setZombieFighter([...zombieFighters, fighter])
    setMoney(money => money + fighter.price)
    setTotalStrength(totalStrength => totalStrength - fighter.strength) 
    setTotalAgility(totalAgility => totalAgility - fighter.agility)
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility:{totalAgility}</h3>
      <TeamList 
        team = {team}
        handleRemoveFighter = {handleRemoveFighter}
      />
      <Fighters
        zombieFighters = {zombieFighters}
        handleAddFighter = {handleAddFighter}
      />
    </>
  )
}

export default App
