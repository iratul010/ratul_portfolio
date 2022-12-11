import { FaHandPointRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const { name, work, liveLink, includes, screenShot, gitClient, gitServer } = location.state?.project;
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className=" lg:w-1/2 max-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          {screenShot.map((img, i) => (
            <figure key={i}>
              <img src={img} alt="img" className=" rounded " />
            </figure>
          ))}
        </div>
        <div className=" lg:w-1/2 max-auto ">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2>includes</h2>
          {includes.map((include, i) => (
            <div key={i} className="py-3 flex flex-row justify-start items-center gap-5">
              <span>
                <FaHandPointRight />
              </span>
              <span> {include} </span>
            </div>
          ))}
          <div className="flex flex-col lg:flex-row gap-5 mt-3">
            <button className="btn btn-glass hover:bg-orange-700">
              <a href={liveLink}>Live Site</a>
            </button>
            <button className="btn btn-glass hover:bg-orange-700">
              <a href={gitClient}>Github Client</a>
            </button>
            <button className="btn btn-glass hover:bg-orange-700">
              <a href={gitServer}>Github Server</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
