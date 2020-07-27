inputElement = document.querySelector('input[name="user"]')
buttonElement = document.querySelector('button')
listElement = document.querySelector('#list')

buttonElement.onclick = function () {
    user = inputElement.value

    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {
            listElement.innerHTML = ''

            if (response.data.length === 0) {
                alert('Usuário não possui repositório')
            }

            for (repo of response.data) {
                var itemList = document.createElement('li')
                var listText = document.createTextNode(repo.name)

                itemList.appendChild(listText)
                listElement.appendChild(itemList)
            }

        })
        .catch(function (reject) {
            listElement.innerHTML = ''
            alert('Usuário não encontrado')
        })
}