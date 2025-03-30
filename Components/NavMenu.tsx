
export const NavMenu = () => {
	return (
		<nav className="bg-white shadow">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex">
						<div className="flex-shrink-0 flex items-center">
							<span className="text-gray-900 font-bold text-lg">Logo</span>
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<a href="/" data-native className={`${location.pathname === '/' ? 'border-b-2 border-gray-500 text-gray-900' : 'border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'} inline-flex items-center px-1 pt-1 font-medium`}>
								Home
							</a>
							<a href="/profile" data-native className={`${location.pathname.includes('/profile') ? 'border-b-2 border-gray-500 text-gray-900' : 'border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'} inline-flex items-center px-1 pt-1 font-medium`}>
								Profile
							</a>
							<a href="/clientroute" data-native className={`${location.pathname.includes('/clientroute') ? 'border-b-2 border-gray-500 text-gray-900' : 'border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'} inline-flex items-center px-1 pt-1 font-medium`}>
								ClientRoute
							</a>
						</div>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						<button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
							Sign In
						</button>
					</div>
					<div className="flex items-center sm:hidden">
						<button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
							<span className="sr-only">Open main menu</span>
							<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};