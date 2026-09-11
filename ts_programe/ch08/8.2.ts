import fs from 'fs'

fs.readFile('./wifi_log', { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    console.error('error reading!', error)
    return
  }
  console.info('success reading!\n', data)
})

// 采用并发方式把数据写入该访问日志
fs.appendFile(
  './wifi_log',
  `\n${new Date().toISOString()} New log entry`,
  (error) => {
    if (error) {
      console.error('error writing!', error)
    }
  }
)
