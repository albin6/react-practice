import React from "react";

function Content() {
  const persons = [
    { name: "Leanne Graham", email: "leannegraham@abc.com" },
    { name: "Ervin Howell", email: "ervinhowell@abc.com" },
  ];
  return (
    <div>
      {persons.map((person, index) => (
        <div key={index} className="container">
          <h3>{person.name}</h3>
          <h4>{person.email}</h4>
        </div>
      ))}
    </div>
  );
}

export default Content;
