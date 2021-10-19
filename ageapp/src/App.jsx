import React, { useState } from "react";
import History from "./components/History";

import Button from "./components/Button";
// import Display from "./components/Display";
// import Hello from "./components/Hello";

// const App = () => {
//   const name = "Peter";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const increasedByOne = () => setCounter(counter + 1);
//   const decreasedByOne = () => setCounter(counter - 1);
//   const resetToZero = () => setCounter(0);

//   console.log(counter);
//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increasedByOne} text="Plus" />
//       <Button onClick={resetToZero} text="Reset" />
//       <Button onClick={decreasedByOne} text="Reset" />
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0,
//   });

//   const handleLeftClick = () => {
//     setClicks({ ...clicks, left: clicks.left + 1 });
//   };

//   const handleRightClick = () => {
//     setClicks({ ...clicks, right: clicks.right + 1 });
//   };

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   );
// };

// export default App;

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="Left" />
      <Button handleClick={handleRightClick} text="Right" />

      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
