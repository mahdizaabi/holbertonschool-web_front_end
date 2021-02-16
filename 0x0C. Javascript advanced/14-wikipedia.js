const createElement = (data) => {
  const para = document.createElement("p");
  para.innerText = data;
  document.body.appendChild(para);
};

const queryWikipedia = (callback) => {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(request.responseText);
      console.log(request)
    }
  };
  request.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );
  request.send()
  
};



queryWikipedia((e) => createElement(e));
