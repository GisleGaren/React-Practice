import ConceptItem from "./ConceptItem";

function Concepts(props) {
  return (
    <div>
      <ConceptItem
        title={props.content[0].title}
        image={props.content[0].image}
        description={props.content[0].description}
      ></ConceptItem>
      <ConceptItem
        title={props.content[1].title}
        image={props.content[1].image}
        description={props.content[1].description}
      ></ConceptItem>
      <ConceptItem
        title={props.content[2].title}
        image={props.content[2].image}
        description={props.content[2].description}
      ></ConceptItem>
    </div>
  );
}

export default Concepts;
