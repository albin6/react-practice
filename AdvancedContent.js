import React from "react";

function AdvancedContent(props) {
  return (
    <div>
      <div className="content">
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
      </div>
    </div>
  );
}

export default AdvancedContent;
