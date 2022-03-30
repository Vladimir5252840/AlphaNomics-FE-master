import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Auth } from "./reducers";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const Store = () => {
  const persistConfig = {
    key: "root",
    storage: storage,
    reconciliation: autoMergeLevel2,
    whitelist: ["auth"],
  };
  const pertReducer = persistReducer(
    persistConfig,
    combineReducers({ auth: Auth })
  );
  const middleWare = applyMiddleware(thunk);
  return createStore(pertReducer, middleWare);
};

export default Store;
