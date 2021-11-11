
function edit_user() {

  const userID = document.getElementById("userID");
  const uId = userID.value;

  const name = document.getElementById("name");
  const uName = name.value;

  const age = document.getElementById("age");
  const uAge = age.value;


  const email = document.getElementById("email");
  const uEmail = email.value;

  let html

  axios.put(`${url}/user/${uId}`, {
      name: uName,
      age: uAge,
      email: uEmail
  })
    .then(function (response) {
      html = response
      document.getElementById('resposta').innerHTML = html.data;
    })
    .catch(function (error) {
      html = "<h2> Usuário não encontrado</h2>"
      document.getElementById('resposta').innerHTML = html;
    })


}
