import Title from "../../../../components/Title";
import { Outlet } from "react-router-dom";
import ActiveRoute from "../../../../components/ActiveRoute";

function Categories() {
  return (
    <div id="explore">
      <Title title={"Explore More"} />
      <div className="flex pb-5">
        <ActiveRoute to={"/"}>All</ActiveRoute>
        <ActiveRoute to={"/cooking"}>Cooking</ActiveRoute>
        <ActiveRoute to={"/painting"}>Painting</ActiveRoute>
        <ActiveRoute to={"/gardening"}>Gardening</ActiveRoute>
        <ActiveRoute to={"/crafting"}>Crafting</ActiveRoute>
        <ActiveRoute to={"/sewing"}>Sewing</ActiveRoute>
      </div>
      <Outlet />
    </div>
  );
}

export default Categories;
