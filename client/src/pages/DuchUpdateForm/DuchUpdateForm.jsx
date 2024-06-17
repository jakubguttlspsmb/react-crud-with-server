import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateDuch, getDuch } from "../../models/Duch";
import "../MainPage/MainPage.css"


export default function DuchUpdateForm() {
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
  };

  const postForm = async () => {
    const duch = await updateDuch(id, formData);
    if (duch.status === 200) {
      navigate(`/duch/${id}`);
    } else {
      setInfo(duch.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  useEffect(() => {
    load();
  }, []);

  if (isLoaded === null) {
    return (
      <>
        <p>Důchodce nebyl nalezen</p>
      </>
    );
  }

  if (!isLoaded) {
    return (
      <>
        <p>Důchodce se načítá...</p>
      </>
    );
  }

  return (
    <>
      <h1>Vylepši důchodce</h1>
      <p>{id}</p>
      <form>
        <input
          type="text"
          defaultValue={duch.name}
          name="name"
          required
          placeholder="Enter duch name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          defaultValue={duch.legs}
          name="legs"
          required
          placeholder="Enter legs"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={duch.color}
          name="color"
          required
          placeholder="Enter color"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Vylepši důchodce</button>
      </form>
      <Link to={"/"}>
        <p>Zpět</p>
      </Link>
    </>
  );
}
