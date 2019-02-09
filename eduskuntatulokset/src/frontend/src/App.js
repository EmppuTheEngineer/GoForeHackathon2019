import React, { Component } from "react";
import "./App.css";

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
        <div className="questionaire" id="form" ref={this.formRef}>
          <div className="progress">
            <p className="prog-dot fin" />
          </div>
          <div className="questions">
            <form>
              <p className="sub-title">Perustiedot</p>
              <label>
                Nimi: <input type="text" name="name" />
              </label>

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
