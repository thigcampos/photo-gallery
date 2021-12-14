import React from "react";
import "../../style/global.scss";

const Pagination = (props) => (
  <div id="pagination">
    <ul>
      <li>
        {props.prev ? (
          <button onClick={props.prevFunction} tabIndex="0">
            previous
          </button>
        ) : (
          <button className="off">previous</button>
        )}
      </li>
      <li>
        <p>{props.index}</p>
      </li>
      <li>
        {props.next ? (
          <button onClick={props.nextFunction} tabIndex="0">
            next
          </button>
        ) : (
          <button className="off">next</button>
        )}
      </li>
    </ul>
  </div>
);

export default Pagination;
