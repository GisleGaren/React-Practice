
import "../index.css";

function ConceptItem(props) {
  return (
    <div>
      <ul id="concepts">
        <li className="concept">
          <img src={props.image} alt="Image of the Specific Component" />
          <h2>Title: {props.title}</h2>
          <p>Description: {props.description}</p>
        </li>
      </ul>
    </div>
  );
}

export default ConceptItem;