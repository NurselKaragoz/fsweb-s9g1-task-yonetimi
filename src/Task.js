import React from "react";
import { toast } from "react-toastify";

const Task = ({ taskObj, onComplete }) => {
  const handleComplete = () => {
    onComplete(taskObj.id);
    toast.success("Task completed successfully!");
  };

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && <button onClick={handleComplete}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
