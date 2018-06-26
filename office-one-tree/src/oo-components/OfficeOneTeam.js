import React from 'react';
import {OfficeLeaf,components} from './OfficeLeaf.js';
import SelbstaendigMachen from './SelbstaendigMachen.js';
import BenutzerAbmelden from './BenutzerAbmelden.js';



class OfficeOneTeam extends OfficeLeaf {
  constructor(props) {
    super(props);
    var newProps = {};
    newProps.size = this.size;
    newProps.subject= "Office One";
    newProps.verb="Team";
    newProps.path="OfficeOneTeam";
    newProps.charactericon = "OOT";
  
   super.initialize(newProps);
  }
  renderMobile(){
    console.log("render OfficeOneTeam");
    return (
      <div>
      <BenutzerAbmelden size="LIST_ITEM"/>
      <h1>OfficeOneTeam</h1>
      <p>Bürosoftware, Dienstleistungen und Anleitungen für Unternehmer</p>
      <ul>
      <SelbstaendigMachen size="LIST_ITEM"/>    
      <li>Rechnungen schreiben</li>
      <li>Ausgaben erfassen</li>
      <li>Bankbuchungen zuordnen</li>
      <li>Bilanz erstellen, Gewinn ermitteln, Steuer erklären</li>
      <li>Urlaub machen</li>
      </ul>
      <h2>10 x besser als die Konkurrenz</h2>
     <h3>schneller</h3>
     <ul>
      <li>Selbständig machen in 8 Stunden.</li>
      <li>Die erste Rechnung schreiben in 5 Minuten,</li>
      <li>jede weitere in 60 Sekunden.</li>
      <li>Ausgabe erfassen in 30 Sekunden.</li>
    </ul>
    <h3>einfacher</h3>
    <ul>
      <li>So einfach, wie einen Link klicken.</li>
    </ul>
    <h3>verständlicher</h3>
    <ul>
      <li>Alle Softwarefunktionen sind selbsterklärend.</li>
      <li>Alle Anleitungen sind ohne Vorkenntnisse nachvollziehbar.</li>
      <li>Alle Fragen die auftauchen beantwortet das OfficeOne.Team kostenlos schriftlich , oder per Videokonferenz für 30 Euro pro Monat</li>
    </ul>
    <h3>richtiger</h3>
    <ul>
      <li>... 3 Anwälte, 4 Meinungen ...</li>
      <li>Als erfahrener Unternehmer, haben sie irgendwann gelernt, dass es in der echten Welt kein richtig oder falsch gibt</li>
      <li>Unser Anspruch ist, dass die mit unserer Unterstützung erstellten Steuererklärungen deutlich "richtiger" sind, als die durchschnittliche, mit Hilfe eines Steuerberaters erstellte Steuererklärung</li>
      <li>Die vom Finanzamt vorgegeben Richtlinien können Sie mit unserer Unterstützung deutlich besser einhalten, als mit jeder anderen Software, jedem anderen Prozess und jedem anderen Steuerberater</li>
      <li>Durch die Nutzung unserer Software, Anleitungen und Beratung, erwerben Sie mehr Finanzkompetenz, als die meisten Unternehmer.</li>
    </ul>   
    <h3>flexibler</h3>
    <ul>
      <li>Wir bieten die einzige Software die so flexibel ist, wie Excel und Word und gleichzeitig effizienter als jede andere Business-Software die wir kennen</li>
    </ul>     
    <h3>sicherer</h3>
    <ul>
     <li>Für unsere Software benutzen wir die Dienste von Google Cloud Computing.</li>
     <li>Google Cloud Computing ist die einzige IT-Plattform, mit der sie professionelle IT-Sicherheitsanforderungen für alle notwendigen Funktionen für nur 8€ pro Monat abdecken können.</li> 
    </ul>
    <h3>entspannter</h3>
      <ul>
        <li>Durch ihre Finanzkompetenz entwickeln Sie automatisch einen entspannten und souveränen Umgang mit dem Finanzamt</li>
        <li>Mit dem OfficeOne.Team sind sie nie alleine. Es gibt immer jemanden, der Ihr aktuelles Problem schon mal gehabt und gelöst hat.</li>
        <li>Im Vergleich zu anderen Lösunge, sparen sie mit OfficeOne.Team viel Zeit und Geld. Machen Sie einfach zwei Wochen mehr Urlaub.</li>
      </ul>
    </div>
    );
  
  }
}
components.OfficeOneTeam=OfficeOneTeam;

export default OfficeOneTeam;