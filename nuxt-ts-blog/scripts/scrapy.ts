// import * as cheerio from 'cheerio'
// import { remoteGet } from './api'
// start().then(() => console.log('爬取成功'))
// async function start() {
//   const res = await remoteGet('https://leetcode-cn.com/problemset/all/')
//   // 加载网页
//   const $ = cheerio.load(String(res))
//   // 获取网页中的数据，分别写到两个数组里面
//   $('.reactable-data')
//     .find('tr')
//     .each((index, element) => {
//       console.log(
//         $(element)
//           .find('td')
//           .eq(2)
//           .text()
//       )
//     })
// }
