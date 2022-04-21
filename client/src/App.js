import "./App.css";
import axios from "axios";
import { useState } from "react";
import {
  StyledEngineProvider,
  Autocomplete,
  Button,
  Card,
  TextField,
} from "@mui/material";
import React from "react";

function App() {
  const [districts, setDistricts] = useState(null);
  const [bblOne, setBblOne] = useState(null);
  const [plots, setPlots] = useState(null);
  const getDistricts = async () => {
    await axios.get("/districts").then((res) => {
      console.log(res.data.values);
      setDistricts(res.data.values);
    });
  };

  const getPlots = async () => {
    await axios.get("/plots").then((res) => {
      console.log(res.data);
      res.data.values.map((item) => {
        function areaFromCoords(coordArray) {
          let x = coordArray,
            a = 0;
          if (x.length % 2) return;
          for (let i = 0, iLen = x.length - 2; i < iLen; i += 2) {
            a += x[i] * x[i + 3] - x[i + 2] * x[i + 1];
          }
          return Math.abs(a / 2);
        }

        return (item.geometry = (
          areaFromCoords(JSON.parse(item.geometry).flat(3)) * 100000000000000
        ).toFixed(3));
      });

      console.log("values:", res.data.values);
      setPlots(res.data.values);
      setBblOne(res.data.values);
    });
  };
  const [search, setCardBbl] = useState();

  function resultSearch(e) {
    let result = bblOne.filter((item) => item.bbl === Number(e.target.value));
    console.log("value:", e.target.value);
    console.log("result:", result);
    setCardBbl(result);
  }

  function deleteDistricts() {
    setDistricts(null);
  }

  function deletePlots() {
    setPlots(null);
    setCardBbl(null);
  }

  const [interval, setInterval] = useState(null);

  function deleteInterval() {
    const sortPlots = plots.sort((a, b) => {
      if (Number(a.geometry) > Number(b.geometry)) {
        return 1;
      } else {
        return -1;
      }
    });
    const intervalDelete = sortPlots.filter(
      (item) =>
        Number(item.geometry) < Number(interval.after) ||
        Number(interval.before) < Number(item.geometry)
    );
    setPlots(null);
    setPlots(intervalDelete);
    // console.log("interval:", interval);
    // console.log("sortPlots:", sortPlots);
    // console.log("intervalDelete:", intervalDelete);
    // console.log(plots)
  }

  function changeHandler(event) {
    setInterval({ ...interval, [event.target.name]: event.target.value });
    console.log("form:", interval);
  }

  return (
    <div className="App">
      <header className="App-header">DISTRICTS AND PLOTS</header>
      <section className="App-section">
        <div>
          <h2>
            Задача 1. Сколько участков земли в каждом районе и какая площадь
            каждого района в кв.м.
          </h2>
          <Button
            className={"districts_request"}
            onClick={getDistricts}
            variant="contained"
          >
            request districts
          </Button>
          <Button
            className={"districts_request"}
            onClick={deleteDistricts}
            variant="contained"
          >
            delete districts
          </Button>
        </div>
        <div className={"districts"}>
          {districts
            ? districts.map((item) => {
                return (
                  <Card className={"districts_card"} key={item.id}>
                    Districts name: {item.name}
                    <div>Количество plots:</div>
                    <div>Площадь districts: {item.shape} кв.м.</div>
                  </Card>
                );
              })
            : ""}
        </div>
      </section>
      <section className="App-section">
        <div>
          <h2>
            Задача 2.Поиск участков земли по BBL --- вывод площади plot (в
            метрах кв.) и к какому district имеет отношение
          </h2>
          <Button
            className={"districts_request"}
            onClick={getPlots}
            variant="contained"
          >
            request plots
          </Button>
          <Button
            className={"districts_request"}
            onClick={deletePlots}
            variant="contained"
          >
            delete plots
          </Button>
        </div>
        <div className={"plots"}>
          {plots ? (
            <StyledEngineProvider injectFirst>
              <Autocomplete
                className={"search"}
                disablePortal
                id="combo-box-demo"
                onClick={resultSearch}
                options={plots.map((item) => item.bbl.toString())}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onSelect={resultSearch}
                    label="Search BBL"
                  />
                )}
              />
            </StyledEngineProvider>
          ) : (
            ""
          )}
        </div>
        <div>
          {search
            ? search.map((item) => {
                return (
                  <Card className={"districts_card"} key={item.id}>
                    <div>Plots BBL: {item.bbl}</div>
                    <div>Площадь plots: {item.geometry} кв.м.</div>
                  </Card>
                );
              })
            : ""}
        </div>
      </section>
      <section className="App-section">
        <h2>3.Вывести максимальную и минимальную площадь участков земли</h2>
        <div className={"wrapper"}>
          <Button
            className={"districts_request"}
            onClick={getPlots}
            variant="contained"
          >
            request plots
          </Button>
          <Button
            className={"districts_request"}
            onClick={deletePlots}
            variant="contained"
          >
            delete plots
          </Button>
        </div>
        <div>
          <Card className={"districts_card"}>
            <div>
              Максимальная площадь:{" "}
              {plots
                ? Math.max.apply(
                    null,
                    plots.map((item) => item.geometry)
                  )
                : ""}{" "}
              кв.м.
            </div>
            <div>
              Минимальная площадь:{" "}
              {plots
                ? Math.min.apply(
                    null,
                    plots.map((item) => item.geometry)
                  )
                : ""}{" "}
              кв.м.
            </div>
          </Card>
        </div>
      </section>
      <section className="App-section">
        <h1>
          4.Два поля: "от" и "до", кнопка "удалить" - удаляет plots с площадью в
          промежутке "от" и "до", обновляет статистику, удаленные plots не
          доступны для поиска
        </h1>

        <div className={"delete_plots"}>
          {plots ? (
            <div>
              <TextField
                id="after"
                name="after"
                onChange={changeHandler}
                autoFocus
                label="ОТ"
                variant="outlined"
              />
              <TextField
                id="before"
                name="before"
                onChange={changeHandler}
                label="ДО"
                variant="outlined"
              />
              <Button
                className={"districts_request"}
                onClick={deleteInterval}
                type="submit"
                name="action"
                variant="contained"
              >
                delete plots
              </Button>
            </div>
          ) : (
            <div>
              <Button
                className={"districts_request"}
                onClick={getPlots}
                variant="contained"
              >
                request plots
              </Button>
              <Button
                className={"districts_request"}
                onClick={deletePlots}
                variant="contained"
              >
                delete plots
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
