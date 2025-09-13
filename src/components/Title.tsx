const Title = () => {
  return (
    <div >
      <div className="title">
        <h1 className="textTitle">
          Hi, my name's <span className="text-red-500">Gabriel</span>.
        </h1>
        <h1 className="textTitle">I'm a Fullstack Web Developer.</h1>
        <a className="buttonTitle" href="#about" >
          Learn about <span className="text-red-500">me</span> and my work
        </a>
      </div>
    </div>
  );
};

export default Title;
