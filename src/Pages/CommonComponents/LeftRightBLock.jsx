import { Button } from "./Button";

function LeftRightBLock ({title,content,image,contentOnLeft}) {
    return (
      <div className="grid gap-6 lg:grid-cols-2 items-center">
        {contentOnLeft ? (
          <>
            
            <div >
                <h1>{title}</h1>

                <p>{content}</p>
                <Button name="Get Demo"></Button>

            </div>
            <div className="flex-1">
              <img src={image} alt="Visual representation" className=" h-50 w-50 rounded-md " />
            </div>
          </>
        ) : (
          <>
            <div className="flex-1">
              <img src={image} alt="Visual representation" className="h-50 w-50 rounded-md" />
            </div>

            <div>
                <h1>{title}</h1>
                <p>{content}</p>
                <Button name="Get Demo"></Button>
            </div>
          </>
        )}
      </div>
    );
  };
   

export default LeftRightBLock
