import ProjectSideBar from "./components/ProjectSideBar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  return (
    <div className="min-h-screen flex gap-10">
<ProjectSideBar/>
      <NewProject/>
    </div>
  );
}

export default App;
