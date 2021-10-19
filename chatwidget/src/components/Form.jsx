import React from "react";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Enter Your Message..."
          value={props.value}
          onChange={props.onChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
