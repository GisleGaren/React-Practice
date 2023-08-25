import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  // Initially the entered value in the input box is empty
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  // Whenever we type something in the input box, we trigger this function which changes the state value to the event input.
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  // This function is called when we submit the form and instead of calling the backend server, we do everything in the frontend
  // hence our use of event.preventDefault() we then pass off the entered value in the input box into our parent component App.js
  // that way our App.js parent component can get the input info via props.
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input type="text" style={{
          borderColor: !isValid ? "red" : "black",
          backgroundColor: !isValid ? "salmon" : "transparent"
          }}
          onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
