
function add_trans() {

  const userID = document.getElementById("userID");
  const uId = userID.value;

  const title = document.getElementById("title");
  const uTitle = title.value;

  const value = document.getElementById("value");
  const uValue = value.value;

  const type = document.getElementById("type");
  const uType = type.value;

  let html

  axios.post(`${url}/user/${uId}/transactions`, {
      title: uTitle,
      value: uValue,
      type: uType
  })
    .then(function (response) {
      html = response
      console.log(response);
      document.getElementById('resposta').innerHTML = html.data;
    })
    .catch(function (error) {
      html = "<h2> Usuário não encontrado</h2>"
      document.getElementById('resposta').innerHTML = html;
    })


}
