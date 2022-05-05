import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const SecondTask = () => {
  const [bbl, setBbl] = useState([
    {
      id: 2,
      bbl: 1015290011,
      area: 113.69895337791647,
      districts: "Upper East Side-Carnegie Hill",
    },
  ]);
  const getSearch = async (payload) => {
    await axios.post("/plots/search", { payload }, null).then((res) => {
      setBbl(res.data.values);
    });
  };

  function changeHandler(event) {
    const payload = event.target.value;
    getSearch(payload);
  }

  useEffect(() => {
    const getBbl = async () => {
      await axios.get("/plots/bbl").then((res) => {
        setBbl(res.data.values);
      });
    };
    getBbl();
  }, [setBbl]);

  const [select, setSelect] = useState(null);
  const getPlot = async (payload) => {
    await axios.post("/plots/plot", { payload }, null).then((res) => {
      setSelect(res.data.values);
    });
  };

  function selectHandler(e) {
    const payload = e.target.value;
    getPlot(payload);
  }

  return (
    <section className="App-section">
      <div>
        <h2>
          Задача 2. Поиск участков земли по BBL --- вывод площади plot (в метрах
          кв.) и к какому district имеет отношение
        </h2>
      </div>
      <div className={"plots"}>
        <Autocomplete
          variant="contained"
          id="combo-box-demo"
          className="forms"
          freeSolo
          sx={{ width: 320}}
          options={bbl.map((item) => item.bbl.toString())}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={changeHandler}
              onSelect={selectHandler}
              label="search plot"
            />
          )}
        />
      </div>
      <div>
        {select
          ? select.map((item) => {
              return (
                <div className={"districts_card"} key={item.id}>
                  <div>Plots BBL: {item.bbl}</div>
                  <div>Площадь plots: {item.area.toFixed(3)} кв.м.</div>
                  <div>Имеет отнношение к districts: {item.districts}</div>
                </div>
              );
            })
          : ""}
      </div>
    </section>
  );
};
