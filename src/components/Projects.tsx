const Projects = () => {
  return (
    <div className="about my-20">
      <div className="projectImg">
        <img
          src="./MovieApp.png"
          className="w-100 h-100 md:w-auto md:h-auto lg:w-auto lg:h-auto rounded"
        />
      </div>
      <div className="aboutText mx-10">
        <p
          className="text-gray-900 md:text-[min(1.2vw,2.5rem)] text-sm mx-4 mt-4 p-4 bg-gray-100 border-gray-900 
        border rounded"
        >
          Movie Explorer App
        </p>
        <p
          className="text-gray-900 md:text-[min(1.2vw,2.5rem)] text-sm mx-4 mt-4 p-4 bg-gray-100 border-gray-900 
        border rounded"
        >
          A React-based web application built with{" "}
          <span className="text-red-500">TypeScript and TailwindCSS</span>
          ,designed to help users discover movies effortlessly. The app connects
          to an external movie API to showcase the most popular films in
          real-time.
        </p>
        <a className="buttonTitle" href="https://github.com/cesar05gabriel/ReactMovieApp" target="_blank">
          Learn more about <span className="text-red-500">my work</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
