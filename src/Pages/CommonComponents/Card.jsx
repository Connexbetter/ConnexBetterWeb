import { Button } from "./Button";
export const Card = (props) => {
  return (
    <>
      <div className="card flex flex-col gap-2 p-5 rounded-lg bg-secondary">
        <div className="card-img">
          <img src={props.img} alt="icons" height={10} width={30}></img>
        </div>
        <div className="card-content flex flex-col gap-2">
          <h2 className="text-lg">{props.title}</h2>
          <p>{props.content}</p>
          {props.button && <Button name="Explore More"></Button>}
        </div>
      </div>
    </>
  );
};
