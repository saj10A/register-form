import React, { useEffect, useState } from "react";
import jMoment from "jalali-moment";
import { ErrorMessage, FastField } from "formik";
import FormikError from "./FormikError";

const days = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const months = [
  { id: 1, value: "فروردین" },
  { id: 2, value: "اردیبهشت" },
  { id: 3, value: "خرداد" },
  { id: 4, value: "تیر" },
  { id: 5, value: "مرداد" },
  { id: 6, value: "شهریور" },
  { id: 7, value: "مهر" },
  { id: 8, value: "آبان" },
  { id: 9, value: "آذر" },
  { id: 10, value: "دی" },
  { id: 11, value: "بهمن" },
  { id: 12, value: "اسفند" },
];

const Date = ({ formik, name, label }) => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [years, setYears] = useState([]);
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    let now = jMoment();
    setDay(now.jDate());
    setMonth(now.jMonth() + 1);
    setYear(now.jYear());
  }, []);

  const handleShowDateConfig = () => {
    let arr = [];
    for (let index = parseInt(year) - 100; index <= parseInt(year); index++)
      arr = [...arr, index];

    setYears(arr);
    setShowConfig(true);
  };

  const handleSetInputDate = (e) => {
    e.stopPropagation();
    formik.setFieldValue(name, `${day} / ${month} / ${year}`);
    setShowConfig(false);
  };

  return (
    <div className="form_date_picker position-relative">
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <span onClick={handleShowDateConfig} className="pointer">
          <FastField
            type="text"
            className="form-control"
            name={name}
            placeholder="جهت انتخاب تاریخ کلیک کنید"
            disabled
          />
        </span>
      </div>

      {showConfig ? (
        <div className="date_picker row w-100 m-0 p-0">
          <div className="col-3 d-flex justify-content-center align-items-center p-0">
            <select
              className="form-select p-0"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center p-0">
            <select
              className="form-select p-0"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              {months.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.value}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center p-0">
            <select
              className="form-select p-0"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center p-0">
            <i
              className="fas fa-check text-success pointer"
              onClick={handleSetInputDate}
            ></i>
          </div>
        </div>
      ) : null}

      <ErrorMessage name={name} component={FormikError} />
    </div>
  );
};

export default Date;
