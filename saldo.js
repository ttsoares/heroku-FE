
async function saldo() {

  const userID = document.getElementById("userID");
  const uID = userID.value;

  let html
  const dom = document.getElementById('resposta')

  await axios.get(`${url}/user/${uID}`)
    .then(function (response) {
      html = response
      dom.innerHTML = html.data;
    })
    .catch(function (error) {
      dom.innerHTML = "<h2> Usuário não encontrado</h2>";
    })
}
