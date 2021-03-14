import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./components/login";
import Logout from "./components/logout";



function Home(props) {
  return (
    <div>
    <div className="parallax-wrapper" style={{ marginTop: "90vh" }}>
      <div className="content d-flex flex-column justify-content-center" style={{marginTop: '-5rem'}}>
        <h1 className="display-4">ストリートアート</h1>
        <h6>- S T R E E T A R T -</h6>
        <h6 style={{ lineHeight: "2" }}>
          Tokyo . Honolulu . Los Angeles . Seattle
        </h6>
      </div>
    </div>
    <div className="parallax-wrapperTwo">
      <div className="content">
        <h3>
          <strong>Street Art</strong>
          <em>
            {" "}
            - an unofficial and independent visual art created in public
            locations for public visibility.
          </em>{" "}
        </h3>
        <br />
        <h2 style={{ lineHeight: "7" }}>
          {" "}
          • Street art is associated with the terms "independent art",
          "post-graffiti", "neo-graffiti", and guerrilla art •{" "}
        </h2>
      </div>
    </div>

    <div className="parallax-wrapperThree">
      <div className="content">
        <h2>
          Street art is a form of artwork that is displayed in public on
          surrounding buildings, on streets, trains, and on other publicly
          viewed surfaces. Many instances come in the form of guerrilla art,
          which is intended to make a personal statement about the society
          that the artist lives within. The work has moved from the
          beginnings of graffiti and vandalism to new modes where artists
          work to bring messages, or just beauty, to an audience.
        </h2>
      </div>
    </div>
    <div className="parallax-wrapperFour">
      <div className="content">
        <h3>
          Slogans of protest and political or social commentary graffiti on
          walls are the precursor to modern graffiti and street art, and
          continue as one aspect of the genre. Street art in the form of
          text or simple iconic graphics of corporate icons can become
          well-known yet enigmatic symbols of an area or an era. Some credit
          the Kilroy Was Here graffiti of the World War II era as one such
          early example; a simple line-drawing of a long-nosed man peering
          from behind a ledge.
          <br />
          <br />
          Author Charles Panati indirectly touched upon the general appeal
          of street art in his description of the "Kilroy" graffiti as
          "outrageous not for what it said, but where it turned up". Much of
          what can now be defined as modern street art has well-documented
          origins dating from New York City's graffiti boom, with its
          infancy in the 1960s, maturation in the 1970s, and peaking with
          the spray-painted full-car subway train murals of the 1980s
          centered in the Bronx.
        </h3>
      </div>
    </div>
    <div className="parallax-wrapperFive">
      <div className="content">
        <h2>早い時期</h2>
        <h5>- T h e E a r l y Y e a r s -</h5>
        <h3 style={{ paddingTop: "3rem" }}>
          The northwest wall of the intersection at Houston Street and the
          Bowery in New York City has been a target of artists since the
          1970s. The site, now sometimes referred to as the Bowery Mural,
          originated as a derelict wall that graffiti artists used freely.
          Keith Haring once commandeered the wall for his use in 1982. After
          Haring, a stream of well-known street artists followed, until the
          wall had gradually taken on prestigious status. By 2008, the wall
          became privately managed and made available to artists by
          commission or invitation only.
        </h3>
      </div>
    </div>
    <div className="parallax-wrapperSix">
      <div className="content" style={{backgroundColor: '#444'}}>
        <h2>今日</h2>
        <h5>- T o d a y -</h5>
        <h3 style={{ paddingTop: "3rem" }}>
          Street art has since received artistic recognition with the
          high-profile status of Banksy and other artists. This has led
          street art to become one of the 'sights to see' in many European
          cities. Some artists now provide tours of local street art and can
          share their knowledge, explaining the ideas behind many works, the
          reasons for tagging, and the messages portrayed in a lot of
          graffiti work. Berlin, London, Paris, Hamburg and other cities all
          have popular street art tours running all year round. In London
          alone there are supposedly ten different graffiti tours available
          for tourists. Many of these organizations, such as Alternative
          London, ParisStreetArt, AlternativeBerlin, pride themselves on
          working with local artists, so visitors can get an authentic
          experience and not just a rehearsed script.
        </h3>
      </div>
    </div>
  </div>
  );
}

function Artist(props) {
  return (
    <div
      className="d-flex justify-content-center flex-column"
      style={{ marginTop: "2rem", textAlign: "center" }}
    >
      <h1 style={{ textAlign: "center" }}>アーティストのディレクトリ</h1>
      <h4 style={{textAlign: 'center' }}>- A R T I S T . D I R E C T O R Y -</h4>
     
      <img
        src="https://assets.codepen.io/4996277/pexels-surawitch-atsaradorn-1368042.jpg"
        className="sizer"
        alt="one"
        style={{ margin: "5rem auto", width: '70vw' }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        className="d-flex flex-row justify-content-between"
        style={{ backgroundColor: "white", position: 'sticky' }}
      >
        {" "}
        <div className="d-flex flex-row justify-content-between" style={{maxWidth: '75vw'}}>
          <h3 style={{margin:'.5vh 2vw'}}>ストリートアート </h3><br/><br/><h5>S T R E E T . A R T</h5> 
          <h6 style={{ lineHeight: "2", margin: '1vh 5vw' }}>
            Tokyo . Honolulu . Los Angeles . Seattle
          </h6>
        </div>
        <div className='d-flex flex-row' style={{alignSelf: 'end', margin: '0.5vh 2vw'}}>
          {" "}
          <Link
            to="home"
            className="btn btn-outline-light"
            style={{ color: "#666" }}
          >
            Home
          </Link>
          <Link
            to="login"
            className="btn btn-outline-light"
            style={{ color: "#666", margin: '0 1rem' }}
          >
            Login
          </Link>
          <Link
            to="/"
            className="btn btn-outline-light"
            style={{ color: "#666", margin: '0 1rem' }}
          >
            Logout
          </Link>
          <Link
            to="artists"
            className="btn btn-outline-light"
            style={{ color: "#666" }}
          >
            Artists
          </Link>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'  style={{opacity: '0.9'}}>
      <Link
            to="Home"
            className="btn btn-outline-light"
            style={{ color: "#666", margin: '50vh 0 ' }}
          >
            <h4 style={{color: 'white', padding: '2vh 5vw',}}>Step Inside</h4>
          </Link>
      </div>
      <Switch>
        <Route path='/Home' component={Home} />
        <Route path="/login" component={Login} />
        <Route path='/' component={Logout} />
        <Route path="/artists" component={Artist} />
      </Switch>
    </BrowserRouter>
  );
}
