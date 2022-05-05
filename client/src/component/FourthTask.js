import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const FourthTask = () => {
  const [payload, setPayload] = useState(null)

  function changeHandler(event) {
    setPayload({ ...payload, [event.target.name]: event.target.value });
    console.log("interval:", payload);
  }

  async function deleteInterval() {
      await axios.post("/plots/delete", {payload}).then((res) => {
        console.log(res.data.values);
      });
  }

  return (
    <section className="App-section">
      <h1>
        4.Два поля: "от" и "до", кнопка "удалить" - удаляет plots с площадью в
        промежутке "от" и "до", обновляет статистику, удаленные plots не
        доступны для поиска
      </h1>

      <div className={"delete_plots"}>
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
      </div>
    </section>
  );
};