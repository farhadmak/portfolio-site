import React from 'react';
import { Switch, Route} from 'react-router-dom';

import HomePage from './HomePage'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'

const Main = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
    </Switch>

)

export default Main;