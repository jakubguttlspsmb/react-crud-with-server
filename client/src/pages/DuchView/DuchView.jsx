import { Link, useParams, useNavigate } from "react-router-dom";
import { getDuch, deleteDuch } from "../../models/Duch";
import { useState, useEffect } from "react";

export default function CatView() {
  const { id } = useParams();
  const [duch, setDuch] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDuch(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDuch(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (duch.name === formData) {
      const data = await deleteDuch(id);
      if (data.status === 200) {
        navigate("/");
      } else {
        setInfo(data.msg);
      }
    } else {
      setInfo("Wrong input!");
    }
  }

  if (isLoaded === null) {
    return (
      <>
        <p>Důchodce nebyl nalezen</p>
      </>
    )
  }

  if (!isLoaded) {
    return (
      <>
        <p>Důchodce se načítá...</p>
      </>
    )
  }

  return (
    <>
      <h1>Zobraz důchodce</h1>
      <p>{id}</p>
      <p>{duch.name}</p>
      <p>{duch.legs}</p>
      <p>{duch.color}</p>
      <form>
        <input type="text" placeholder={duch.name} onChange={handleChange} />
        <button onClick={handleDelete}>Vymazat</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateduch/${id}`}>
        <p>Vylepši důchodce</p>
      </Link>
      <Link to={"/"}>
        <p>Zpět</p>
      </Link>
    </>
  );
}
