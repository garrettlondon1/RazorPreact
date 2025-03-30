import { render } from 'preact';
import { Router, Route } from 'preact-router';
import { Layout } from "Components/Layout";


const Tab1 = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 className="text-3xl font-bold text-gray-900">Tab 1</h1>
			<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{/* Stats Card */}
				<div className="bg-white overflow-hidden shadow rounded-lg">
					<div className="px-4 py-5 sm:p-6">
						<dt className="text-sm font-medium text-gray-500 truncate">Total Tests</dt>
						<dd className="mt-1 text-3xl font-semibold text-gray-900">12,345</dd>
					</div>
				</div>

				{/* Stats Card */}
				<div className="bg-white overflow-hidden shadow rounded-lg">
					<div className="px-4 py-5 sm:p-6">
						<dt className="text-sm font-medium text-gray-500 truncate">Test Passed</dt>
						<dd className="mt-1 text-3xl font-semibold text-gray-900">12,345</dd>
					</div>
				</div>

				{/* Stats Card */}
				<div className="bg-white overflow-hidden shadow rounded-lg">
					<div className="px-4 py-5 sm:p-6">
						<dt className="text-sm font-medium text-gray-500 truncate">Test Failed</dt>
						<dd className="mt-1 text-3xl font-semibold text-gray-900">12,345</dd>
					</div>
				</div>
			</div>

			{/* Recent Activity Section */}
			<div className="mt-8">
				<div className="bg-white shadow rounded-lg">
					<div className="px-4 py-5 border-b border-gray-200 sm:px-6">
						<h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
					</div>
					<ul className="divide-y divide-gray-200">
						<li className="px-4 py-4 sm:px-6">Activity item 1</li>
						<li className="px-4 py-4 sm:px-6">Activity item 2</li>
						<li className="px-4 py-4 sm:px-6">Activity item 3</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

const Tab2 = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h1 className="text-3xl font-bold text-gray-900">Tab 2</h1>
			<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{/* Stats Card */}
				<div className="bg-white overflow-hidden shadow rounded-lg">
					<div className="px-4 py-5 sm:p-6">
						<dt className="text-sm font-medium text-gray-500 truncate">Tasks</dt>
						<dd className="mt-1 text-3xl font-semibold text-gray-900">89</dd>
					</div>
				</div>

				{/* Stats Card */}
				<div className="bg-white overflow-hidden shadow rounded-lg">
					<div className="px-4 py-5 sm:p-6">
						<dt className="text-sm font-medium text-gray-500 truncate">Completed</dt>
						<dd className="mt-1 text-3xl font-semibold text-gray-900">64</dd>
					</div>
				</div>

				{/* Stats Card */}
				<div className="bg-white overflow-hidden shadow rounded-lg">
					<div className="px-4 py-5 sm:p-6">
						<dt className="text-sm font-medium text-gray-500 truncate">Completion Rate</dt>
						<dd className="mt-1 text-3xl font-semibold text-gray-900">71.9%</dd>
					</div>
				</div>
			</div>

			{/* Recent Activity Section */}
			<div className="mt-8">
				<div className="bg-white shadow rounded-lg">
					<div className="px-4 py-5 border-b border-gray-200 sm:px-6">
						<h3 className="text-lg leading-6 font-medium text-gray-900">Recent Projects</h3>
					</div>
					<ul className="divide-y divide-gray-200">
						<li className="px-4 py-4 sm:px-6">Project Alpha</li>
						<li className="px-4 py-4 sm:px-6">Project Beta</li>
						<li className="px-4 py-4 sm:px-6">Project Gamma</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

render(<ClientRoute />, document.getElementById('Pages/ClientRoute/ClientRoute')!);
export function ClientRoute() {
	return (
		<Layout
			subTabs=
			{
				<nav className="flex">
					<a href="/clientroute/tab1" className="${location.pathname === '/clientroute/tab1' ? 'border-b-2 border-gray-500 text-gray-900' : 'border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'} inline-flex items-center px-1 pt-1 font-medium">
						Tab 1
					</a>
					<a href="/clientroute/tab2" className="${location.pathname === '/clientroute/tab2' ? 'border-b-2 border-gray-500 text-gray-900' : 'border-b-2 border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'} inline-flex items-center px-1 pt-1 font-medium">
						Tab 2
					</a>
				</nav>
			}
			mainContent=
			{
				<div className="py-6 bg-gray-100">
					<Router>
						<Route path="/clientroute/tab1" component={Tab1} default />
						<Route path="/clientroute/tab2" component={Tab2} />
					</Router>
				</div>
			}>
		</Layout>
	);
}