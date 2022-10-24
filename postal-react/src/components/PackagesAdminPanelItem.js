import axios from "axios";

const PackagesAdminPanelItem = (props) => {
  const p = props.p;
  const refresh = props.refresh;

  const status = p.status;
  let stepNumber = 0;
  if (status === "Label Created") {
    stepNumber = 1;
  } else if (status === "On the way") {
    stepNumber = 2;
  } else if (status === "Out for delivery") {
    stepNumber = 3;
  } else if (status === "Delivered") {
    stepNumber = 4;
  }

  const handleOnTheWay = () => {
    const package_id = p.id;
    // A)  UPDATE u packages tabeli samo status da se update-uje
    const url = "http://localhost:3033/packages/" + package_id;
    const editetPackage = {
      ...p,
      status: "On the way"
    }
    axios.patch(url, editetPackage)
      .then((response) => {
        // after create
        // refresh();
      })

    // B) istvoremeno i CREATE novog dogadjaja u talei trackinglog
    const url2 = "http://localhost:3033/trackinglog"
    const data = {
      packages_id: package_id,
      description: 'PACKAGE RECEIVED BY FEDEX',
      location: 'RECEIVING POINT',
      timestamp: Date.now()
    }
    axios.post(url2, data)
      .then((response) => {
        // after create
        // refresh();
      })
  };

  /*
  const handleLocation2 = () => {
    const url3 = "http://localhost:3033/trackinglog"
    const data3 = {
      packages_id: package_id,
        description: 'PACKAGE ARRIVED TO MAIN WAREHOUSE ',
        location: 'RECEIVING POINT',
        timestamp: Date.now()
    }
  };
  */

  const handleOutForDelivery = () => {
    const package_id = p.id;
    // A)  UPDATE u packages tabeli samo status da se update-uje
    const url = "http://localhost:3033/packages/" + package_id;
    const editetPackage = {
      ...p,
      status: "Out for delivery"
    }
    axios.patch(url, editetPackage)
      .then((response) => {
        // after create
        // refresh();
      })

    // B) istvoremeno i CREATE novog dogadjaja u talei trackinglog
    const url2 = "http://localhost:3033/trackinglog"
    const data = {
      packages_id: package_id,
      description: 'On vehicle for delivery',
      location: 'Arlington',
      timestamp: Date.now()
    }
    axios.post(url2, data)
      .then((response) => {
        // after create
        // refresh();
      })
  };


  const handleDelivred = () => {
    const package_id = p.id;
    // A)  UPDATE u packages tabeli samo status da se update-uje
    const url = "http://localhost:3033/packages/" + package_id;
    const editetPackage = {
      ...p,
      status: "Delivered"
    }
    axios.patch(url, editetPackage)
      .then((response) => {
        // after create
        // refresh();
      })

    // B) istvoremeno i CREATE novog dogadjaja u talei trackinglog
    const url2 = "http://localhost:3033/trackinglog"
    const data = {
      packages_id: package_id,
      description: 'Delivered, in hands to coustomer',
      location: 'Arlington',
      timestamp: Date.now()
    }
    axios.post(url2, data)
      .then((response) => {
        // after create
        // refresh();
      })
  };


  return (
    <tr key={p.id}>
      <td>{p.id}</td>
      <td>{p.street}</td>
      <td>{p.city}</td>
      <td>{p.state}</td>
      <td>{p.status}</td>
      <td>
        <button
          disabled={stepNumber === 1 ? false : true}
          onClick={handleOnTheWay}
        >On the way</button>&nbsp;
        <button
          disabled={stepNumber === 2 ? false : true}
          onClick={handleOutForDelivery}
        >Delivery Carier</button>&nbsp;
        <button
          disabled={stepNumber === 3 ? false : true}
          onClick={handleDelivred}
        >Delivered</button>
      </td>
      <td>
        <button
          disabled={true}
        >Location 2</button>&nbsp;
      </td>
    </tr>
  )
};
export default PackagesAdminPanelItem;