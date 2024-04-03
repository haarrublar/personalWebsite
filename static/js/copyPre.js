function addCopyToClipboardListener() {
    const preTags = document.querySelectorAll('pre');
  
    preTags.forEach((preTag) => {
      preTag.addEventListener('click', copyToClipboard);
    });
  }