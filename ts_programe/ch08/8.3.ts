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
type Executor<T, E extends Error> = (
  resolve: (resolve: T) => void,
  reject: (error: E) => void
) => void

class MyPromise<T, E extends Error> {
  constructor(f: Executor<T, E>) {}
  then<U, F extends Error>(g: (result: T) => MyPromise<U, F>): MyPromise<U, F> {}
  catch<U, F extends Error>(g: (error: E) => MyPromise<U, F>): MyPromise<U, F> {}
}
