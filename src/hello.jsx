import React from "react";
import ReactDOM from "react-dom";

const Hello = function(name) {
  return (
    <div>Hello, {name}</div>
  );
};

const view = Hello("Will");

const element = document.getElementByid("app");
ReactDOM.render(view, element);


