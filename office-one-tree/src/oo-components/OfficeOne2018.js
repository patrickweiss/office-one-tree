import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class OfficeOne2018 extends OfficeLeaf {
  constructor(props) {
    super(props);
    this.subject= "office one";
    this.verb="2018";
    this.path=["ObRoot","OfficeOne2018"];
  }
  renderMobile(){
    console.log("renderMobile");
    return (
      <div>
      <h1>office one 2018</h1>
      <h2>Das Mobile Büro für 2019 schon im Jahr 2018</h2>
      <p>Belege erstellen, erfassen, buchen. Alles mit dem Handy. In Sekunden. Immer und überall, wenn ein Geschäftsvorfall aufgrund von Steuergesetzen belegt werden muss.</p>
      Das ist unser Entwicklungsziel. 2018 ist unser Testjahr, und Sie sind einer der wenigen Testuser, welche die Software schon 2018 komplett kostenlos nutzen können. In 2019 bieten wir office one 2019 dann für 2 Euro pro Monat als Software as a Service an.
      <p>Professionellen Support bieten wir ab 30 Euro/Monat an.</p>
      </div>
    );
  
  }
}
components.OfficeOne2018=OfficeOne2018;

export default OfficeOne2018;