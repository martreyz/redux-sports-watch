import "../styles/Laps.scss";

const Laps = (props) => {
  const dispatchActionRemoveLap = (event) => {
    props.dispatchActionRemoveLap(parseInt(event.target.id));
  };

  const mappedLaps = props.ManageLaps.map((item) => (
    <li key={item.id} className="laps_listItem">
      <label className="laps_listItemL" htmlFor={item.id}>
        {item.description}
      </label>
      <input
        className="laps_listItemI"
        placeholder="Lap comments"
        id={item.id}
      />
      <button
        id={item.id}
        onClick={dispatchActionRemoveLap}
        title="Delete Lap"
        className="laps_listItemB"
      ></button>
    </li>
  ));
  return (
    <section className="laps export_to_excel">
      <ul className="laps_list">{mappedLaps}</ul>
    </section>
  );
};

export default Laps;
