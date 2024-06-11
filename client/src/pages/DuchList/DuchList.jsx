import { Link } from "react-router-dom";
import DuchLink from "./DuchLink";
import { useState, useEffect } from "react";
import { getDuchs } from "../../models/Duch";

export default function DuchList() {
  const [duchs, setDuchs] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getDuchs();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDuchs(data.payload);
      setLoaded(true);
    }
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
      <h1>List důchodců</h1>
      <div>
        {duchs.map((duch, index) => (
          <div key={index} className="duch-container">
            {/* Display the DuchLink component with the current duch props */}
            <DuchLink {...duch} />

            {/* Display additional information or components */}
            <div className="additional-info">
              <h3>Additional Information</h3>
              <p>{duch.secondname}</p>
              <p>{duch.age}</p>
            </div>

            {/* Add more components or elements as needed */}
          </div>
        ))}
      </div>
      <Link to={"/"}>
        <p>Zpět</p>
      </Link>
    </>
  );
}
