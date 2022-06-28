console.log("Hello World!");

function testingApi() {
  const baseUrl = 'https://travens-api.my.id/'
  fetch(baseUrl, {
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin':'*'
      }
  });
  console.log("--- Testing ---");
}
