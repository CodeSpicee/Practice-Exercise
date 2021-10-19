import React from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <p>This app is used by pressing the buttons</p>
      </div>
    );
  }
  return (
    <div>
      <p>button press history: {props.allClicks.join(" ")}</p>
    </div>
  );
};

export default History;
