const PackagesAdminPanelItem = (props) => {
  const p = props.p;

  const status = p.status;
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
    <tr key={p.id}>
      <td>{p.id}</td>
      <td>{p.street}</td>
      <td>{p.city}</td>
      <td>{p.state}</td>
      <td>{p.status}</td>
      <td>
        <button
          disabled={stepNumber === 1 ? false : true}
        >On the way</button>&nbsp;
        <button
          disabled={stepNumber === 2 ? false : true}
        >Location 2</button>&nbsp;
        <button
          disabled={stepNumber === 3 ? false : true}>Delivery Carier</button>&nbsp;
        <button
          disabled={stepNumber === 4 ? false : true}>Delivered</button>
      </td>
    </tr>
  )
};
export default PackagesAdminPanelItem;