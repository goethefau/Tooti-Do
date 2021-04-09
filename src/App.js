// Styles
import "./assets/icons/css/all.css";
import './scss/App.scss';

// Imports
import Sidenav from "./scripts/layout/Sidenav";
import Header from "./scripts/layout/Header";

// General
function App() {
    return (
        <div className="ttd-main-wrapper">
            <Sidenav/>
            <div className="ttd-main-wrapper__container">
                <Header/>
                <div className="ttd-main-wrapper__container-content">

                </div>
            </div>
        </div>
    );
}

export default App;
