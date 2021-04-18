// Styles
import 'rsuite/dist/styles/rsuite-default.css';
import "./assets/icons/css/all.css";
import './scss/App.scss';

// Imports
import {BrowserRouter as Router} from "react-router-dom";
import store from "./scripts/redux/store"
import { Provider as ReduxProvider } from 'react-redux'

// Components
import Routes from "./scripts/Routes"
import Sidenav from "./scripts/layout/Sidenav";
import Header from "./scripts/layout/Header";

// General
function App() {
    return (
        <div className="ttd-main-wrapper">
            <Router>
                <ReduxProvider store={store}>
                    <Sidenav/>
                    <div className="ttd-main-wrapper__container">
                        <Header/>
                        <Routes/>
                    </div>
                </ReduxProvider>
            </Router>
        </div>
    );
}

export default App;
