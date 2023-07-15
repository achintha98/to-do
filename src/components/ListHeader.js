import { useState } from "react";
import "../assets/style.css";

function ListHeader() {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [carList, setCarList] = useState([]);


  const addNewTask = () => {
    setTask(name);
    setCarList([...carList, { id: carList.length + 1, brand: name }]);
    setName("");
  }

  return (
    <div className="ListHeader">
      <div className="container">
      <form>
      <label>TODO:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
        <button className="add-btn" onClick={addNewTask}>Add</button>
        <ul className="list-group">
          {carList.map(car => (
            <li key={car.id} className="list-group-item list-group-item-primary">
              {car.brand}
            </li>
          ))}
        </ul>
      </div>


    </div>
  );
}
 
export default ListHeader;