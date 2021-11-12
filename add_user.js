
async function add_user() {

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
  const dom = document.getElementById('resposta')

  await axios.post(`${url}/users`, {
      name: uName,
      age: uAge,
      cpf: uCpf,
      email: uEmail
  })
    .then(function (response) {
      html = response
      dom.innerHTML = html.data;
    })
    .catch(function (error) {
      console.log(error);
      dom.innerHTML = "<h1>Ocorreu algum erro de comunicação com o servidor</h1>"
    })


}
