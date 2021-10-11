import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Episodes } from './pages/Episodes'
import { Home } from './pages/Home'

export function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/episodes"  component={Episodes} />
            </Switch>
        </BrowserRouter>
    )
}