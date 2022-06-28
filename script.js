function testingApi() {
  const url = "https://cors-anywhere.herokuapp.com/travens-api.my.id/";

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url);
  xmlHttp.send(null);
  console.log('Tested!')
  return xmlHttp.responseText;
}

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
