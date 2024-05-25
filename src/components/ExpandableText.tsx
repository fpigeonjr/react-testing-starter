import { useState } from "react";

const ExpandableText = ({ text }: { text: string }) => {
  const LIMIT = 255;
  const [isExpanded, setExpanded] = useState(false);

  if (text.length <= LIMIT) return <article>{text}</article>;

  return (
    <div>
      {isExpanded ? (
        <article>{text}</article>
      ) : (
        <article>{text.substring(0, LIMIT)}...</article>
      )}
      <button className="btn" onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ExpandableText;
