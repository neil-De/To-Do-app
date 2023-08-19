import { useState } from "react";
import TaskList from "./TaskList";

interface Props {
  heading: string;
}
const InputTask = ({ heading }: Props) => {
  const [updatedInput, setUpdatedInput] = useState<string[]>([]);
  const [defaultValue, setDefaultValue] = useState("");

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setUpdatedInput((prevselectInput) => [
        ...prevselectInput,
        event.target.value,
      ]);
      setDefaultValue(" ");
    }
  };

  const handeWhilteEdit = (event: any) => {
    setDefaultValue(event.target.value);
  };

  const inputChangedHandler = (e: any) => {
    e.preventDefault();
    let index = e.target.getAttribute("data-key");
    updatedInput[index] = e.target.value;
    setUpdatedInput(updatedInput);
  };

  const deleteTask = (e: any) => {
    e.preventDefault();
    let index = e.target.getAttribute("data-key");
    let tempState = [...updatedInput];
    tempState.splice(index, 1);
    setUpdatedInput(tempState);
  };

  return (
    <>
      <h1 className="font-weight-bold text-center mb-3">{heading}</h1>
      <div className="input-group flex-nowrap">
        <input
          type="text"
          className="form-control"
          placeholder="Add Task"
          aria-label="Add Task"
          onChange={handeWhilteEdit}
          value={defaultValue}
          aria-describedby="addon-wrapping"
          onKeyDown={handleKeyDown}
        />
      </div>
      <TaskList
        tasks={updatedInput}
        inputChangedHandler={inputChangedHandler}
        deleteTask={deleteTask}
      />
    </>
  );
};
export default InputTask;
