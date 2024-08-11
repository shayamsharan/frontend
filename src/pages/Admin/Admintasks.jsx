import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Admintasks = () => {
  const [tasks, setTasks] = useState([
    { task: 'Draft Project Proposal', user: 'User 1', priority: 'High' },
    { task: 'Conduct Team Meeting', user: 'User 2', priority: 'Low' },
    { task: 'Create Documentation', user: 'User 3', priority: 'High' },
    { task: 'Plan Marketing Campaign', user: 'User 4', priority: 'Low' },
    { task: 'Implement New Software Tool', user: 'User 5', priority: 'High' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState({ task: '', user: '', priority: 'High' });

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedTask({ ...selectedTask, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!tasks.some(task => task === selectedTask)) {
      setTasks([...tasks, selectedTask]);
    }
    setSelectedTask({ task: '', user: '', priority: 'High' });
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline"
              className="text-blue-500 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
              onClick={() => { setSelectedTask({ task: '', user: '', priority: 'High' }); setShowForm(true); }}
            >
              + Add Task
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{selectedTask.task ? 'Edit Task' : 'Add New Task'}</SheetTitle>
              <SheetDescription>
                {selectedTask.task ? 'Update the task details and click save.' : 'Fill in the details of the new task and click save.'}
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task" className="text-right">
                    Task
                  </Label>
                  <Input
                    id="task"
                    name="task"
                    value={selectedTask.task}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="user" className="text-right">
                    Assigned To
                  </Label>
                  <Input
                    id="user"
                    name="user"
                    value={selectedTask.user}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="priority" className="text-right">
                    Priority
                  </Label>
                  <select
                    id="priority"
                    name="priority"
                    value={selectedTask.priority}
                    onChange={handleInputChange}
                    className="col-span-3 px-3 py-2 border rounded-lg"
                    required
                  >
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Save Task
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleTaskClick(task)}
          >
            <h3 className="text-xl font-semibold mb-2">{task.task}</h3>
            <p className="text-gray-700 mb-2">Assigned To: {task.user}</p>
            <p className="text-gray-700">Priority: <span className={`font-bold ${task.priority === 'High' ? 'text-red-500' : 'text-green-500'}`}>{task.priority}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admintasks;