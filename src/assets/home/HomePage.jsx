import { NavLink } from "react-router-dom"

export function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Navigation */}
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                        <span className="text-2xl font-bold text-gray-800">Logo</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
                        
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                       <NavLink to="/AudioGirl">Audio of girls</NavLink>
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        <NavLink to="/AudioBoy">Audio of boys</NavLink>
                    </button>

                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        <NavLink to="/gifandhello">Gif and Audio</NavLink>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Welcome to Our <span className="text-blue-600">Amazing</span> Platform
                    </h1>
                    <p className="text-xl text-gray-600 mb-10">
                        A simple, elegant solution for all your needs. Join thousands of satisfied users who have transformed their workflow with our platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg">
                            Start Free Trial
                        </button>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition duration-300 border border-gray-300">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Twinty items */}

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello1">Audio Hello one</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello2">Audio Hello two</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello3">Audio Hello three</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello4">Audio Hello four</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello5">Audio Hello five</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello6">Audio Hello six</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello7">Audio Hello seven</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello8">Audio Hello eight</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello9">Audio Hello nine</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello10">Audio Hello ten</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello11">Audio Hello eleven</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello12">Audio Hello tweelve</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello13">Audio Hello thirteen</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello14">Audio Hello fourteen</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello15">Audio Hello fifteen</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello16">Audio Hello sixteen</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello17">Audio Hello seventeen</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello18">Audio Hello eighteen</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello19">Audio Hello nineteen</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello20">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello21">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello22">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello23">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello24">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello25">Audio Hello twinty</NavLink>
                     <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello26">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello27">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello28">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello29">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello30">Audio Hello twinty</NavLink>
                     <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello31">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello32">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello33">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello34">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello35">Audio Hello twinty</NavLink>
                     <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello36">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello37">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello38">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello39">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello40">Audio Hello twinty</NavLink>
                     <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello41">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello42">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello43">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello44">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello45">Audio Hello twinty</NavLink>
                     <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello46">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello47">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello48">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello49">Audio Hello twinty</NavLink>
                    <NavLink className="block p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 rounded-lg text-center transition-colors duration-200 border border-blue-200" to="/gifandhello50">Audio Hello twinty</NavLink>
                </div>

                {/* Features Section */}
                <div className="mt-24 grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Fast & Efficient</h3>
                        <p className="text-gray-600">Experience blazing fast performance that saves you time and boosts productivity.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                            <span className="text-2xl">🔒</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
                        <p className="text-gray-600">Your data is protected with enterprise-grade security and 99.9% uptime guarantee.</p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Easy to Use</h3>
                        <p className="text-gray-600">Intuitive interface that requires no training. Get started in minutes.</p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">10K+</div>
                            <div className="text-gray-600 mt-2">Happy Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">99%</div>
                            <div className="text-gray-600 mt-2">Satisfaction Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">24/7</div>
                            <div className="text-gray-600 mt-2">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">50+</div>
                            <div className="text-gray-600 mt-2">Countries</div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white mt-20 py-8">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                                <span className="text-xl font-bold">Logo</span>
                            </div>
                            <p className="text-gray-400 mt-2">Making your life easier, one feature at a time.</p>
                        </div>
                        <div className="text-gray-400">
                            © {new Date().getFullYear()} Your Company. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
