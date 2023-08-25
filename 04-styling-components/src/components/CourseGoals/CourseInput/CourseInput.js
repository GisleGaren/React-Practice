import React, { useState } from 'react';
import { styled } from 'styled-components';
import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  & invalid input {
    border-color:red;
    background:rosybrown;
  }

  & invalid label{
    color: red;
  }
`;

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
  // the `` are backticks default in javascript or known as a template literal
  // <div className={`form-control ${!isValid ? "invalid" : ""}`}>
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
