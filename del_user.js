
async function del_user() {

  const userID = document.getElementById("userID");
  const uID = userID.value;

  let html
  const dom = document.getElementById('resposta')

  await axios.delete(`${url}/user/${uID}`)
    .then(function (response) {
      html = response
      document.getElementById('resposta').innerHTML = html.data;
    })
    .catch(function (error) {
      dom.innerHTML = "<h2> Usuário não encontrado</h2>";
    })
}
