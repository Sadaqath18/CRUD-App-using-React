import { useState } from "react"
import { useTasks } from "../context/TaskContext"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function TaskForm() {
  const [task, setTask] = useState("")
  const { addTask } = useTasks()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task.trim()) return
    addTask(task)
    setTask("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
