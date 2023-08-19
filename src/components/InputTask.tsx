import { ReactNode, useState } from "react";
import TaskList from "./TaskList";

interface Props {
  heading: string;
}
const InputTask = ({ heading }: Props) => {
  const [selectInput, setSelectInput] = useState<string[]>([]);
  const [updatedInput, setUpdatedInput] = useState<string[]>([]);
  const [editInput, setEditInput] = useState(false);

  const handleChange = (event: any) => {
    setSelectInput(event.target.value);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      setUpdatedInput((prevselectInput) => [
        ...prevselectInput,
        event.target.value,
      ]);
    }
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
          aria-describedby="addon-wrapping"
          onKeyDown={handleKeyDown}
        />
      </div>

      <TaskList tasks={updatedInput} />
    </>
  );
};
export default InputTask;
