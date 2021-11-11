
function get_user_trans() {

  const userID = document.getElementById("userID");
  const uID = userID.value;

  const transID = document.getElementById("transID");
  const tID = transID.value;

  let html

  axios.get(`${url}/user/${uID}/transaction/${tID}`)
    .then(function (response) {
      html = response
      document.getElementById('resposta').innerHTML = html.data;
    })
    .catch(function (error) {
      html = "<h2> Usuário ou transação não encontrado</h2>"
      document.getElementById('resposta').innerHTML = html;
      console.log(error);
    })


}
