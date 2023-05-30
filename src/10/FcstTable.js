const FcstTable = ({ item, selectedItem }) => {
    return (
      <tbody>
        <tr>
          <th>{item.category}</th>
          <td>{item.baseDate}</td>
          <th>{item.fcstTime}</th>
          <td>{item.fcstValue}</td>
        </tr>
      </tbody>
    );
};
 export default FcstTable;
