import { Layout } from "Components/Layout";
import { render } from 'preact';

render(<Dashboard />, document.getElementById('Pages/Dashboard/Dashboard')!);
export function Dashboard() {
	return (
		<Layout mainContent={
			<>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
				</div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="px-4 py-5 sm:p-6">
								<dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
								<dd className="mt-1 text-3xl font-semibold text-gray-900">12,345</dd>
							</div>
						</div>

						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="px-4 py-5 sm:p-6">
								<dt className="text-sm font-medium text-gray-500 truncate">Sum</dt>
								<dd className="mt-1 text-3xl font-semibold text-gray-900">$45,678</dd>
							</div>
						</div>

						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="px-4 py-5 sm:p-6">
								<dt className="text-sm font-medium text-gray-500 truncate">Conversion Rate</dt>
								<dd className="mt-1 text-3xl font-semibold text-gray-900">24.57%</dd>
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
			</>
		}>
		</Layout>
	);
}
