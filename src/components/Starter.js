import "../styles/Starter.scss";

const starter = (props) => {
  let milSecs;
  let secs;
  let mins;
  const clickStart = () => {
    milSecs = setInterval(props.dispatchAction, 10);
    secs = setInterval(props.dispatchActionSecs, 1000);
    mins = setInterval(props.dispatchActionMins, 60000);
  };

  if (props.counterStoper) {
    clearInterval(milSecs);
    clearInterval(secs);
    clearInterval(mins);
  }

  return (
    <button onClick={clickStart} className="starter">
      Start!
    </button>
  );
};

export default starter;
