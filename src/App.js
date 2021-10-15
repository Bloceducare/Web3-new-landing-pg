import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from "./view/Home";
import Footer from './components/Footer';
import Register from './view/Register';
import Raffle from './view/Raffle';
import { Flex } from './view/Raffle/Raffle.style';
import Countdown from 'react-countdown';
import { Image,Col,Row } from 'react-bootstrap';
import { Span1, Span2, Span3,PageDiv} from './components/Tag';
import ScrollToTop from './components/ScrollToTop';

  const renderer = ({hours, minutes, seconds, completed}) => {
      if (completed) {
        return(
        <>
      <Router>
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          {/* <Route path="/Raffle">
            <Raffle />
          </Route> */}
        </Switch>
        <Footer />
        </Router>
        </>
        )
      } else {
          return (
            <PageDiv>
              <Flex>
                  <Image src={`images/const.svg`}/>
              </Flex>
              <Flex>
                <Row>
                  <Col>
                    <Span1>{hours}</Span1>
                    <Flex><h1>HOURS</h1></Flex>
                  </Col>  
                  <Col>
                    <Span2>{minutes}</Span2>
                    <Flex><h1>MINUTES</h1></Flex>
                  </Col>
                  <Col>
                    <Span3>{seconds} </Span3>
                    <Flex><h1>SECONDS</h1></Flex>
                  </Col>
                </Row>
              </Flex>
            </PageDiv>
          )
      }
    }



function App() {
  return (
    <>
      <Countdown date={1633693894000} renderer={renderer}/>
    </>
  );
}

export default App;
