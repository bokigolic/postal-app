const NewParcelWidget = () => {
  /*
  Treba nam forma u kojoj se ukucava
  {
    ulica: "",
    grad: "beograd",
    drzava: "srbija"
  },
  */
  return (
    <div>
      <h1>New Parcel Widget</h1>
      <p>This widget is used by carrier when taking package from sender.</p>
      <form>
        <div>
          <label>Street </label>
          <input type="text" />
        </div>
        <div>
          <label>City </label>
          <select>
            <option value="Rockwille">Rockwille</option>
            <option value="Arlington">Arlington</option>
            <option value="Chickago">Chickago</option>
            <option value="Phoneix">Phoneix</option>
          </select>
        </div>
        <div>
          <label>State </label>
          <select>
            <option value="Maryland">Maryland</option>
            <option value="Virginia">Virginia</option>
            <option value="Ilinois">Ilinois</option>
            <option value="Arizona">Arizona</option>
          </select>
        </div>
        <button>Send parcel</button>

        <p>TODO: prikazati novi tracking id a mozda i sva polja nalepnice</p>
      </form>
    </div>
  )
};

export default NewParcelWidget;