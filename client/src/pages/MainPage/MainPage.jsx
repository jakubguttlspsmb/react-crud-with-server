import "./MainPage.css";
import Content from "../../components/MainPage/Content";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Výtejte v domově důchodců</h1>
      <Link to={"/createduch"}>
        <p>Vytvoř si svého důchodce</p>
      </Link>
      <Link to={"/duchs"}>
        <p>Tvoji důchodci</p>
      </Link>
    </>
  );
}
