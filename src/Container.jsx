import { useState } from "react";

export default function Container({ title, children }) {
  const [collapse, setCollapse] = useState(false);

  function handleCollapse() {
    setCollapse((collapsed) => !collapsed);
  }

  return (
    <div>
      <div>
        {title}
        <button onClick={handleCollapse}>Collapse</button>
      </div>
      {collapse && (
        <div className="bg-white border border-red-800">{children}</div>
      )}
    </div>
  );
}
