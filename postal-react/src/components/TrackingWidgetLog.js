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

  }, [trackingId]);



  return (
    <div>
      <h4>Tracking history</h4>
      {
        trackingLogItems.map((item) => {
          return (
            <div>
              <div>
                {item.timestamp}
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

  )
};

export default TrackingWidgetLog;