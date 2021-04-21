import "../styles/Watch.scss";

const Watch = (props) => {
  const dispatchStoper = () => {
    props.dispatchStoper();
  };
  return (
    <section className="watch">
      <div className="watch_counter">
        <h3 className="watch_counterDetail">
          {props.counterMin <= 9 ? "0" + props.counterMin : props.counterMin}:
          {props.counterSec <= 9 ? "0" + props.counterSec : props.counterSec}:
          {props.counterMilSec <= 9
            ? "0" + props.counterMilSec
            : props.counterMilSec}
        </h3>
        <button className="watch_lap">Lap</button>
        <button onClick={dispatchStoper} className="watch_stop">
          Stop
        </button>
      </div>

      <button className="watch_toggle">Backwards mode</button>
      <button className="watch_toggle watch_toggleActive">Forwards mode</button>
    </section>
  );
};

export default Watch;
