import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.success('Registered Successfully');
  };

  return (
    <div className='h-full w-full flex justify-center items-center bg-gray-100'>
      <Card className="w-1/4 p-4 border-2 border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-gray-800">Register</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username" className="text-gray-700">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter Your Username Here"
                value={formData.username}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your Email Here"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter Your Password Here"
                value={formData.password}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Your Password Here"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105">
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Register;