import { NavMenu } from "./NavMenu";

export const Layout = ({ 
	mainContent,
	subTabs, 
}: { 
	mainContent: preact.ComponentChildren;
	subTabs?: preact.ComponentChildren; 
}) => {
	return (
		<>
			<div className="flex flex-col h-screen">
				<NavMenu />
				{subTabs && (
					<div className="w-full border-b border-gray-200">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<nav className="flex space-x-8">
								{subTabs}
							</nav>
						</div>
					</div>
				)}
				<div className="flex-1 overflow-y-auto">
					<div className="min-h-screen bg-gray-100">
						<div className="py-6">
							{mainContent}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
