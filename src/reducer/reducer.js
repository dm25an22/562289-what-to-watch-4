import {reducer as data} from "./data/data";
import {reducer as appState} from "./app-state/app-state";
import {combineReducers} from "redux";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP_STATE]: appState
});
