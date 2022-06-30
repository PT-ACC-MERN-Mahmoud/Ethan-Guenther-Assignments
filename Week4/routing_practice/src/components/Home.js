import {Link} from "react-router-dom";

const Home = (props) => {
    return (
      <div>
        <h1 style={{color: "red",textAlign:"center"}}>
          Home Component
        </h1>
        <Link to={"/about"} style={{alignContent:"center",display:"flex",justifyContent:"center"}}>Go to About</Link>
      </div>
    )
  }

  export default Home;