function LeftRightBLock ({title,content,image,contentOnLeft}) {
    return (
      <div className="grid lg:grid-cols-2">
        {contentOnLeft ? (
          <>
            
            <div >
                <h1>{title}</h1>

                <p>{content}</p>

            </div>
            <div className="flex-1">
              <img src={image} alt="Visual representation" className="w-full h-auto rounded-md" />
            </div>
          </>
        ) : (
          <>
            <div className="flex-1">
              <img src={image} alt="Visual representation" className="w-full h-auto rounded-md" />
            </div>

            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
          </>
        )}
      </div>
    );
  };
   

export default LeftRightBLock
