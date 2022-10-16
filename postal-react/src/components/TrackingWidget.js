import axios from "axios";
import { useState } from "react";


const TrackingWidget = () => {

  const [trackingId, setTrackingId] = useState("");
  const [status, setStatus] = useState("");

  const handleClick = () => {
    console.log("Track", trackingId)
    const url = 'http://localhost:3033/packages/' + trackingId;
    axios.get(url)
      .then((response) => {
        console.log(response);
        if (response && response.data && response.data.status) {
          window.alert("Status for package " + trackingId + " is: " + response.data.status)
          setStatus(response.data.status);
        } else {
          setStatus("");
        }
      })
      .catch((err) => {
        setStatus("");
      })
  }

  let statusText = null;
  if (status !== '') {
    statusText = "Status for package " + trackingId + " is: " + status;
  }

  let stepNumber = 0;
  if (status === "Label Created") {
    stepNumber = 1;
  } else if (status === "On the way") {
    stepNumber = 2;
  } else if (status === "Out of delivery") {
    stepNumber = 3;
  } else if (status === "Delivered") {
    stepNumber = 4;
  }


  return (
    <div>
      <h1>Tracking widget</h1>
      <p>This widget is free available on webpage for anyone to track his package...</p>
      <form>
        <label>Enter package tracking id </label>
        <input
          type="text"
          value={trackingId}
          onChange={(e) => { setTrackingId(e.target.value) }}
        />
        <button type="button" onClick={handleClick}>Find</button>
      </form>
      
      <p>{statusText}</p>

      <div className="tracking-status-steps">
        <div className={stepNumber >= 1 ? "yes" : "no"} >
          <div className="line"></div>
          <div className="circle">
            <div className="text">Label created</div>
          </div>
        </div>
        <div className={stepNumber >= 2 ? "yes" : "no"} >
          <div className="line"></div>
          <div className="circle">
            <div className="text">On the way</div>
          </div>
        </div>
        <div className={stepNumber >= 3 ? "yes" : "no"} >
          <div className="line"></div>
          <div className="circle">
            <div className="text">Out of delivery</div>
          </div>
        </div>
        <div className={stepNumber >= 4 ? "yes" : "no"} >
          <div className="line"></div>
          <div className="circle">
            <div className="text">Delivered</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TrackingWidget;