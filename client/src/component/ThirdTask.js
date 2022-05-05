import React from "react";
import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const ThirdTask = () => {
  const [minMax, setSize] = useState(null);
  useEffect(() => {
    const getSize = async () => {
      await axios.get("/plots/size").then((res) => {
        const [size] = res.data.values;
        setSize(size);
      });
    };
    getSize();
  }, [setSize]);

  return (
    <section className="App-section">
      <h2>3.Вывести максимальную и минимальную площадь участков земли</h2>
      <div>
        <Card className={"districts_card"}>
          <div>
            Максимальная площадь:
            {minMax ? minMax.max.toFixed(3) : ""}
            кв.м.
          </div>
          <div>
            Минимальная площадь:
            {minMax ? minMax.min.toFixed(3) : ""}
            кв.м.
          </div>
        </Card>
      </div>
    </section>
  );
};