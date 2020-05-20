// textarea css display
const textareaCSS = document.querySelector("#cssText");
const copyBut = document.querySelector("#copyBut");

//CSS DIsplay function to be called after every onchange of the inputs

export const displayCSS = () => {
  textareaCSS.innerHTML = `
  /* border radius */
  border-top-left-radius: ${square.style.borderTopLeftRadius || "0"};
  border-top-right-radius: ${square.style.borderTopRightRadius || "0"};
  border-bottom-left-radius: ${square.style.borderBottomLeftRadius || "0"};
  border-bottom-right-radius: ${square.style.borderBottomRightRadius || "0"};

  /* eliptical borders */
  border-start-start-radius: ${square.style.borderStartStartRadius || "0"};
  border-start-end-radius: ${square.style.borderStartEndRadius || "0"};
  border-end-start-radius: ${square.style.borderEndStartRadius || "0"};
  border-end-end-radius: ${square.style.borderEndEndRadius || "0"};
  `;
  textareaCSS.value = textareaCSS.innerHTML;
};

copyBut.onclick = (event) => {
  textareaCSS.select();
  document.execCommand("copy", true);
};
