let givenProfile = ""
let profileName = ""
let profileId = ""
let profileLink = ""
let profileRepos = ""

let fetchProfile = async () => {
    try {
        let fetchedData
        if (profileName != "") {
            await fetch(`https://api.github.com/users/${profileName}`)
                .then((response) => response.json())
                .then((data) => (fetchedData = data))
            profileName = fetchedData.login
            profileId = fetchedData.profileId
            profileLink = fetchedData.profileLink
            profileRepos = fetchedData.public_repos
            renderPage()
        }
    } catch (error) {
        console.error
    } 
}

function renderPage() {
    document.getElementById("gitdata").innerHTML = `
    
    `
}