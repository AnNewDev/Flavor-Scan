export default function DashboardPage() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow w-96 text-center">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
                <p className="mb-4">Welcome to your dashboard! Here you can manage your flavors and preferences.</p>
                <a href="/flavors" className="text-blue-500 hover:underline">View Flavors</a>
            </div>
        </div>
    );
}