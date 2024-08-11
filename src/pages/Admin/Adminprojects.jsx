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
import { FiTrash2 } from "react-icons/fi";

const Adminprojects = () => {
  const [projects, setProjects] = useState([
    { description: 'Website Design', manager: 'Gokul', endDate: '30-09-2024', status: 'In Progress', brief: 'Designing a new website for the company.' },
    { description: 'Launch Social Media Campaign', manager: 'Harish', endDate: '25-07-2024', status: 'Completed', brief: 'Creating and launching a social media campaign to boost brand awareness.' },
    { description: 'Develop Mobile App', manager: 'Karan', endDate: '11-10-2024', status: 'In Progress', brief: 'Developing a mobile application to enhance user engagement.' },
    { description: 'Upgrade Server Infrastructure', manager: 'Anitha', endDate: '15-11-2024', status: 'In Progress', brief: 'Upgrading the server infrastructure for better performance.' },
    { description: 'Conduct Market Research', manager: 'Deepika', endDate: '17-07-2024', status: 'Completed', brief: 'Conducting market research to gather insights for strategic planning.' },
  ]);

  const [newProject, setNewProject] = useState({ description: '', manager: '', endDate: '', status: 'Not Started', brief: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject({ description: '', manager: '', endDate: '', status: 'Not Started', brief: '' });
  };

  const handleDelete = (projectToDelete) => {
    setProjects(projects.filter(project => project !== projectToDelete));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="text-blue-500 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
            >
              + Add Project
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Project</SheetTitle>
              <SheetDescription>
                Fill in the details of the new project and click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Project Description
                  </Label>
                  <Input
                    id="description"
                    name="description"
                    value={newProject.description}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="manager" className="text-right">
                    Project Manager
                  </Label>
                  <Input
                    id="manager"
                    name="manager"
                    value={newProject.manager}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="endDate" className="text-right">
                    End Date
                  </Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={newProject.endDate}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="status" className="text-right">
                    Status
                  </Label>
                  <select
                    id="status"
                    name="status"
                    value={newProject.status}
                    onChange={handleInputChange}
                    className="col-span-3 px-3 py-2 border rounded-lg"
                  >
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="brief" className="text-right">
                    Brief Description
                  </Label>
                  <Input
                    id="brief"
                    name="brief"
                    value={newProject.brief}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Save Project
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow cursor-pointer relative"
          >
            <FiTrash2 
              className="absolute top-2 right-2 text-red-500 cursor-pointer hover:text-red-700"
              size={24}
              onClick={() => handleDelete(project)}
            />
            <h2 className="text-lg font-semibold">{project.description}</h2>
            <p className="text-gray-600">{project.brief}</p>
            <p className="text-sm text-gray-500 mt-2">Manager: {project.manager}</p>
            {/* <p className="text-sm text-gray-500">End Date: {project.endDate}</p> */}
            {/* <p className="text-sm text-gray-500">Status: {project.status}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adminprojects;