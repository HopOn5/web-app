import ReactDOM from "react-dom"
import React from "react"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./redux/store"

const RenderApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<RenderApp />, document.getElementById("root"))
