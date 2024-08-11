import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-grow w-full flex flex-col lg:flex-row items-center justify-around py-12 px-4 lg:px-16 bg-gray-100">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-4">Streamline Your Tasks</h2>
                    <p className="text-lg mb-6">
                        TaskQue provides a comprehensive task management system that helps you prioritize, track, and manage your tasks efficiently. 
                        Whether you're working on personal projects or collaborating with a team, our platform is designed to meet your needs.
                    </p>
                    <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
                        Get Started
                    </Button>
                </div>

                <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center">
                    <img src="https://img.freepik.com/free-vector/task-management-abstract-concept-illustration_335657-2127.jpg" alt="Task Management" className="max-w-3/4 h-auto rounded-lg shadow-lg" />
                </div>
            </main>

            
            <section className="flex-grow w-full flex flex-col lg:flex-row items-center justify-around py-12 px-4 lg:px-16 bg-gray-100">
                <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
                    <img src="https://img.freepik.com/premium-vector/task-management-abstract-concept-vector-illustration_107173-25705.jpg" alt="New Feature" className="max-w-3/4 h-auto rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left lg:pl-16">
                    <h2 className="text-3xl font-bold mb-4">New Exciting Feature</h2>
                    <p className="text-lg mb-6">
                        Discover our latest feature that enhances your productivity and makes managing tasks even more efficient. 
                        With intuitive design and powerful capabilities, you'll wonder how you ever managed without it.
                    </p>
                    <Button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105">
                        Learn More
                    </Button>
                </div>
            </section>

            <section className="w-full py-16 px-4 lg:px-16 bg-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Why Choose TaskQue?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                            <div className="mb-4">
                                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Organize Tasks</h3>
                            <p className="text-gray-700">Easily organize and categorize your tasks to stay on top of your priorities and deadlines.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                            <div className="mb-4">
                                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 00.88 2.71L9 21l5.12-3.29A4 4 0 1015 10V3a2 2 0 10-4 0v10"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Track Progress</h3>
                            <p className="text-gray-700">Monitor your progress with detailed reports and analytics to ensure you're on track.</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                            <div className="mb-4">
                                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 13.5l-.65-.35a4 4 0 00-3.94 0l-.65.35L5 16v2a2 2 0 002 2h10a2 2 0 002-2v-2l-3.76-2.5z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 10V5a2 2 0 012-2h8a2 2 0 012 2v5"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborate Seamlessly</h3>
                            <p className="text-gray-700">Collaborate with your team efficiently with shared tasks, comments, and notifications.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full p-4 text-center border border-gray-200 rounded-lg shadow sm:p-8 dark:border-gray-700 bg-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12">What Our Customers Are Saying</h2>
                    <Carousel className="w-full max-w-4xl mx-auto">
                        <CarouselContent>
                            {[
                                { name: "Selena", rating: 4, review: "TaskQue has transformed the way I manage my tasks. The interface and the features are exactly what I needed." },
                                { name: "Smith", rating: 5, review: "As a project manager, TaskQue has been invaluable in keeping my team organized and on track. Highly recommend!" },
                                { name: "Soniya", rating: 4, review: "I've tried many task management tools, but TaskQue stands out for its ease of use and powerful features." }
                            ].map((review, index) => (
                                <CarouselItem key={index}>
                                    <Card className="shadow-xl transform hover:scale-105 transition-transform bg-white rounded-lg">
                                        <CardHeader className="border-b p-4">
                                            <CardTitle className="text-2xl font-semibold">{review.name}</CardTitle>
                                            <div className="text-yellow-500 text-lg mt-1">{'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}</div>
                                        </CardHeader>
                                        <CardContent className="p-6">
                                            <p className="text-gray-700">{review.review}</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>

        
            <section className="w-full p-4 text-center border border-gray-200 rounded-lg shadow sm:p-8 dark:border-gray-700 bg-gray-100">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Manage your tasks from anywhere</h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move forward with TaskQue on iOS & Android. Download the app today.</p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <a href="https://www.apple.com/in/app-store/" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                        <div className="text-left rtl:text-right">
                            <div className="mb-1 text-xs">Download on the</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                        </div>
                    </a>
                    <a href="https://play.google.com/store/apps" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                        <div className="text-left rtl:text-right">
                            <div className="mb-1 text-xs">Get in on</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;