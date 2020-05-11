import React, { Component } from 'react';
import Contacts from './Component/Contact/Contacts';
import {Provider} from './Component/Context'
import AddContact from './Component/Contact/AddConatct'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; 
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Component/page/About'
import Pagenotfond from './Component/page/Pagenotfond'
import EditContact from './Component/Contact/EditConatct'



class App extends Component {
  render(){
    return (
      <Provider>
        <Router>
        <div className="App">
          <Navbar title="Contact List"/> 
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/Contact/add" component={AddContact}/>
            <Route exact path="/Contact/Edit/:id" component={EditContact} />
            <Route exact path="/About/:id/:name" component={About}/>
           
            <Route component={Pagenotfond}/>
          
          </Switch>
        
       </div>
        </Router>
      </Provider>
      
    );
  }
  
}

export default App;
