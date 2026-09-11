import fs from 'fs'

function appendAndReadPromise(path: string, data: string): Promise<string> {
  return appendPromise(path, data)
    .then(() => readPromise(path))
    .catch((error) => Promise.reject(error))
}

const appendPromise = (path: string, data: string): Promise<boolean> => {
  return Promise.resolve(true)
}

const readPromise = (path: string): Promise<string> => {
  return Promise.resolve('data')
}

// TODO. 实现自定义的Promise
type Executor = {
  resolve: Function
  reject: Function
}
class MyPromise {
  constructor(f: Executor) {}
}
