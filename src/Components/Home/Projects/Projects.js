import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <>
      {" "}
      <div className="min-h-screen mx-auto">
        <h2 className="text-center text-white  text-2xl py-14">MY PROJECTS</h2>
        <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {projectData.map((project, i) => (
            <div className="card w-96 mx-auto glass" key={i}>
              <figure>
                <img src={project.imgLink} className="min-h-[270px]" alt="car!" />
              </figure>
              <div className="card-body ">
                <h2 className="  text-gray-300">{project.name}</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-glass hover:bg-orange-700">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Site
                    </a>
                  </button>

                  <Link to="/projectDetails" state={{ project: project }}>
                    <button className="btn btn-glass hover:bg-orange-700">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
