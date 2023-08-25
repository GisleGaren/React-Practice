import styled from "styled-components"

// styled.button``; is called a tagged template literal
// button is a method on the styled object. What we pass between the two backticks will end up in the button method.
// the button method will return a button component. 
// We don't need any CSS selectors in here because there is no place to define them

// For pseudo selectors, we need a & to explcitly tell Styled Components that when in our case we have :focus
// we are saying, when the button is focused, give it the style inside the parenthesis.
const Button = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #8b005d;
    color: white;
    background: #8b005d;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }

`;

export default Button;
