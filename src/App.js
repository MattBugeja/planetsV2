import "./App.css";
import PageContainer from "./containers/page";
import store from "./state/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PageContainer />
      </div>
    </Provider>
  );
}

export default App;
