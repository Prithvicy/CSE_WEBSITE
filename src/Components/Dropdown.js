import { useState } from "react";
import ChevronUp from "../Assets/chevron-up";
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown(props) {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  const data = props.data;
  console.log(typeof(data),data)

  return (
    <div className="wrapper">
      <div className="accordion">
        <div className="dropdownItem">
          <div className="dropdownTitle" onClick={() => toggle(0)}>
            {data.heading}
            <div className={selected === 0 ? 'rotate' : 'rotate down'}><ChevronUp /></div>
          </div>
          <div className={selected === 0 ? 'dropdownContent show' : 'dropdownContent'}>
            {data.subInfo.map((sub) => (
              <Link to={sub[1]}>
                <p>{sub[0]}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dropdown;
