
function add_user() {

  const name = document.getElementById("name");
  const uName = name.value;

  const age = document.getElementById("age");
  const uAge = age.value;

  const cpf = document.getElementById("cpf");
  const uCpf = cpf.value;

  const email = document.getElementById("email");
  const uEmail = email.value;

  console.log(uName, uAge, uCpf, uEmail)
  console.log(url)

  let html

  axios.post(`${url}/users`, {
      name: uName,
      age: uAge,
      cpf: uCpf,
      email: uEmail
  })
    .then(function (response) {
      html = response
      document.getElementById('resposta').innerHTML = html.data;
    })
    .catch(function (error) {
      console.log(error);
    })


}
