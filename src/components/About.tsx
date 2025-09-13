import Stacks from "./Stacks";

const About = () => {
  return (
    <div className="about">
      <div className="aboutText">
        <img src="./dev_icon.png" className="w-24 h-24 md:w-44 md:h-44 my-4" />
        <p className="text-gray-900 md:text-[min(1.2vw,2.5rem)] text-sm mx-4 mt-4 p-4 bg-gray-100 border-gray-900 
        border rounded">
          I'm a{" "}
          <span className="text-red-500">
            {" "}
            results-driven Software Engineer{" "}
          </span>
          with 5+ years of experience delivering scalable, high-performance, and
          user-focused web applications for Fortune 500 clients and public
          sector organizations. Proven expertise in React, JavaScript, and
          RESTful API integrations, with strong skills in accessibility,
          responsive design, and team leadership. Adept at collaborating with
          UI/UX teams, mentoring junior developers, and streamlining workflows
          to accelerate delivery while maintaining top code quality.
        </p>
      </div>
      <div className="aboutIcons">
        <div className="flex flex-row">
          <Stacks source="./react.png" />
          <Stacks source="./javascript.png"/>
          <Stacks source="./typescript.png"/>
        </div>
        <div className="flex flex-row">
          <Stacks source="./html.png"/>
          <Stacks source="./css.png"/>
          <Stacks source="./bootstrap.png"/>
        </div>
        <div className="flex flex-row">
          <Stacks source="./git.png"/>
          <Stacks source="./csharp.png"/>
          <Stacks source="./azure.png"/>
        </div>
      </div>
    </div>
  );
};

export default About;
