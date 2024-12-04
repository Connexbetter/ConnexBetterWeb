import { NavLink } from "react-router-dom";
export const Button = (props) => {
  return (
    <>
      <button className="bg-primery p-3 text-white rounded-lg font-medium">
        <NavLink>{props.name}</NavLink>
      </button>
    </>
  );
};
