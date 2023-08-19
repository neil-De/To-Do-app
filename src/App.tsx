import { ReactNode } from "react";
import InputTask from "./components/InputTask";

function App() {
  return (
    <div className="panel panel-default w-50 m-auto p-4">
      <InputTask heading="To Do List" />
    </div>
  );
}
export default App;
