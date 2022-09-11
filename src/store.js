import { legacy_createStore as createStore } from "redux";
import reducer from "./reducers/reducer";

function configureStore(state = { "id": 1, "plan": "truly unlimited", "details": "12 GB data, 100 free sms per day, unlimited outgoing calls", "amount": 499, "validity": "3 months" }) {
    return createStore(reducer, state);
}
export default configureStore;