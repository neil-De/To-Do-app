import { ReactNode, useState } from "react";

interface Props {
  tasks: string[];
  inputChangedHandler: (e: any) => void;
  deleteTask: (e: any) => void;
}
const TaskList = ({ tasks, inputChangedHandler, deleteTask }: Props) => {
  const [editInput, setEditInput] = useState(false);
  const [inputValue, setInputValue] = useState(tasks);
  const [editableIndex, setEditableindex] = useState(0);

  const onEditableOff = (e: any) => {
    if (e.key === "Enter") {
      let index = e.target.getAttribute("data-key");
      setEditableindex(index);
      setEditInput(false);
    }
  };

  const onEdtableOn = (e: any) => {
    let index = e.target.getAttribute("data-key");
    setEditableindex(index);
    setEditInput(true);
  };

  return (
    <>
      {tasks.length === 0 && <h4>No Task Added</h4>}
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item" key={index}>
            <div
              data-key={index}
              className="d-inline-block col-md-9"
              onDoubleClick={onEdtableOn}
            >
              {editInput && editableIndex == index ? (
                <input
                  data-key={index}
                  type="text"
                  className="form-control"
                  defaultValue={task}
                  onChange={inputChangedHandler}
                  onKeyDown={onEditableOff}
                />
              ) : inputValue.length > 0 ? (
                inputValue
              ) : (
                task
              )}
            </div>
            <button
              data-key={index}
              onClick={deleteTask}
              type="button"
              className="btn btn-danger float-end btn-sm d-inline-block"
            >
              <i data-key={index} className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;
