// Essentially, the whole point of this Card.js is that we essentially create a parent container which
// contains children container. In ExpenseItem.js, we can see that all contents within the <Card> tags 
// are children elements of parent container Card and they will be styled accordingly based on Card.css.

// One important thing is that <div> fundamental HTML tags support className, but custom component tags
// such as our <Card> tags do not, so we must include them so that we can have <Card className="expense-item">
// work, or else expense-item css class won't work with <Card>.

// This is why we have added the const classes part. Bear in mind that both "card" as well as "expense-item" classes
// CSS styling will only apply to the <Card> container and not its children elements.
import "./Card.css";


// Without {props.children} within the div tags, we would be unable to use the <Card> tag as a parent (wrapper) container itself,
// then we would have to use a <div> as a parent container. We 
function Card(props){
    const classes = "card " + props.className;
    return <div className={classes} >{props.children}</div>
}

export default Card;