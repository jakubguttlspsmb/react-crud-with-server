import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import About from "./About/About";
import DuchCreateForm from "./DuchCreateForm/DuchCreateForm";
import DuchUpdateForm from "./DuchUpdateForm/DuchUpdateForm";
import DuchView from "./DuchView/DuchView";
import DuchList from "./DuchList/DuchList";
import CreatedDuch from "./DuchCreateForm/CreatedDuch";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/createduch" element={<DuchCreateForm />} />
          <Route path="/updateduch/:id" element={<DuchUpdateForm />} />
          <Route path="/duch/:id" element={<DuchView />} />
          <Route path="/duchs" element={<DuchList />} />
          <Route path="/createdduch/:id" element={<CreatedDuch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
