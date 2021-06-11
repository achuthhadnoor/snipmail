import React from 'react'
import { Route, Switch } from 'react-router'
import Onboarding from './Onboarding'

export default function Main() {
    // Todo: check firebase user and redirect to login or connect page
    return (
        <Switch>
            <Route path="/" component={Onboarding} />
            {/* <Route path="/" component={Home} /> */}
            {/* <Route path="/mail/:id" component={Home} />
            <Route path="/settings" component={Home} />
            <Route path="/onboarding" component={Home} /> */}
        </Switch>
    )
}
