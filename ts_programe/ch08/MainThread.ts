let worker = new Worker('./WorkerScript.ts')
worker.postMessage('hello worker')
onmessage = (e) => {
  console.log(e.data)
}