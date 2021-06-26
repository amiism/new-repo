import ForumHome from "./ForumHome";
import ForumNavbar from "./ForumNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import PostDetails from "./PostDetails";

function Forum() {
  return (
    <Router>
      <div className="App">
        <ForumNavbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ForumHome />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/Posts/:id">
              <PostDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Forum;
