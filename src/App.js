// Libraries
import { Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

// Helpers
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state)
});


function App() {
  return (
    <Router history={history}>
      <div className="container">
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" exact component={EditExercise} />
          <Route path="/create" exact component={CreateExercise} />
          <Route path="/user" exact component={CreateUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
