import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Home'

export default function Main() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/mail/:id" component={Home} />
            <Route path="/settings" component={Home} />
            <Route path="/onboarding" component={Home} />
        </Switch>
    )
}
