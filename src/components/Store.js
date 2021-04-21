import { createStore } from "redux";
import counter from "./reducers/Counter";

let store = createStore(counter);
