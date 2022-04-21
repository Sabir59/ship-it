import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";
import { Home } from "./pages";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};
