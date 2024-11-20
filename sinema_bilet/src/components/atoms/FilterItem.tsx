import React from "react";
interface IFilterItemProps {
  type: string;
  title: string;
  isActive: boolean;
}

function FilterItem() {
  return (
    <div className="dropdown col">
      {" "}
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {" "}
        Dropdown button{" "}
      </button>{" "}
      <ul className="dropdown-menu">
        {" "}
        <li>
          <a className="dropdown-item active" href="#">
            Action
          </a>
        </li>{" "}
        <li>
          <a className="dropdown-item" href="#">
            Another action
          </a>
        </li>{" "}
        <li>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </li>{" "}
      </ul>
    </div>
  );
}

export default FilterItem;
