
async function edit_trans() {

  const userID = document.getElementById("userID");
  const uId = userID.value;

  const transID = document.getElementById("transID");
  const tID = transID.value;

  const title = document.getElementById("title");
  const uTitle = title.value;

  const value = document.getElementById("value");
  const uValue = value.value;

  const type = document.getElementById("type");
  const uType = type.value;

  let html
  const dom = document.getElementById('resposta')

  await axios.put(`${url}/user/${uId}/transaction/${tID}`, {
      title: uTitle,
      value: uValue,
      type: uType
  })
    .then(function (response) {
      html = response
      dom.innerHTML = html.data;
    })
    .catch(function (error) {
      dom.innerHTML = "<h2> Usuário ou transação não encontrado</h2><br><h2>Ou transação invalida</h2>";
    })
}
