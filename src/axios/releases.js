import axios from 'axios'

const releases = {
  getLatest
}

const instance = axios.create({
  baseURL: 'https://api.github.com/repos/Muska-Ami/NyaLCF/releases'
})

function getLatest() {
  return new Promise((resolve, reject) => {
    instance
      .get('/latest')
      .then((response) => {
        const res = response.data
        resolve({
          status: true,
          message: 'OK',
          github_url: res.html_surl,
          tag_name: res.tag_name,
          branch: res.target_commitish,
          author: {
            name: res.author.login,
            avatar_url: res.author.avatar_url,
            github_url: res.author.html_url
          },
          body: res.body,
          assets: res.assets
        })
      })
      .catch((e) => {
        reject({
          status: false,
          message: e
        })
      })
  })
}

export default releases
