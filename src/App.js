import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Quiz from "./components/Quiz/Quiz";
import Categories from "./containers/Categories/Categories";
import classes from "./styles/App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Link to="/" className={classes.Header}>
          <h1>Flashing Quizzes</h1>
        </Link>

        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
