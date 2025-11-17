import { useState } from "react";
import Actiontask from "./Actiontask.jsx";
import AddtaskModel from "./AddtaskModel.jsx";
import Searchbord from "./Searchbord.jsx";
import TaskList from "./TaskList.jsx";
const defaultTask = {
  id: crypto.randomUUID(),
  title: "learn with react",
  discription:
    "i want to learn react such then i can treat it like then slave and make it do whatever i went to do in my life",
  tags: ["web", "react", "js"],
  property: "High",
  isFavaret: true,
};
export default function Taskbord() {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModel, setshowAddModel] = useState(true);

// eslint-disable-next-line no-unused-vars
function handleAddClick() {
  console.log("add click");
}

  return (
    <section className="mb-20" id="tasks">
      {showAddModel && <AddtaskModel />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <Searchbord />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <Actiontask onAddClick={() => setshowAddModel(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
