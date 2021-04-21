import "../styles/App.css";
import Starter from "./Starter";
import Watch from "./Watch";
import Laps from "./Laps";
import Footer from "./Footer";
import { Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementSecs,
  incrementMins,
  stopCounter,
} from "./actions";

function App(props) {
  const counterMin = useSelector((state) => state.counterMin);
  const counterSec = useSelector((state) => state.counterSec);
  const counterMilSec = useSelector((state) => state.counterMilSec);
  const counterStoper = useSelector((state) => state.Stoper);

  const dispatch = useDispatch();

  const dispatchAction = () => {
    dispatch(increment());
  };

  const dispatchActionSecs = () => {
    dispatch(incrementSecs());
  };

  const dispatchActionMins = () => {
    dispatch(incrementMins());
  };

  const dispatchStoper = () => {
    dispatch(stopCounter());
  };

  return (
    <div className="App">
      <main className="main">
        <Route exact path="/">
          <Link className="starter_link" to="/stopwatch">
            <Starter
              dispatchAction={dispatchAction}
              dispatchActionMins={dispatchActionMins}
              dispatchActionSecs={dispatchActionSecs}
              counterStoper={counterStoper}
            />
          </Link>
        </Route>
        <Route exact path="/stopwatch">
          <Watch
            counterMilSec={counterMilSec}
            counterSec={counterSec}
            counterMin={counterMin}
            dispatchStoper={dispatchStoper}
          />
          <Laps />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
