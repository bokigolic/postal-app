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
