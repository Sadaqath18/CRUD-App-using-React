import { useTasks } from "../context/TaskContext"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TaskList() {
  const { tasks, removeTask } = useTasks()

  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet. Add one above!</p>
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Card key={task.id} className="p-3 flex justify-between items-center">
          <span>{task.text}</span>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => removeTask(task.id)}
          >
            Delete
          </Button>
        </Card>
      ))}
    </div>
  )
}
