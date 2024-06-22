// components/DownloadButton.js
import React from 'react';

const DownloadButton = () => {
  return (
    <a href="/filename.pdf" download="filename.pdf">
      Download CV
    </a>
  );
};

export default DownloadButton;
