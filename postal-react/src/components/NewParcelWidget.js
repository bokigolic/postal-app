import axios from 'axios';
import { useState } from 'react';


const NewParcelWidget = () => {
  /*
  Treba nam forma u kojoj se ukucava
  {
    ulica: "",
    grad: "beograd",
    drzava: "srbija"
  },
  */
  const preset = {
    street: "",
    city: "",
    state: ""
  };


  const [formState, setFormState] = useState(preset);

  const handleChange = (e) => {
    // console.log(e);
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value
    })
  };

  const handleClickSubmit = () => {
    console.log("Novi paket")
    // CREATE
    const data = {
      ...formState
    };
    axios.post('http://localhost:3033/packages', data)
      .then((response)=>{
        // when axios recive response from backend
        console.log('response', response);
        if (response && response.data && response.data.id) {
          const trackingId = response.data.id;
          window.alert('Your TRACKING ID is: ' + trackingId);
          setFormState({...preset});
        }
      })
  };


  return (
    <div>
      <h1>New Parcel Widget</h1>
      <p>This widget is used by carrier when taking package from sender.</p>
      <form>
        <div>
          <label>Street </label>
          <input
            type="text"
            name="street"
            value={formState.street}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City </label>
          <select
            name="city"
            value={formState.city}
            onChange={handleChange}
          >
            <option value="">--Choose city--</option>
            <option value="Rockwille">Rockwille</option>
            <option value="Arlington">Arlington</option>
            <option value="Chickago">Chickago</option>
            <option value="Phoneix">Phoneix</option>
          </select>
        </div>
        <div>
          <label>State </label>
          <select
            name="state"
            value={formState.state}
            onChange={handleChange}
          >
            <option value="">--Choose state--</option>
            <option value="Maryland">Maryland</option>
            <option value="Virginia">Virginia</option>
            <option value="Ilinois">Ilinois</option>
            <option value="Arizona">Arizona</option>
          </select>
        </div>
        <button type="button" onClick={handleClickSubmit}>Send parcel</button>
      </form>

        <p>TODO: prikazati novi tracking id a mozda i sva polja nalepnice</p>

    </div>
  )
};

export default NewParcelWidget;