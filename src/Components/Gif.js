import React from 'react';
import cogoToast from 'cogo-toast';
import copy from 'copy-to-clipboard';

const Gif = ({ url }) => {
  let handleCopyUrl = () => {
    copy(url);
    cogoToast.success(`Copied: ${url}`);
  }

  return (
    <li className="gif-wrap">
      <img src={url} alt="" onClick={handleCopyUrl} />
    </li>
  );
};

export default Gif;