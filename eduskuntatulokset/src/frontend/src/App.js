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

    this.state = {
      done: false,
      gotin: false,
      percent: ""
    };

    this.goToFormStart = this.goToFormStart.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  goToFormStart() {
    const element = document.getElementById("form");
    element.scrollIntoView({ behavior: "smooth" });
  }

  onSubmit() {
    this.setState({ done: true, gotin: true });

    const score = document.getElementById("score");
    score.scrollIntoView({ behavior: "smooth" });
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
                <div className="left">
                  <li>
                    <label>
                      Vaalipiiri: <br />
                      <input type="text" name="vaalipiiri" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Puolue: <br />
                      <input type="text" name="puolue" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Ikä: <br />
                      <input type="text" name="ikä" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Sukupuoli: <br />
                      <select name="toimii_kansanedustajana">
                        <option value="nainen">Nainen</option>
                        <option value="mies">Mies</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Toimin tällä hetkellä kansanedustajana:{" "}
                      <select name="toimii_kansanedustajana">
                        <option value="kyllä">Kyllä</option>
                        <option value="ei">Ei</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Kotikunta: <br />
                      <input type="text" name="kotikunta" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Äidinkieli: <br />
                      <input type="text" name="äidinkieli" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Työnantaja: <br />
                      <input type="text" name="työnantaja" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Ammattiasema: <br />
                      <input type="text" name="ammattiasema" />
                    </label>
                  </li>
                </div>
                <div className="right">
                  <li>
                    <label>
                      Koulutus: <br />
                      <input type="text" name="koulutus" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Uskonnollinen yhteisö:
                      <br />
                      <input type="text" name="uskonnollinen_yhteisö" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Poliittinen kokemus:
                      <br />
                      <input type="text" name="poliittinen_kokemus" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Käytän vaaleihin rahaa:
                      <br />
                      <select name="käytän_vaaleihin_rahaa">
                        <option value="kyllä">Kyllä</option>
                        <option value="ei">Ei</option>
                      </select>
                    </label>
                  </li>
                  <li>
                    <label>
                      Käytän vaaleihin rahaa:
                      <br />
                      <input type="text" name="käytän_vaaleihin_rahaa" />
                    </label>
                  </li>
                  <li>
                    <label>
                      Ulkopuolisen rahoituksen osuus:
                      <br />
                      <input
                        type="text"
                        name="ulkopuolisen_rahoituksen_osuus"
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      Vuositulot: <br />
                      <input type="text" name="vuositulot" />
                    </label>
                  </li>
                </div>
              </ul>

              <ul>
                {data["multichoice"].map(label => {
                  return (
                    <li>
                      <label>
                        {label}:
                        <input type="radio" name="täysin_samaa_mieltä" />
                        Täysin samaa mieltä
                        <input
                          type="radio"
                          name="jokseenkin_samaa_mieltä"
                        />{" "}
                        Jokseenkin samaa mieltä
                        <input type="radio" name="jokseenkin_eri_mieltä" />{" "}
                        Jokseenkin eri mieltä
                        <input type="radio" name="täysin_eri_mieltä" /> Täysin
                        eri mieltä
                        <input type="radio" name="ohita_kysymys" /> Ohita
                        kysymys
                      </label>
                    </li>
                  );
                })}
              </ul>

              <ul>
                {data["yesno"].map(label => {
                  return (
                    <li>
                      <label>
                        {label}:
                        <select>
                          <option value="kyllä">Kyllä</option>
                          <option value="ei">Ei</option>
                        </select>
                      </label>
                    </li>
                  );
                })}
              </ul>

              <p className="sub-title">Työ</p>
              <p className="sub-title">Talous</p>
              <p className="sub-title">Turvallisuus</p>
              <p className="sub-title">Terveys</p>
              <p className="sub-title">Tulevaisuus</p>
              <p className="sub-title">Äänestykset</p>
            </form>
            <button className="submit" onClick={this.onSubmit}>
              Katso tulos
            </button>
          </div>
        </div>
        <div className="score" id="score">
          {this.state.gotin ? (
            <div className="succeeded">
              <h1>Onneksi olkoon</h1>
            </div>
          ) : (
            <div className="failed">
              <h1>Valitettavasti et olisi päässyt eduskuntaan</h1>
            </div>
          )}
        </div>
        )}
      </div>
    );
  }
}

export default App;
