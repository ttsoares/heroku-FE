
function get_one_user() {

  const userID = document.getElementById("userID");
  const uID = userID.value;

  let html

  axios.get(`${url}/users/${uID}`)
    .then(function (response) {
      html = response

      document.getElementById('resposta').innerHTML = html.data;
    })
    .catch(function (error) {
      html = "<h2> Usuário não encontrado</h2>"
      document.getElementById('resposta').innerHTML = html;
    })


}
