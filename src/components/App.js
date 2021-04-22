import "../styles/App.css";
import Watch from "./Watch";
import Laps from "./Laps";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementSecs,
  incrementMins,
  addLap,
  removeLap,
  restart,
  running,
  addTimeouts,
} from "./actions";

function App(props) {
  const counterMin = useSelector((state) => state.counterMin);
  const counterSec = useSelector((state) => state.counterSec);
  const counterMilSec = useSelector((state) => state.counterMilSec);
  const ManageLaps = useSelector((state) => state.ManageLaps);
  const timeouts = useSelector((state) => state.timeout);

  const dispatch = useDispatch();

  const dispatchTimeout = (timeout) => {
    dispatch(addTimeouts(timeout));
  };

  const dispatchAction = () => {
    dispatch(increment());
  };

  const dispatchActionSecs = () => {
    dispatch(incrementSecs());
  };

  const dispatchActionMins = () => {
    dispatch(incrementMins());
  };

  const dispatchActionAddLap = (time) => {
    dispatch(addLap(time));
  };

  const dispatchActionRemoveLap = (id) => {
    dispatch(removeLap(id));
  };

  const dispatchRestart = () => {
    dispatch(restart());
  };

  const dispatchRunning = () => {
    dispatch(running());
  };

  return (
    <div className="App">
      <main className="main">
        <Watch
          counterMilSec={counterMilSec}
          counterSec={counterSec}
          counterMin={counterMin}
          dispatchActionAddLap={dispatchActionAddLap}
          dispatchRestart={dispatchRestart}
          dispatchAction={dispatchAction}
          dispatchActionSecs={dispatchActionSecs}
          dispatchActionMins={dispatchActionMins}
          dispatchRunning={dispatchRunning}
          dispatchTimeout={dispatchTimeout}
          timeouts={timeouts}
        />
        <Laps
          ManageLaps={ManageLaps}
          dispatchActionRemoveLap={dispatchActionRemoveLap}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
