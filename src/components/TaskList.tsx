import { ReactNode, useState } from "react";

interface Props {
  tasks: string[];
  // onEditTask: () => void;
}
const TaskList = ({ tasks }: Props) => {
  const [editInput, setEditInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputChangedHandler = (i: any, e: any) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <>
      {tasks.length === 0 && <h4>No Task Added</h4>}
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item" key={index}>
            <div
              key={index}
              className="d-inline-block col-md-9"
              onDoubleClick={() => setEditInput(true)}
            >
              {editInput ? (
                <input
                  type="text"
                  className="form-control"
                  defaultValue={task}
                  onChange={(event) => inputChangedHandler(index, event)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      //setInputValue(event.target.value);
                      setEditInput(false);
                    }
                  }}
                />
              ) : inputValue.length > 0 ? (
                inputValue
              ) : (
                task
              )}
            </div>
            <div className="d-inline-block col-md-3">
              <button type="button" className="btn btn-danger float-end btn-sm">
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TaskList;
