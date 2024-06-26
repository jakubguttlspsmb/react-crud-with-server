import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createDuch } from "../../models/Duch";
import "../DuchCreateForm/CreateDuch.css";

export default function DuchCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const duch = await createDuch(formData);
    if (duch.status === 201) {
      redirectToSuccessPage(duch.payload._id);
    } else {
      setInfo(duch.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    setFormData({ ...formData, imgFile: e.target.files[0] });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdduch/${id}`);
  };

  return (
    <>
      <div className="Idk"></div>
      <h2 className="pervitin">Zde můžete vidět naše exponáty. </h2>
      <h1>Forma na důchodce</h1>
      <form>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter Crackheads name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="secondname"
          required
          placeholder="Enter Crackheads surename"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          name="age"
          required
          placeholder="Enter Crackheads age"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="haircolor"
          required
          placeholder="Enter Crackheads haircolor"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="addiction"
          required
          placeholder="Enter Crackheads addictions"
          onChange={(e) => handleChange(e)}
        />

        <button onClick={handlePost}>Vytoř Důchodce</button>
      </form>
      <Link to={"/"}>
        <p>Zpět</p>
      </Link>
    </>
  );
}
