import classes from "./styles/App.module.scss";
import Categories from "./containers/Categories/Categories";
function App() {
  return (
    <div className={classes.App}>
      <h1 className={classes.Heading}>Select a Topic</h1>
      <Categories />
    </div>
  );
}

export default App;
