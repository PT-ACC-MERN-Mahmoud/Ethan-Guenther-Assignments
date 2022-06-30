import { Link } from "react-router-dom";

const About = (props) => {
    return (
      <div>
        <h1 style={{color: "blue", textAlign:'center'}}>
          About Component
        </h1>
        <Link to={"/"} style={{display:"flex",justifyContent:"center"}}>Go to Home</Link>
      </div>
    )
  }

  export default About;