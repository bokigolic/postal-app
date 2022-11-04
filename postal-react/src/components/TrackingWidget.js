import axios from "axios";
import { useEffect, useState } from "react";
import TrackingWidgetLog from "./TrackingWidgetLog";


const TrackingWidget = () => {

  const [trackingId1, setTrackingId1] = useState(""); // state polja trackingId
  const [trackingId, setTrackingId] = useState(""); // kad korisnik klikne TRACK onda se ovde upisuje ceo trackingId
  const [status, setStatus] = useState("");
  const [freshness, setFreshness] = useState(0);

  const handleClickTrack = () => {
    // click 
    console.log("Track", trackingId1);
    setTrackingId(trackingId1);
    setFreshness(freshness + 1);
  };
  
  useEffect(()=>{
    // kad korisnik klikne na TRACK upise se  state trackingId i onda se voo automatski pozove
    const url = 'http://localhost:3033/packages/' + trackingId;
    axios.get(url)
      .then((response) => {
        console.log(response);
        if (response && response.data && response.data.status) {
          // window.alert("Status for package " + trackingId + " is: " + response.data.status)
          setStatus(response.data.status);
        } else {
          setStatus("");
        }
      })
      .catch((err) => {
        setStatus("");
      })

  },[trackingId, freshness])



  let statusText = null;
  if (status !== '') {
    statusText = "Status for package " + trackingId + " is: " + status;
  }

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


  return (
    <div className="panel">
      <h1>Tracking widget</h1>
      <p>This widget is free available on webpage for anyone to track his package...</p>
      <form>
        <label>Enter package tracking id </label>
        <input
          type="text"
          value={trackingId1}
          onChange={(e) => { setTrackingId1(e.target.value) }}
        />
        <button type="button" onClick={handleClickTrack}>Track</button>
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
            <div className="text">Out for delivery</div>
          </div>
        </div>
        <div className={stepNumber >= 4 ? "yes" : "no"} >
          <div className="line"></div>
          <div className="circle">
            <div className="text">Delivered</div>
          </div>
        </div>
      </div>


      <TrackingWidgetLog trackingId={trackingId} freshness={freshness} />
    </div>
  )
};

export default TrackingWidget;