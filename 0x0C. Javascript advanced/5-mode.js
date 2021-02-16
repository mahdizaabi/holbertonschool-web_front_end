function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}
function createButton(buttonName, mode) {
    return function(){
        const btn = document.createElement("button");
        btn.setAttribute("id", buttonName);
        btn.innerText = buttonName;
        document.body.appendChild(btn);
        btn.addEventListener("click", (e) => {
            mode();
          });
    }
}

function main() {
  const bodyx = document.querySelector("body");
  bodyx.innerText = "holberton";
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode  = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode  = changeMode(12, "normal", "lowercase", "white", "black");
  const spookyStyle = createButton('spooky', spooky)();
  const darkStyle = createButton('Dark mode', darkMode )();
  const screamStyle = createButton('Scream mode', screamMode)();
  


  







 



  
}

main();
