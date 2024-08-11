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
import { FiCheckCircle, FiArrowRightCircle, FiTrash2 } from "react-icons/fi";

const Alltasks = () => {
  const [allTasks, setAllTasks] = useState([
    { userId: '01', task: 'Draft Project Proposal' },
    { userId: '02', task: 'Conduct Team Meeting' },
    { userId: '03', task: 'Create Documentation' },
    { userId: '04', task: 'Plan Marketing Campaign' },
    { userId: '05', task: 'Implement New Software Tool' },
  ]);

  const [newTask, setNewTask] = useState({ userId: '', task: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAllTasks([...allTasks, newTask]);
    setNewTask({ userId: '', task: '' });
  };

  const moveToProgress = (task) => {
    setAllTasks(allTasks.filter(t => t !== task));
    setProgressTasks([...progressTasks, task]);
  };

  const moveToCompleted = (task) => {
    setAllTasks(allTasks.filter(t => t !== task));
    setCompletedTasks([...completedTasks, task]);
  };

  const deleteTask = (task) => {
    setAllTasks(allTasks.filter(t => t !== task));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="text-blue-500 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
            >
              + Add Task
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Task</SheetTitle>
              <SheetDescription>
                Fill in the details of the new task and click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="userId" className="text-right">
                    User ID
                  </Label>
                  <Input
                    id="userId"
                    name="userId"
                    value={newTask.userId}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="task" className="text-right">
                    Task
                  </Label>
                  <Input
                    id="task"
                    name="task"
                    value={newTask.task}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {allTasks.map((task, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h2 className="text-lg font-semibold">User ID: {task.userId}</h2>
            <p className="text-gray-600">Task: {task.task}</p>
            <div className="flex justify-end gap-2 mt-2">
              <FiArrowRightCircle 
                className="text-blue-500 cursor-pointer hover:text-blue-700"
                size={24}
                onClick={() => moveToProgress(task)}
              />
              <FiCheckCircle 
                className="text-green-500 cursor-pointer hover:text-green-700"
                size={24}
                onClick={() => moveToCompleted(task)}
              />
              <FiTrash2 
                className="text-red-500 cursor-pointer hover:text-red-700"
                size={24}
                onClick={() => deleteTask(task)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alltasks;