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
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const bodyx = document.querySelector("body");
    bodyx.innerText = "holberton";
    const btnSpooky = document.createElement("button");
    btnSpooky.setAttribute("id", "spooky");
    btnSpooky.innerText = "spooky";
    document.body.appendChild(btnSpooky);
    btnSpooky.addEventListener("click", (e) => {
      spooky();
    });
  
  
    let darkStyle = changeMode(12, "bold", "capitalize", "black", "white");
    const test = createButton('darkx', darkStyle)
    test()
  
  
  
    
  
  
  
    
  }
  
  main();
  