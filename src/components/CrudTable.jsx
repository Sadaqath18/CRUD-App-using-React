import { useState } from "react"

export default function CrudTable() {
  const [items, setItems] = useState([])
  const [name, setName] = useState("")
  const [editingIndex, setEditingIndex] = useState(null)

  const addItem = () => {
    if (!name.trim()) return
    if (editingIndex !== null) {
      const updated = [...items]
      updated[editingIndex] = name
      setItems(updated)
      setEditingIndex(null)
    } else {
      setItems([...items, name])
    }
    setName("")
  }

  const editItem = (index) => {
    setName(items[index])
    setEditingIndex(index)
  }

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
    if (editingIndex === index) {
      setEditingIndex(null)
      setName("")
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Manage Items</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addItem}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500">No items added yet.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2 text-left">#</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Item</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{item}</td>
                <td className="border border-gray-300 px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => editItem(index)}
                    className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-md text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteItem(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
