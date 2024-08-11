import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ripple from '@/components/magicui/ripple';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Meteors from '@/components/magicui/meteors';

const Login = () => {
    const [email, setEmail] = useState('shayamsharan34@gmail.com');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (email === 'shayamsharan34@gmail.com' && password === 'sharan') {
            navigate('/admin/projects');
        } else {
            navigate('/task');
        }
    };

    return (
        
        <div className='h-full w-full flex justify-center items-center bg-gray-100'>
            <Card className="w-1/4 p-4 border-2 border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105">

                <CardHeader className="space-y-1">
                    <CardTitle className="text-3xl font-bold text-gray-800">Login</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-300" />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter Your Email Here"
                            className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
                            />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password" className="text-gray-700">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter Your Password Here"
                            className="p-2 border border-gray-300 rounded focus:border-gray-500 focus:ring focus:ring-gray-200 transition-transform transform hover:scale-105"
                            />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button 
                    className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
                    onClick={handleLogin} 
                    >
                        Login
                    </Button>
                </CardFooter>
            </Card>
                
        </div>
                      
    );
};

export default Login;