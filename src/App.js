// Styles
import 'rsuite/dist/styles/rsuite-default.css';
import "./assets/icons/css/all.css";
import './scss/App.scss';

// Router
import {BrowserRouter as Router} from "react-router-dom";

// Components
import Routes from "./scripts/Routes"
import Sidenav from "./scripts/layout/Sidenav";
import Header from "./scripts/layout/Header";


// General
function App() {
    return (
        <div className="ttd-main-wrapper">
            <Router>
                <Sidenav/>
                <div className="ttd-main-wrapper__container">
                    <Header/>
                    <Routes/>
                </div>
            </Router>
        </div>
    );
}

export default App;
