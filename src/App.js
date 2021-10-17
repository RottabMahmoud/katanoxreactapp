import "./App.css";
import Table from "./components/Table.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Stats from "./components/Stats";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/">
            <Header />
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
