
(async function get_all_users() {
  let html
  await axios.get(`${url}/users`)
    .then(function (response) {

      html = response
      const dom = document.getElementById('resposta')

      dom.innerHTML = html.data
    })
    .catch(function (error) {
      dom.innerHTML = "<h1>Ocorreu algum erro no servidor</h1>"
    })
})()
