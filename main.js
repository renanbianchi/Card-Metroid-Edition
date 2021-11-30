const linksSocialMedia = {
  github: 'extrems',
  youtube: '',
  instagram: '',
  facebook: '',
  twitter: ''
}
//function changeSocialMedialinks() {
//for (let li of socialLinks.children) {
//const social = li.getAttribute('class')
//li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

//alert(li.children[0].href)
//}
// }
//changeSocialMedialinks()

function getgithubprofileinfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      username.textContent = data.name
      userbio.textContent = data.bio
      userimage.src = data.avatar_url
      userlogin.id = data.login
      userlink.href = data.html_url
    })
}
getgithubprofileinfos()
