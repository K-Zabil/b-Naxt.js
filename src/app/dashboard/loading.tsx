export default function LoadingDashboard() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-4xl font-semibold text-gray-500 animate-pulse">
                Loading ...
            </p>
        </div>
    );
}