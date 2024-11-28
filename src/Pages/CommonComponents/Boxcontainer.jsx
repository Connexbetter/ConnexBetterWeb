
import { CommonHeading } from "./CommonHeading";
import { Card } from "./Card";

function Boxcontainer({ heading, para, carddata, showbutton }) {
  return (
    <div className="container">
      <CommonHeading h={heading} p={para}></CommonHeading>
      <div className=" grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        {carddata.map((ele, ind) => {
          return (
            <Card
              key={ind}
             ele={ele}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default Boxcontainer;
