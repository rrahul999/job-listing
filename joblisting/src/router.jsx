import React from 'react'
import { Route,Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './jobComponents/Home'
import Createjob from './jobComponents/Createjob'
import Apply from './jobComponents/Apply'
import Joblist from './jobComponents/Joblist'
import Navbar from './jobComponents/Navbar'


const Routing = () => (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Createjob" component={ Createjob} />
        <Route path="/Joblist" component={Joblist}/>
        <Route path="/Apply/:id" component={Apply} /> 
      </Switch>
    </Router>
  );
  
  export default Routing;