import React, {useState} from "react";
import "./ExpenseForm.css";

// Did assignment 4 all in Expenseform!!!
const ExpenseForm = (props) => {
    // event.target.value is always initialized as a String, therefore we initialize the useState() input boxes as Strings
    // Now we have craeted three state slices to accomodate changes to three input boxes
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    /* We can also drop the three separate useState() lines above and instead go for one
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  })
  */
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
        /* The tricky thing is that because we have a single useState object, it is of absolute essence that we change all the states, because if we only change one
    portion of the useState which is enteredTitle, but not the two others, enteredAmount and enteredDate will be lost! To fix this, we use the spread operator
    ...userInput which takes an object and takes all key value pairs and adds them to the new object, whilst enteredTitle is the only key getting overrided!
    setUserInput({
        ...userInput,
        enteredTitle: event.target.value,
    })
    Another VERY IMPORTANT THING is that because React schedules state changes, we might not always get the latest state available towards our next one.
    INCREMENTING a value ++ could potentially be incorrect because if the scheduler is too slow, we might increment an older state, think race condition! Therefore in updates
    that are relatively frequent and sensitive to the correct states, we must use this method which GUARANTEES state updates.
    setUserInput((prevState) => {
        return { ...prevState, enteredTitle:event.target.value};
    });
    */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
        /*    setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
    })
    */
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
        /*    setUserInput({
        ...userInput,
        enteredDate: event.target.value,
    })
    */
    };

    const submitHandler = (event) => {
        // We have this because by default, by submitting forms, React will automatically send a request to a server hosting the webpage.
        // We wanna handle all data submitted locally only on JavaScript and thus the page doesn't reload so taht we can handle our local data.
        event.preventDefault();

        // After we created the charts to display, we had to change amount: enteredAmount to amount: +enteredAmount because when adding multiple values,
        // those numbers are added as Strings instead of numbers, which is why we had to force a numbers conversion with +enteredAmount
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        // By calling props.onSaveExpenseData() we are essentially passing the function upwards to our NewExpense.js parent container
        // where its function saveExpenseDataHandler function takes our above expenseData object as a parameter to its function.
        // Thereby we can pass data from child container to parent container as opposed to our usual props method which only passes
        // from parent to child.
        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        props.onHideButton();
    };

    const cancelButton = (event) => {
        props.onHideButton();
    }

    // Here we have implemented two way binding in our <input> tags by adding value={} because now we don't just listen to changes
    // in the input to update our state, but we also feed our state back into the input. That way, when we change the state,
    // we also change the input. That's why we use two way binding to reset our input boxes using state!
    // By implementing two-waybinding we are implementing a Controlled Component! Twoway bindings(controlled components) are especially good for forms!
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangeHandler}
                        type="text"
                        value={enteredTitle}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangeHandler}
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler}
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={cancelButton}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
