// Styles
import 'rsuite/dist/styles/rsuite-default.css';
import "./assets/icons/css/all.css";
import './scss/App.scss';

// Imports
import Sidenav from "./scripts/layout/Sidenav";
import Header from "./scripts/layout/Header";
import Dashboard from "./scripts/components/Dashboard";

// General
function App() {
    return (
        <div className="ttd-main-wrapper">
            <Sidenav/>
            <div className="ttd-main-wrapper__container">
                <Header/>
                <Dashboard/>
            </div>
        </div>
    );
}

export default App;
