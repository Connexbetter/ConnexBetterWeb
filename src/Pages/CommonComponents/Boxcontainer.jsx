
import { CommonHeading } from "./CommonHeading";
import { Card } from "./Card";

function Boxcontainer({ heading, para, carddata, showbutton }) {
  return (
    <div className="container">
      <CommonHeading h={heading} p={para}></CommonHeading>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {carddata.map((ele) => (
          <Card key={ele.id} ele={ele} showbutton={showbutton}></Card>
        ))}
      </div>
    </div>
  );
}

export default Boxcontainer;

