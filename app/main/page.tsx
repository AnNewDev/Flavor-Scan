export default function HomePage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow w-96 text-center">
                <h1 className="text-2xl font-bold mb-6">Welcome to FlavorScan</h1>
                <p className="mb-4">Your go-to app for discovering and sharing your favorite flavors!</p>
                <a href="/register" className="text-blue-500 hover:underline">Get Started</a>
            </div>
        </div>
    );
}
