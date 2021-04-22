import counterMilSec from "./CounterMilSec";
import counterMin from "./CounterMin";
import counterSec from "./CounterSec";
import ManageLaps from "./ManageLaps";
import timeout from "./Timeout";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterMilSec,
  counterMin,
  counterSec,
  ManageLaps,
  timeout,
});

export default allReducers;
