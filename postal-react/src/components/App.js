import CarierWidget from "./CarierWidget";
import NewParcelWidget from "./NewParcelWidget";
import PackagesAdminPanel from "./PackagesAdminPanel";
import TrackingWidget from "./TrackingWidget";


/*
TIODO:
- za sledeci put na backendu treba tabela shipping locations log
https://www.walmart.com/orders/200010459390398/track/279135078140

i u njoj se vodi dnevnik na svakoj glavnoj posti kad je paket evidentiran, id paketa i naziv regiona i poste u kojoj je paket evidentiran
i datum i vreme evidntiranja se uupisuje

ili da se zove travel history
https://www.fedex.com/fedextrack/?trknbr=602953869973&trkqual=12024~602953869973~FDEG


ZA SLEDECI PUT:
tracking siget da ima i Tracking log deo gde ce se ispisivatio lokacije i vremena iz tabele trackinglog

takodje u admin panelu treba tabelarni prikaze tabele trackinglog da ne bi morali da otvaramo stalno http://localhost:3033/trackinglog


*/


function App() {
  return (
    <div className="App">
      <NewParcelWidget />
      <CarierWidget />
      <TrackingWidget />
      <PackagesAdminPanel />
    </div>
  );
}

export default App;
