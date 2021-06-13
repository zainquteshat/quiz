import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Quiz from "./components/Quiz/Quiz";
import Categories from "./containers/Categories/Categories";
import classes from "./styles/App.module.scss";
import Header from "./components/Header/Header";

const App = () => (
  // TODO: Call the categories API and list accordingly
  // https://opentdb.com/api_category.php
  <BrowserRouter>
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
