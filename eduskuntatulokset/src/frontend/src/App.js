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

              <div className="container">
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
                        Sukupuoli: <br />{" "}
                        <select name="sukupuoli">
                          <option value="1">M</option>
                          <option value="0">F</option>
                        </select>
                      </label>
                    </li>
                    <li>
                      <label>
                        Toimin tällä hetkellä kansanedustajana:{" "}
                        <select name="toimii_kansanedustajana">
                          <option value="1">Kyllä</option>
                          <option value="0">Ei</option>
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
                        <select name="tyonantaja">
                          <option value="0">Julkinen</option>
                          <option value="1">Yksityinen</option>
                          <option value="2">Ei työelämässä</option>
                        </select>
                      </label>
                    </li>
                    <li>
                      <label>
                        Ammattiasema: <br />{" "}
                        <select name="ammattiasema">
                          <option value="0">
                            Korkeakoulututkintoa vaativa tehtävä{" "}
                          </option>
                          <option value="1">Asiantuntijatehtävä</option>
                          <option value="2">Työntekijä </option>
                          <option value="3">Maanviljelijä</option>
                          <option value="4">Johtava asema</option>
                          <option value="5">Yrittäjä</option>
                          <option value="6">Eläkeläinen</option>
                          <option value="7">Opiskelija</option>
                          <option value="8">Taiteilija</option>
                          <option value="9">Joku muu</option>
                        </select>
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
                        Poliittisen puolueen jäsen: <br />{" "}
                        <select name="poliittisenjasen">
                          <option value="1">Kyllä</option>
                          <option value="0">Ei</option>
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
              </div>

              <table>
                <tbody>
                  <tr>
                    <th>Kysymys</th>
                    <th>Samaa mieltä ... Eri mieltä</th>
                    <th>Ohita kysymys:</th>
                  </tr>

                  {data["multichoice"].map((label, index) => {
                    return (
                      <tr>
                        <td>{label}:</td>
                        <td>
                          {" "}
                          <input
                            className="form-radio"
                            type="radio"
                            name={index}
                            value="5"
                          />
                          <input type="radio" name={index} value="4" />
                          <input type="radio" name={index} value="3" />
                          <input type="radio" name={index} value="2" />
                        </td>
                        <td>
                          <input type="radio" name={index} value="1" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

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
            </form>
            <button className="submit begin" onClick={this.onSubmit}>
              Katso tulos
            </button>
          </div>
        </div>
        <div className="score" id="score">
          {this.state.gotin ? (
            <div className="succeeded">
              <h1>Onneksi olkoon, pääsit eduskuntaan!</h1>
              <img src={happy} className="img" />
              <div className="right">
                <p>
                  Vastaustesi perusteella olisit ollut loistava ehdokas vuoden
                  2015 vaaleissa.
                </p>
              </div>
              <h3>Eduskunta sopivuutesi on</h3> <h1>83%</h1>
            </div>
          ) : (
            <div className="failed">
              <h1>Valitettavasti et olisi päässyt eduskuntaan</h1>
              <img src={sad} className="img" />
              <div className="right">
                <p>
                  Vastaustesi perusteella et olisi menestynyt vuoden 2015
                  vaaleissa.
                </p>
              </div>
              <h3>Eduskuntasopivuutesi on vain</h3>
              <h1>24%</h1>
            </div>
          )}
        </div>
        )}
      </div>
    );
  }
}

export default App;
