import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Footer, Header } from "../index";
import { FormPage, PreviewPage } from "../../pages";
import { AppContent, AppFlexWrapper } from "./styles";

export const App = () => {
  return (
    <Router>
      <AppFlexWrapper>
        <Header/>
        <AppContent>
          <Switch>
            <Route path="/form" component={FormPage}/>
            <Route path="/preview" component={PreviewPage}/>
            <Redirect to="/form" exact/>
          </Switch>
        </AppContent>
        <Footer/>
      </AppFlexWrapper>
    </Router>
  );
}