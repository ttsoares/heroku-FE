
async function del_user_trans() {

  const userID = document.getElementById("userID");
  const uID = userID.value;

  const transID = document.getElementById("transID");
  const tID = transID.value;

  let html
  const dom = document.getElementById('resposta')

  await axios.delete(`${url}/user/${uID}/transaction/${tID}`)
    .then(function (response) {
      html = response
      dom.innerHTML = html.data;
    })
    .catch(function (error) {
      dom.innerHTML = "<h2> Usuário ou transação não encontrado</h2>";
    })


}
