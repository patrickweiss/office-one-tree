import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';


class LeafTemplate extends OfficeLeaf {
  constructor(props) {
    super(props);
    var newProps = {};
    newProps.size = this.size;
    newProps.subject = this.subject;
    newProps.verb = this.verb;
    newProps.charactericon = this.charactericon;
    newProps.path = this.path;
    super.initialize(newProps);
  }
  renderMobile() {
    return (
      <div>
      <h1>office one 2018</h1>
      <h2>Das Mobile Büro für 2018</h2>
      <p>Belege erstellen, erfassen, buchen. Alle mit dem Handy. In Sekunden. Immer und überall, wenn ein Geschäftsvorfall aufgrund von Steuergesetzen belegt werden muss.</p>
      Das ist unser Entwicklungsziel. 2017 ist unser Testjahr, und sie sind einer der wenigen Testuser, welche die Software schon 2018 komplett kostenlos nutzen können. In 2019 bieten wir office one 2019 dann für 2 Euro pro Monat als Software as a Service an.
      </div>
    );

  }
}
components.LeafTemplate = LeafTemplate;

export default LeafTemplate;