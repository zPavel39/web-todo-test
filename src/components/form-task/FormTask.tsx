import React, { useState } from "react";
import tasksStore from "../../store/task-store/tasks-store";
import "./FormTask.scss";
import { observer } from "mobx-react-lite";

const FormTask = observer(({ ...props }: any) => {
  const { createTask, updateTask } = tasksStore;

  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [dateValue, setDateValue] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const callbacks = {
    createTask: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createTask({
        title: titleValue,
        description: descriptionValue,
        date: dateValue,
      });
      setTitleValue("");
      setDescriptionValue("");
    },
    updateTask: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateTask({
        title: titleValue,
        description: descriptionValue,
        date: dateValue,
      });
      setTitleValue("");
      setDescriptionValue("");
    },
  };
  return (
    <div className="container">
      <form
        className="form"
        onSubmit={
          props.activeModal ? callbacks.updateTask : callbacks.createTask
        }
      >
        <div className="form__left">
          <label>Заголовок:</label>
          <input
            className="form__left_inputTitle"
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            placeholder="Введите заголовок задачи"
          />
          <label>Описание:</label>
          <textarea
            className="form__left_inputDescription"
            rows={4}
            maxLength={200}
            placeholder="Введите описание задачи"
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
          />
        </div>
        <div className="form__right">
          <div className="form__label">
            <label>Дата:</label>
            <input
              className="form__right_inputDate"
              type="date"
              value={dateValue}
              onChange={(e) => setDateValue(e.target.value)}
            />
          </div>
          <button className="form__right_btnSubmit" type="submit">
            Готово
          </button>
        </div>
      </form>
    </div>
  );
});

export default React.memo(FormTask);
