import React, { Component } from "react";
import sad from "./images/et_paassyt.svg";
import happy from "./images/paasit.svg";
import front from "./images/etusivu.svg";
import "./App.css";
const data = require("./data.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  goToFormStart() {
    const element = document.getElementById("form");
    element.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div className="App">
        <div className="lander">
          <div className="left-text">
            <h1>GoForen Vaalikone</h1>
            <p>
              Pääsisitkö eduskuntaan? <br />
              Nopealla vaalikoneella voit testata olisiko sinut valittu vuoden
              2015 vaaleissa ja arvion siitä miten hyvin olisit sopinut
              eduskuntaan. <br />
            </p>
            <p>
              Data perustuu Ylen Vaalikoneen vastauksiin, joita on verrattu
              vaaleissa valittuihin ehdokkaisiin.
            </p>
            <p>Onko sinusta eduskunta materiaalia?</p>
            <button className="begin" onClick={this.goToFormStart}>
              Aloita kysely
            </button>
          </div>
          <div className="right-img">
            <img src={front} className="front-img" />
          </div>
        </div>
        <div className="questionaire" id="form" ref={this.formRef}>
          <div className="progress">
            <p className="prog-dot fin" />
          </div>
          <div className="questions">
            <form>
              <p className="sub-title">Perustiedot</p>

              <ul>
                {data["personal"].map((label) => {
                    return <li><label>
                        {label}: <input type="text" name={label} />
                      </label>
                      </li>
                  })
                }
              </ul>

              <p className="sub-title">Työ</p>
              <p className="sub-title">Talous</p>
              <p className="sub-title">Turvallisuus</p>
              <p className="sub-title">Terveys</p>
              <p className="sub-title">Tulevaisuus</p>
              <p className="sub-title">Äänestykset</p>
            </form>
          </div>
        </div>
        <div className="score">
          <h1>Onnittelut</h1>
        </div>
      </div>
    );
  }
}

export default App;
