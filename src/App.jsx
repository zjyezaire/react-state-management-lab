import React, { useState } from 'react';
import './App.css';

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
  ];

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
    } else {
      console.log('Not enough money');
    }
  };

  return (
    <div className="App">
      <h1>Zombie Fighters</h1>
      <div className="money">Money: {money}</div>
      <div className="team-stats">Team Strength: {totalStrength}</div>
      <div className="team-stats">Team Agility: {totalAgility}</div>

      <div className="team">
        <h2>Team</h2>
        {team.length === 0 ? (
          <p className="pick-team">Pick some team members!</p>
        ) : (
          <ul>
            {team.map((fighter, index) => (
              <li key={index}>
                <img src={fighter.img} alt={fighter.name} />
                <div>{fighter.name}</div>
                <div>Price: ${fighter.price}</div>
                <div>Strength: {fighter.strength}</div>
                <div>Agility: {fighter.agility}</div>
                <button onClick={() => handleRemoveFighter(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <div>{fighter.name}</div>
            <div>Price: ${fighter.price}</div>
            <div>Strength: {fighter.strength}</div>
            <div>Agility: {fighter.agility}</div>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
