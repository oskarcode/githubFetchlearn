const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = 'Iv1.7485dfdffcd926ad'
const client_secret = '23a23dd7ae5c7bbd90f9ca2205e16e1cf2713828'


const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)
    const data = await api_call.json()
    return { data }

}

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res)
        nameContainer.innerHTML = `name: <span class = main__profile-value>${res.data.name}`
        unContainer.innerHTML = `username: <span class = main__profile-value>${res.data.login}`
        reposContainer.innerHTML = `repo: <span class = main__profile-value>${res.data.public_repos}`
        urlContainer.innerHTML = `URL: <span class = main__profile-value>${res.data.html_url}`
    })

}

searchButton.addEventListener('click', () => {
    showData()
})


