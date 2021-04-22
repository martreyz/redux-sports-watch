import "../styles/Watch.scss";

const Watch = (props) => {
  let time;
  let counterStoper = 0;

  const dispatchRunning = (stoper) => {
    if (stoper === undefined) {
      if (counterStoper > 0) {
        props.dispatchAction();
      }
      if (counterStoper % 100 === 0 && counterStoper !== 0) {
        props.dispatchActionSecs();
      }
      if (counterStoper % 6000 === 0 && counterStoper !== 0) {
        props.dispatchActionMins();
      }
      counterStoper++;
      manageStoper();
    } else {
      clearTimeout(props.timeouts[0]);
      props.dispatchRestart();
      counterStoper = 0;
    }
  };

  const manageStoper = () => {
    props.dispatchTimeout(
      setTimeout(function () {
        dispatchRunning();
      }, 10)
    );
  };

  let counter =
    (props.counterMin <= 9 ? "0" + props.counterMin : props.counterMin) +
    ":" +
    (props.counterSec <= 9 ? "0" + props.counterSec : props.counterSec) +
    ":" +
    (props.counterMilSec <= 9
      ? "0" + props.counterMilSec
      : props.counterMilSec);

  const stopCounter = () => {
    const stop = document.querySelector(".watch_stop");
    const counterElementStop = document.querySelector(
      ".watch_counterDetailStop"
    );
    const counterDecoration = document.querySelector(
      ".watch_counterDecoration"
    );
    const counterElement = document.querySelector(".watch_counterDetail");
    if (stop.id === "start") {
      manageStoper();
      counterElementStop.classList.add("hidden");
      stop.innerHTML = "Stop";
      stop.id = "stop";
      counterElement.innerHTML = counter;
      counterDecoration.classList.remove("hidden");
    } else {
      time = counterElement.innerHTML;
      stop.innerHTML = "Start";
      dispatchRunning(true);
      props.dispatchRestart();
      stop.id = "start";
      counterElementStop.innerHTML = time;
      counterElementStop.classList.remove("hidden");
      counterDecoration.classList.add("hidden");
    }
  };

  const dispatchActionAddLap = () => {
    const counterElement = document.querySelector(".watch_counterDetail");
    const timeLap = counterElement.innerHTML;
    props.dispatchActionAddLap(timeLap);
  };

  return (
    <section className="watch">
      <div className="watch_counter">
        <div className=" hidden watch_counterDecoration"></div>
        <h3 className="watch_counterDetail">{time ? time : counter}</h3>
        <div className="hidden watch_counterDetailStop">{time}</div>
        <button onClick={dispatchActionAddLap} className="watch_lap">
          Lap
        </button>
        <button id="start" onClick={stopCounter} className="watch_stop">
          Start
        </button>
      </div>
      {/* <button className="watch_toggle">Backwards mode</button>
      <button className="watch_toggle watch_toggleActive">Forwards mode</button> */}
    </section>
  );
};

export default Watch;
