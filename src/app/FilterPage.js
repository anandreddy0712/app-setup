import React from "react";
import DatePicker from "react-datepicker";

const FilterPage = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", width: "30rem" }}>
      <div className="filter-page">
        <div className="filter-title-row">
          <div className="filter-title-sec">
            <img src="/filter-icon.png" style={{ height: "22px" }} alt="" />
            <div>Filter</div>
          </div>
          <div className="filter-close cursor-pointer">
            <img
              src="/filter-close-icon.png"
              style={{ height: "22px" }}
              alt=""
            />
          </div>
        </div>
        <div className="filter-content">
          <hr className="hori-line" />
          <div className="alerts hori-line-bottom">
            <div className="alert-content">
              <div className="alert-title-sec">
                <span>Alert Status</span>
                <div className="drop-down">
                  <select>
                    <option>All Non-DTC</option>
                    <option>Emergency Alert</option>
                    <option>Overspeed Alert</option>
                    <option>Device Reconnect</option>
                    <option>Low Fuel Alert</option>
                  </select>
                </div>
              </div>
              <div className="alert-title-sec">
                <span>Severity</span>
                <div className="drop-down">
                  <select>
                    <option>All Non-DTC</option>
                    <option>Emergency Alert</option>
                    <option>Overspeed Alert</option>
                    <option>Device Reconnect</option>
                    <option>Low Fuel Alert</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="alert-content">
              <div className="alert-title-sec">
                <span>Value</span>
                <div className="drop-down">
                  <select>
                    <option>All Non-DTC</option>
                    <option>Emergency Alert</option>
                    <option>Overspeed Alert</option>
                    <option>Device Reconnect</option>
                    <option>Low Fuel Alert</option>
                  </select>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <hr className="hori-line-bottom" />
          <div className="date-range-sec">
            <div>Date Range</div>
            <div className="alert-content">
              <div className="date-range-sec gap-10px">
                <div>From</div>
                <DatePicker className="datepicker-sec" />
              </div>
              <div className="date-range-sec gap-10px">
                <div>To</div>
                <DatePicker className="datepicker-sec" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-btn-sec">
        <div className="clr-btn">Clear All</div>
        <div className="apply-btn">Apply</div>
      </div>
    </div>
  );
};

export default FilterPage;
