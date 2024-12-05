import { Button } from "./Button";
import Lottie from "lottie-react";

export const Card = ({ ele }) => {
  const { img, title, content, button, isImageOrLottie } = ele;

  return (
    <div className="card flex flex-col gap-2 p-5 rounded-lg bg-secondary">
      <div className="card-img">
        {isImageOrLottie ? (
          <Lottie animationData={img} className="h-20 w-20 " />
        ) : (
          <img src={img} alt="icons" height={10} width={30} />
        )}
      </div>
      <div className="card-content flex flex-col gap-2">
        <h2 className="text-lg">{title}</h2>
        <p>{content}</p>
        {button && <Button name="Explore More" />}
      </div>
    </div>
  );
};

