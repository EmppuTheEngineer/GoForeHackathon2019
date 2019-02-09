import React, { Component } from "react";
import sad from "./images/et_paassyt.svg";
import happy from "./images/paasit.svg";
import front from "./images/Etusivu.svg";
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
                  <li>
                    <label>
                        Vaalipiiri: <input type="text" name="vaalipiiri" />
                    </label>
                  </li>
                  <li>
                    <label>
                        Puolue: <input type="text" name="puolue" />
                    </label>
                  </li>
                  <li>
                    <label>
                        Ikä: <input type="text" name="ikä" />
                    </label>
                  </li>
                  <li>
                    <label>
                        Sukupuoli: <input type="text" name="sukupuoli" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Toimin tällä hetkellä kansanedustajana: <select name="toimii_kansanedustajana">
                        <option value="kyllä">Kyllä</option>
                        <option value="ei">Ei</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Kotikunta: <input type="text" name="kotikunta" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Äidinkieli: <input type="text" name="äidinkieli" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Työnantaja: <input type="text" name="työnantaja" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Ammattiasema: <input type="text" name="ammattiasema" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Koulutus: <input type="text" name="koulutus" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Uskonnollinen yhteisö: <input type="text" name="uskonnollinen_yhteisö" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Poliittinen kokemus: <input type="text" name="poliittinen_kokemus" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Käytän vaaleihin rahaa: <select name="käytän_vaaleihin_rahaa">
                        <option value="kyllä">Kyllä</option>
                        <option value="ei">Ei</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Käytän vaaleihin rahaa: <input type="text" name="käytän_vaaleihin_rahaa" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Ulkopuolisen rahoituksen osuus: <input type="text" name="ulkopuolisen_rahoituksen_osuus" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Vuositulot: <input type="text" name="vuositulot" />
                    </label>
                  </li>

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
