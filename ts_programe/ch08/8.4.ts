const getUserId = (id: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 模拟异步操作，可能失败也可能成功
    const random = Math.random()
    if (random < 0.5) {
      reject(new Error('user_id not found'))
    } else {
      setTimeout(() => {
        resolve('user_0' + id)
      }, 100)
    }
  })
}

const getLocation = (username: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 模拟异步操作，可能失败也可能成功
    const random = Math.random()
    if (random < 0.5) {
      reject(new Error('location not found'))
      return
    }
    setTimeout(() => {
      resolve('location_' + username)
    }, 100)
  })
}

function getUserInfo() {
  getUserId(1)
    .then((userName) => getLocation(userName))
    .then((location) => {
      console.info('get location:', location)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      console.log('finally')
    })
}
// getUserInfo()

async function getUserInfoAsync() {
  try {
    const userName = await getUserId(1)
    const location = await getLocation(userName)
    console.info('async get location:', location)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('finally')
  }
}
getUserInfoAsync()
