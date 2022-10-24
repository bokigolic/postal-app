import axios from "axios";
import { useState } from "react";
import PackagesAdminPanelItem from "./PackagesAdminPanelItem";

const PackagesAdminPanel = () => {

  const [packages, setPackages] = useState([]);

  const refresh = () => {
    const url = "http://localhost:3033/packages"
    axios.get(url)
      .then((response) => {
        console.log('response', response);
        if (response && Array.isArray(response.data)) {
          setPackages(response.data)
        }
      })

  }

  const handleRefresh = (e) => {
    refresh();
  }


  return (
    <div className="panel fluid">
      <h1>Packages Admin Panel</h1>

      <button onClick={handleRefresh}>Refresh</button>

      <table className="packages-table">
        <thead>
          <tr>
            <th>
              Tracking ID
            </th>
            <th>
              Street
            </th>
            <th>
              City
            </th>
            <th>
              State
            </th>
            <th>
              status
            </th>
            <th>
              actions
            </th>
            <th>
              log
            </th>
          </tr>
        </thead>
        <tbody>

          {
            packages.map((p) => {
              return (
                <PackagesAdminPanelItem key={p.id} p={p} refresh={refresh} />
              )
            })
          }




        </tbody>
      </table>
    </div>
  );
};
export default PackagesAdminPanel;