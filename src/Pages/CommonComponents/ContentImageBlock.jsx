import { Button } from "./Button";
function ContentImageBlock({ subheading, heading, content,img }) {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="">
        <p>{subheading}</p>
        <h2>{heading}</h2>
        <p>{content}</p>
        <Button name="contact us"></Button>
      </div>
      <div className="">
        <img src={img}></img>
      </div>
    </div>
  );
}

export default ContentImageBlock;
