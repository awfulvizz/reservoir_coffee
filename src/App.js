import './App.css';
import {ThemeProvider} from 'react-bootstrap';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Gallery from './components/gallery/gallery';
import Menu from './components/menu/menu';
import Location from './components/location/location';
import About from './components/about/about';
import Sidebar from './components/sidebar/sidebar';
import {useState} from 'react';
import ScrollToTop from "./helperFucntions/scrollToTop";

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <BrowserRouter basename={"/reservoir_coffee"}>
            <ThemeProvider>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Navbar toggle={toggle}/>
                <ScrollToTop/>
                <Switch>
                    <Route exact path={"/"}>
                        <Home/>
                    </Route>
                    <Route exact path={"/gallery"}>
                        <Gallery/>
                    </Route>
                    <Route exact path={"/menu"}>
                        <Menu/>
                    </Route>
                    <Route exact path={"/location"}>
                        <Location/>
                    </Route>
                    <Route exact path={"/about"}>
                        <About/>
                    </Route>
                </Switch>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;