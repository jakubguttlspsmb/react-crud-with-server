import { Link, useParams } from "react-router-dom";

export const width = screen.width;
export default function CreatedDuch() {
  const { id } = useParams();

  return (
    <>
      <p>Vytvoř Důchodce: {id}</p>

      <Link to={`/duch/${id}`}>
        <p>Podívej se na Důchodce</p>
      </Link>
      <Link to={"/"}>
        <p>Zpět</p>
      </Link>
    </>
  );
}
