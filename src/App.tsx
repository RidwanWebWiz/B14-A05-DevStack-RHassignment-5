// import { useState } from 'react'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Hello Tailwind CSS
        </h1>

        <p className="mt-4 text-gray-600">
          Tailwind is working in App.tsx!
        </p>

        <button className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
    </>
  )
}

export default App
