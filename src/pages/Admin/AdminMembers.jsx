import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { FiTrash2 } from 'react-icons/fi';

const AdminMembers = () => {
  const [users, setUsers] = useState([
    { user: '1', username: 'Gokul' },
    { user: '2', username: 'Harish' },
    { user: '3', username: 'Karan' },
    { user: '4', username: 'Anitha' },
    { user: '5', username: 'Deepika' },
  ]);

  const [newUser, setNewUser] = useState({ user: '', username: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, { ...newUser, user: (users.length + 1).toString() }]);
    setNewUser({ user: '', username: '' });
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.user !== userId));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Members</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="text-blue-500 border-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
            >
              + Add Members
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add New Member</SheetTitle>
              <SheetDescription>
                Fill in the details of the new member and click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <form onSubmit={handleFormSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    value={newUser.username}
                    onChange={handleInputChange}
                    className="col-span-3"
                    required
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Save Member
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </SheetContent>
        </Sheet>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.user} className="relative bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold">{user.username}</h2>
            <p className="text-gray-600">User ID: {user.user}</p>
            <button 
              onClick={() => deleteUser(user.user)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors">
              <FiTrash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMembers;