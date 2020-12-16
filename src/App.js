import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { DailyTop } from './pages/DailyTop';
import { Top } from './pages/Top';
import { DailyDetail } from './pages/DailyDetail';
import { CategoryView } from './pages/CategoryView';
import { Portfolio } from './pages/Portfolio';

class App extends Component{

  render(){
    return(
      <div className="container">
        <Router>
          <Header />
          <div>
            <Switch>
                <Route exact path='/' component={Top} />
                <Route exact path='/daily' component={DailyTop} />
                <Route exact path='/daily/:id' component={DailyDetail} />
                <Route exact path='/daily/category/:cat' component={CategoryView}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route render={() => <h4>not found...</h4>} />
            </Switch>
          </div>
        </Router>       
      </div>
    );
  }

}

export default App;