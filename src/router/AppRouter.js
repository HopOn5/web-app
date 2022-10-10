import { BrowserRouter } from "react-router-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Onboarding from "../pages/onBoarding"
import { onboardingUrl } from "../pageUrls"

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={onboardingUrl}>
                    <Onboarding />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
