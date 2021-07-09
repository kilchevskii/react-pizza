import  pizzasReducer  from "./pizzas";
import  filtersReducer  from "./filters";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer
});

export default rootReducer