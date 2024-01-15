import axios from 'axios'

const releases = {
  getRelease,
  getList
}

const instance = axios.create({
  baseURL: 'https://api-gh.1l1.icu/repos/Muska-Ami/NyaLCF/releases'
})

/*function getLatest() {
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
          assets: res.assets,
          code: {
            assets: {
              0: {
                name: "tar",
                url: res.tarball_url
              },
              1: {
                name: "zip",
                url: res.zipball_url
              }
            },
            pub_time: res.published_at
          }
        })
      })
      .catch((e) => {
        reject({
          status: false,
          message: e
        })
      })
  })
}*/

function getList() {
  return new Promise((resolve, reject) => {
    instance
      .get()
      .then((response) => {
        const res = response.data
        const list = []
        for (let item of res) {
          list.push([item.tag_name, item.id])
        }
        resolve({
          status: true,
          message: 'OK',
          list
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

function getRelease(id) {
  return new Promise((resolve, reject) => {
    instance
      .get(id)
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
          assets: res.assets,
          code: {
            assets: {
              0: {
                name: "tar",
                url: res.tarball_url
              },
              1: {
                name: "zip",
                url: res.zipball_url
              }
            },
            pub_time: res.published_at
          }
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
