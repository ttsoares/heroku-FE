
(function get_all_users() {
  let html
  axios.get(`${url}/users`)
    .then(function (response) {
      html = response
  
      document.getElementById('resposta').innerHTML = html.data
    })
    .catch(function (error) {
      console.log(error);
    })
})()
