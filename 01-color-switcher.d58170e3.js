const e=document.querySelector("[data-start"),t=document.querySelector("[data-stop]");let d=null;function l(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.disabled=!0,console.log(l()),e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,d=setInterval((()=>{l(),console.log(l()),document.body.style.backgroundColor=l()}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.d58170e3.js.map