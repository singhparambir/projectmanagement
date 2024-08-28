import NewProject from "./Components/NewProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import ProjectsSideBar from "./Components/projectsSideBar.jsx";
import { useState } from "react";
function App() {


  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };

    });

  }

  function handleAddProject({ projectData }) {
    setProjectState(
      prevState => {
        const newProject = {
          ...projectData,
          id: Math.random()
        }


        return {
          ...prevState,
          projects: [...prevState.projects, newProject],

        }

      }
    )

  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />

  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />

  }


  return (
    <main className="h-screen my-8 flex gap-8" >
      <ProjectsSideBar onStartAddProject={handleStartAddProject} />

      {content}
    </main>
  );

}

export default App;
