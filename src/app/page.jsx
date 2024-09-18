"use client"

import { useState, useEffect } from "react";
import { GenderChart } from "./gender_chart.jsx";
import { AgeChart } from "./age_chart.jsx";
import { AgeNGenderChart } from "./age_n_gender_chart.jsx";
import { RegionChart } from "./region_chart.jsx";

const AdminIndex = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/graph")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const date = (new Date()).toDateString()

  return <div className="flex flex-col gap-10">
    <GenderChart data={data} date={date} />
    <AgeChart data={data} date={date} />
    <AgeNGenderChart data={data} date={date} />
    <RegionChart data={data} date={date}/>
  </div>;
};

export default AdminIndex;
