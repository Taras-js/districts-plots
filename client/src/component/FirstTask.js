import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const FirstTask = () => {
  const [districts, setDistricts] = useState(null);
  useEffect(() => {
    const getDistricts = async () => {
      await axios.get("/districts").then((res) => {
        setDistricts(res.data.values);
      });
    };
    getDistricts();
  }, [setDistricts]);
  return (
    <section className="App-section">
      <div>
        <h2>
          Задача 1. Сколько участков земли в каждом районе и какая площадь
          каждого района в кв.м.
        </h2>
      </div>
      <div className={"districts"}>
        {districts
          ? districts.map((item) => {
              return (
                <div className={"districts_card"} key={item.id}>
                  Districts name: {item.name}
                  <div>Количество plots: {item.plots}</div>
                  <div>Площадь districts: {item.area.toFixed(2)} кв.м.</div>
                </div>
              );
            })
          : ""}
      </div>
    </section>
  );
};
