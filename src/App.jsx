import "./App.css";
import RouteIndex from "./routes";
import store from "./redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <RouteIndex />
    </Provider>
  );
}

export default App;
