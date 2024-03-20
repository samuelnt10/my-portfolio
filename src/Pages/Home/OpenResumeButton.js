import React from "react";

const OpenResumeButton = () => {
  // Function to open the PDF file in a new tab
  const openResume = () => {
    window.open("/Users/samuelkambaji/Downloads/MyResume(new).pdf", "_blank");
  };

  return (
    <button onClick={openResume} className="btn btn-outline-primary">
      Open Resume
    </button>
  );
};

export default OpenResumeButton;
