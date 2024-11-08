import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
  length?: number;
}

const ExpandableText = ({ children, length = 7 }: Props) => {
  const [expand, setExpand] = useState(false);
  const text = children.substring(0, length);
  return (
    <div>
      <p>{expand ? children : text}</p>
      {children.length > length && (
        <button onClick={() => setExpand(!expand)}>
          {expand ? "Less" : "More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
