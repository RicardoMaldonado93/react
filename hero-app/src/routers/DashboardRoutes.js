import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { HeroScreen } from '../components/ui/heroes/HeroScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container-fluid mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeID" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />
                    
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
