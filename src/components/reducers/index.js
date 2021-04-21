import counterMilSec from "./CounterMilSec";
import counterMin from "./CounterMin";
import counterSec from "./CounterSec";
import Stoper from "./Stoper";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterMilSec,
  counterMin,
  counterSec,
  Stoper,
});

export default allReducers;
