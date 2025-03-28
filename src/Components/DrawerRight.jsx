import React from "react";

const DrawerRight = ({ expanded, setExpanded }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-60 bg-gray-900 text-white transition-transform duration-300 ${
        expanded ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-4 right-4 text-white"
        onClick={() => setExpanded(false)}
      >
        ✖
      </button>
      <div className="p-4">Contenido del Drawer</div>
    </div>
  );
};

export default DrawerRight;
