// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const EditTask = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { task, index } = location.state || {};
//   const [editedTask, setEditedTask] = useState(task ? task.text : "");

//   const handleSave = () => {
//     const storedTasks = JSON.parse(localStorage.getItem("tasks"));
//     if (storedTasks && index !== null) {
//       storedTasks[index] = {
//         ...storedTasks[index],
//         text: editedTask,
//       };
//       localStorage.setItem("tasks", JSON.stringify(storedTasks));
//       navigate("/"); // Navigate back to the Home page
//     }import React, { useState, useEffect } from "react";
//     import { useNavigate } from "react-router-dom";
//     import { FaEdit, FaTrashAlt } from "react-icons/fa";
//     import moment from "moment";
    
//     const Home = () => {
//       const [task, setTask] = useState("");
//       const [tasks, setTasks] = useState([]);
//       const navigate = useNavigate();
    
//       // Load tasks from localStorage when component mounts
//       useEffect(() => {
//         const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         setTasks(storedTasks);
//       }, []);
    
//       // Update tasks in localStorage whenever tasks state changes
//       useEffect(() => {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//       }, [tasks]);
    
//       // Save current input to localStorage whenever it changes
//       useEffect(() => {
//         localStorage.setItem("currentTask", task);
//       }, [task]);
    
//       // Load the current task input from localStorage when component mounts
//       useEffect(() => {
//         const storedTask = localStorage.getItem("currentTask") || "";
//         setTask(storedTask);
//       }, []);
    
//       // Handle adding a new task
//       const handleAddTask = () => {
//         if (task.trim() === "") return;
    
//         const newTask = {
//           text: task,
//           time: moment().format("MMMM Do YYYY"),
//         };
    
//         setTasks((prevTasks) => [...prevTasks, newTask]);
//         setTask(""); // Clear the input field after adding
//       };
    
//       // Handle task deletion
//       const handleDelete = (index) => {
//         const updatedTasks = tasks.filter((_, i) => i !== index);
//         setTasks(updatedTasks);
//       };
    
//       // Handle task edit
//       const handleEdit = (index) => {
//         navigate("/SaveChange", { state: { task: tasks[index], index } });
//       };
    
//       return (
//         <div className="p-5 max-w-lg mx-auto rounded ">
//           <h1 className="text-2xl font-bold mb-4 text-center">Task Tracker</h1>
    
//           {/* Add new task */}
//           <div className="flex mb-4">
//             <input
//               type="text"
//               placeholder="Enter Task"
//               value={task}
//               onChange={(e) => setTask(e.target.value)}
//               className="flex-1 p-2 border rounded-l"
//             />
//             <button
//               onClick={handleAddTask}
//               className="p-2 bg-blue-500 text-white rounded-r"
//             >
//               Add
//             </button>
//           </div>
    
//           {/* Display tasks */}
//           {tasks.length === 0 ? (
//             <p className="text-gray-500 text-center">No tasks</p>
//           ) : (
//             tasks.map((t, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
//               >
//                 <div>
//                   <p className="font-semibold">{t.text}</p>
//                   <p className="text-gray-500 text-sm">Added on: {t.time}</p>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="text-yellow-500"
//                   >
//                     <FaEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="text-red-500"
//                   >
//                     <FaTrashAlt />
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       );
//     };
    
//     export default Home;
//     <div className="p-5 max-w-lg mx-auto  ">
//       <h1 className="text-2xl font-bold mb-4 text-center">Edit Task</h1>
//       <input
//         type="text"
//         value={editedTask}
//         onChange={(e) => setEditedTask(e.target.value)}
//         className="w-full p-2 mb-4 border rounded"
//       >
//         Save Changes
//       </button>
//     </div>
//   );
// };import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import moment from "moment";

// const Home = () => {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const navigate = useNavigate();

//   // Load tasks from localStorage when component mounts
//   useEffect(() => {
//     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     setTasks(storedTasks);
//   }, []);

//   // Update tasks in localStorage whenever tasks state changes
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   // Save current input to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("currentTask", task);
//   }, [task]);

//   // Load the current task input from localStorage when component mounts
//   useEffect(() => {
//     const storedTask = localStorage.getItem("currentTask") || "";
//     setTask(storedTask);
//   }, []);

//   // Handle adding a new task
//   const handleAddTask = () => {
//     if (task.trim() === "") return;

//     const newTask = {
//       text: task,
//       time: moment().format("MMMM Do YYYY"),
//     };

//     setTasks((prevTasks) => [...prevTasks, newTask]);
//     setTask(""); // Clear the input field after adding
//   };

//   // Handle task deletion
//   const handleDelete = (index) => {
//     const updatedTasks = tasks.filter((_, i) => i !== index);
//     setTasks(updatedTasks);
//   };

//   // Handle task edit
//   const handleEdit = (index) => {
//     navigate("/SaveChange", { state: { task: tasks[index], index } });
//   };

//   return (
//     <div className="p-5 max-w-lg mx-auto rounded ">
//       <h1 className="text-2xl font-bold mb-4 text-center">Task Tracker</h1>

//       {/* Add new task */}
//       <div className="flex mb-4">
//         <input
//           type="text"
//           placeholder="Enter Task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           className="flex-1 p-2 border rounded-l"
//         />
//         <button
//           onClick={handleAddTask}
//           className="p-2 bg-blue-500 text-white rounded-r"
//         >
//           Add
//         </button>
//       </div>

//       {/* Display tasks */}
//       {tasks.length === 0 ? (
//         <p className="text-gray-500 text-center">No tasks</p>
//       ) : (
//         tasks.map((t, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
//           >
//             <div>
//               <p className="font-semibold">{t.text}</p>
//               <p className="text-gray-500 text-sm">Added on: {t.time}</p>
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => handleEdit(index)}
//                 className="text-yellow-500"
//               >
//                 <FaEdit />
//               </button>
//               <button
//                 onClick={() => handleDelete(index)}
//                 className="text-red-500"
//               >
//                 <FaTrashAlt />
//               </button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Home;

// export default EditTask;
