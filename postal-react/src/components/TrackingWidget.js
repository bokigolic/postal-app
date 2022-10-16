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
    </div>
  )
};

export default TrackingWidget;