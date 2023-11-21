
import './AddTask.css';

export const AddTask = ({tasklist, setTasklist, task, setTask}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.id)
    {// edit state
      const date = new Date();
      const updatedTaskList = tasklist.map((todo) => (
        todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
      ));
      setTasklist(updatedTaskList);
      setTask({});
    }
    else
    {// add state
      const date = new Date();
      //console.log(e.target.task.value);
      // targeting a task (name) and passing a value
      //console.log(date.getTime());
      const newTask = 
      {
        id: date.getTime(), 
        name: e.target.task.value, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist, newTask]);
      setTask({});
    }

    
  }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="task name" maxLength={25} onChange={e => setTask({...task, name:e.target.value})}/>
            <button type="submit">{task.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}
