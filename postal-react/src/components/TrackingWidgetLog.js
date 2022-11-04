import axios from "axios";
import { useEffect, useState } from "react";


const TrackingWidgetLog = (props) => {
  const trackingId = props.trackingId;

  const [trackingLogItems, setTrackingLogItems] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3033/trackinglog?package_id=" + trackingId;
    axios.get(url)
      .then((response) => {
        console.log('trackinglog GET respoonse:', response)
        if (response && Array.isArray(response.data)) {
          setTrackingLogItems(response.data)
        }
      })

  }, [trackingId, props.freshness]);



  return (
    <div>
      <h4>Tracking history</h4>

      <div className="tracking-history-steps">
          {
            trackingLogItems.map((item) => {
              return (
                <div className="step">
                  <div>
                    {item.timestamp}
                  </div>
                  <div className="timeline">
                    <div className="line-1"></div>
                    <div className="circle"></div>
                    <div className="line-2"></div>
                  </div>
                  <div>
                    {item.description}
                  </div>
                  <div>
                    {item.location}
                  </div>
                </div>
              )
            })
          }
      </div>

    </div>

  )
};

export default TrackingWidgetLog;