import "./MainPage.css";
import Content from "../../components/MainPage/Content";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="MainContainer">
      <div className="Header">
      <h1>Výtejte v domově důchodců</h1>
      </div>
      <div className="SecondContainer">
      <Link  className="Text" to={"/createduch"}>
        <p>Vytvoř si svého důchodce</p>
      </Link>
      <Link className="Text"  to={"/duchs"}>
        <p>Tvoje úschovna důchodců</p>
      </Link>
      </div>
    </div>
  );
}
