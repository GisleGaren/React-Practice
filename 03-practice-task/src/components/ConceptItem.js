import "../index.css";

function ConceptItem(props) {
  return (
        <li className="concept">
          <img src={props.image} alt="Image of the Specific Component" />
          <h2>Title: {props.title}</h2>
          <p>Description: {props.description}</p>
        </li>
  );
}

export default ConceptItem;