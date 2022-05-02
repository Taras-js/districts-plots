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
  const [minMax, setMinMax] = useState(null);
  const getDistricts = async () => {
    await axios.get("/districts").then((res) => {
      setDistricts(res.data.values);
    });
  };
  const getPlots = async () => {
    await axios.get("/max").then((res) => {
      console.log("values:", res.data.values);
      const [minMax] = res.data.values
      setMinMax(minMax);
    });
  };
  const [search, setSearch] = useState();
  const getBbl = async () => {
    await axios.get("/bbl").then((res) => {
      console.log("values:", res.data.values);
      setSearch(res.data.values);
    });
  };


  function resultSearch(e) {
    let result = bblOne.filter((item) => item.bbl === Number(e.target.value));
    console.log("value:", e.target.value);
    console.log("result:", result);
    setSearch(result);
  }

  function deleteDistricts() {
    setDistricts(null);
  }

  // function deletePlots() {
  //   setPlots(null);
  //   setCardBbl(null);
  // }

  const [interval, setInterval] = useState(null);

  // function deleteInterval() {
  //   const sortPlots = plots.sort((a, b) => {
  //     if (Number(a.geometry) > Number(b.geometry)) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
  //   const intervalDelete = sortPlots.filter(
  //     (item) =>
  //       Number(item.geometry) < Number(interval.after) ||
  //       Number(interval.before) < Number(item.geometry)
  //   );
  //   setPlots(null);
  //   setPlots(intervalDelete);
  //
  // }

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
                    <div>Площадь districts: {item.area.toFixed(2)} кв.м.</div>
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
            onClick={getBbl}
            variant="contained"
          >
            request plots
          </Button>
          <Button
            className={"districts_request"}
            // onClick={deletePlots}
            variant="contained"
          >
            delete plots
          </Button>
        </div>
        <div className={"plots"}>
          {search ? (
            <StyledEngineProvider injectFirst>
              <Autocomplete
                className={"search"}
                disablePortal
                id="combo-box-demo"
                onClick={resultSearch}
                options={search.map((item) => item.bbl)}
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
                    <div>Площадь plots: {item.area.toFixed(3)} кв.м.</div>
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
            // onClick={deletePlots}
            variant="contained"
          >
            delete plots
          </Button>
        </div>
        <div>
          <Card className={"districts_card"}>
            <div>
              Максимальная площадь:
              {minMax
                ? minMax.maximum.toFixed(3)
                : ""}
              кв.м.
            </div>
            <div>
              Минимальная площадь:
              {minMax
                ? minMax.minimum.toFixed(3)
                : ""}
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
          {/*{plots ? (*/}
          {/*  <div>*/}
          {/*    <TextField*/}
          {/*      id="after"*/}
          {/*      name="after"*/}
          {/*      onChange={changeHandler}*/}
          {/*      autoFocus*/}
          {/*      label="ОТ"*/}
          {/*      variant="outlined"*/}
          {/*    />*/}
          {/*    <TextField*/}
          {/*      id="before"*/}
          {/*      name="before"*/}
          {/*      onChange={changeHandler}*/}
          {/*      label="ДО"*/}
          {/*      variant="outlined"*/}
          {/*    />*/}
          {/*    <Button*/}
          {/*      className={"districts_request"}*/}
          {/*      onClick={deleteInterval}*/}
          {/*      type="submit"*/}
          {/*      name="action"*/}
          {/*      variant="contained"*/}
          {/*    >*/}
          {/*      delete plots*/}
          {/*    </Button>*/}
          {/*  </div>*/}
          {/*) : (*/}
          {/*  <div>*/}
          {/*    <Button*/}
          {/*      className={"districts_request"}*/}
          {/*      onClick={getPlots}*/}
          {/*      variant="contained"*/}
          {/*    >*/}
          {/*      request plots*/}
          {/*    </Button>*/}
          {/*    <Button*/}
          {/*      className={"districts_request"}*/}
          {/*      onClick={deletePlots}*/}
          {/*      variant="contained"*/}
          {/*    >*/}
          {/*      delete plots*/}
          {/*    </Button>*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>
      </section>
    </div>
  );
}

export default App;
