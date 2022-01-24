import { 
  createStore, 
  combineReducers, 
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk';
import { carReducer } from './reducers/carReducer'

const rootReducer = combineReducers(
  { 
    car: carReducer,
  }
)

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store