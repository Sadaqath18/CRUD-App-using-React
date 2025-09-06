import { useAuth } from "../context/AuthContext";
import { TaskProvider } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TasksPage() {
  const { logout } = useAuth();

  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto">
          {/* Navbar */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-600">CRUD React App</h1>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          {/* Task Form */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <TaskForm />
          </div>

          {/* Task List */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <TaskList />
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}
