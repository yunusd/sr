import {MainLayout} from "components/layouts";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </MainLayout>
  );
}

export default App;
