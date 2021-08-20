import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { FormulaireAjoutInfirmier } from '../../pages/infirmiers/components/FormulaireAjoutInfirmier'
import { ListeInfirmiers } from '../../pages/infirmiers/components/ListeInfirmiers'
import { DetailInfirmier } from '../../pages/infirmiers/components/DetailInfirmier'
import { NavBar } from '../navBar/NavBar'

export const Routing = (props) => {

    const pages =[
        {href:"/liste", name:"Liste"},
        {href:"/formulaire", name:"Formulaire"},
    ]

    return (
        <Router>
            <NavBar pages={pages} />
            <Switch>
                <Route path="/liste">
                    <ListeInfirmiers />
                </Route>
                <Route path="/formulaire">
                    <FormulaireAjoutInfirmier/>
                </Route>
                <Route path="/detail/:id" render={props => <DetailInfirmier id={props.match.params.id}/>}></Route>
            </Switch>
        </Router>
    )  
}