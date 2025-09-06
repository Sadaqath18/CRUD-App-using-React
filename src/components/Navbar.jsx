export default function Navbar({ onLogout }) {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">CRUD App</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}
