import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider, useAuth } from "./context/AuthContext"
import { TaskProvider } from "./context/TaskContext"
import Login from "./components/Login"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import ProtectedRoute from "./components/ProtectedRoute"

function TasksPage() {
  const { logout } = useAuth()

  return (
    <TaskProvider>
      <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
        {/* Header */}
        <div className="w-full max-w-2xl flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">CRUD React App</h1>

          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow"
          >
            Logout
          </button>
        </div>

        {/* Task Form + List */}
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  )
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <TasksPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
