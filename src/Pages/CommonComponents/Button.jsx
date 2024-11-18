import { NavLink } from "react-router-dom";
export const Button = (props) => {
  return (
    <>
      <button>
        <NavLink>{props.name}</NavLink>
      </button>
    </>
  );
};
