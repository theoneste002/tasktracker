// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import TaskTracker from "./pages/TaskTracker";

// const App = () => {
//   return (
//     <Router>
//       <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//         <nav>
//           <Link to="/" style={{ marginRight: "15px", textDecoration: "none", fontSize: "18px" }}>Home</Link>
//           <Link to="/tasks" style={{ textDecoration: "none", fontSize: "18px" }}>Task Tracker</Link>
//         </nav>
//         <hr />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/tasks" element={<TaskTracker />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditTask from "./pages/EditTask";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<EditTask />} />
      </Routes>
    </Router>
  )
}
export default App
