function testingApi() {
  console.log("Hello World!");
  console.log("--- Testing ---");
  loadFile();
}

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};
