import React, { useState } from "react";

function App() {
  const colors = ["blue", "green", "orange"];
  const [activeDoor, setActiveDoor] = useState(null);

  const handleDoorActivation = (door) => {
    setActiveDoor(door);
  };

  const resetActiveDoor = () => {
    setActiveDoor(null);
  };

  const getActiveDoorText = () => {
    if (activeDoor) {
      return `Active door: ${activeDoor}`;
    }
    return "Active door: none";
  };

  const getLiStyle = (door) => {
    if (activeDoor === door) {
      return { backgroundColor: door };
    }
    return {};
  };

  return (
    <main className="main">
      <h1>Active Doors</h1>
      <h2>Click on a door to activate it!</h2>
      <h3>{getActiveDoorText()}</h3>
      <ul className="doors">
        {colors.map((color) => (
          <li key={color} style={getLiStyle(color)}>
            <img src={`/images/${color}-door.jpg`} alt={`${color} door`} />
            <button onClick={() => handleDoorActivation(color)}>
              Activate {color} door
            </button>
          </li>
        ))}
      </ul>
      <br />
      <button className="resetButton" onClick={resetActiveDoor}>
        Reset
      </button>
    </main>
  );
}

export default App;