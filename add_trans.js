
async function add_trans() {

  const userID = document.getElementById("userID");
  const uId = userID.value;

  const title = document.getElementById("title");
  const uTitle = title.value;

  const value = document.getElementById("value");
  const uValue = value.value;

  const type = document.getElementById("type");
  const uType = type.value;

  let html
  const dom = document.getElementById('resposta')

  await axios.post(`${url}/user/${uId}/transactions`, {
      title: uTitle,
      value: uValue,
      type: uType
  })
    .then(function (response) {
      html = response
      console.log(response);
      dom.innerHTML = html.data;
    })
    .catch(function (error) {
      dom.innerHTML = "<h2> Usuário não encontrado</h2>";
    })


}
