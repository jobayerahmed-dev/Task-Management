import Actiontask from "./Actiontask.jsx";
import Searchbord from "./Searchbord.jsx";
import TaskList from "./TaskList.jsx";
export default function Taskbord() {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <Searchbord />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <Actiontask />
          <TaskList />
        </div>
      </div>
    </section>
  );
}
