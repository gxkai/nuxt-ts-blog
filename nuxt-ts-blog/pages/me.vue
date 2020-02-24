<template>
  <div class="container">
    <div class="md:w-1/2 mx-auto">
      <div class="flex">
        <div class="flex-1">
          <div class="text-bold text-2xl py-2">
            {{ account.name }}
          </div>
          <div class="w-full flex items-center font-thin py-2">
            <div class="w-1/5">
              {{ account.age }}
            </div>
            <div class="w-1/5">
              {{ account.sex }}
            </div>
            <div class="w-1/5">
              {{ account.background }}
            </div>
            <div class="w-2/5">
              {{ account.years }}
            </div>
          </div>
          <div class="w-full flex items-center font-thin py-2">
            <div class="w-3/5">
              {{ account.tel }}
            </div>
          </div>
        </div>
        <div>
          <img src="/me.png" class="w-32" />
        </div>
      </div>
      <div class="text-xl font-bold">个人优势</div>
      <ul class="p-0 list-inside">
        <li v-for="(item, index) in advantageList" :key="index" class="py-2">
          {{ item }}
        </li>
      </ul>
      <div class="text-xl font-bold">技术标签</div>
      <div class="flex flex-wrap py-2">
        <span
          v-for="(item, index) in rgbArray"
          :key="index"
          :style="item.style"
          class="m-2 p-1 min-w-20 text-center"
          >{{ tagList[index] }}</span
        >
      </div>
      <div class="text-xl font-bold mt-4">期望职位</div>
      <div class="py-2">{{ jobDes }}</div>
      <div class="text-xl font-bold mt-4">项目经验</div>
      <ul class="p-0 list-inside">
        <li v-for="(item, index) in productList" :key="index" class="py-2">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
interface Account {
  name: string
  sex: string
  age: number
  background: string
  years: string
  tel: number
}
@Component
export default class Me extends Vue {
  account: Account = {
    name: '顾旭凯',
    sex: '男',
    age: 27,
    background: '本科',
    years: '5年经验',
    tel: 18896781024,
  }

  advantageList: string[] = [
    '对新技术有着🔥一般的热情。目标是打台球中最会编程，编程中最会打台球的。',
    '代码洁癖',
    '爱掘金，爱github，爱stackflow',
    '昆山土著居民',
  ]

  productList: string[] = [
    '基于nest、kafka、es的访客系统',
    '基于vue、laravel、mysql的移动、pc、小程序可视化建站',
    '基于flutter、php的外贸易混合app',
    '基于vue、koa、socketio、mongodb的智能工厂制造执行调度系统',
    '基于vue、nuxt、springCloud、mysql的昆山药事服务平台',
    '基于jfinal、mysql的公众号鲜花平台',
  ]

  jobDes: string = '移动web前端  苏州  15-18K  互联网·计算机软件·移动互联网'

  tagList = ['vue', 'typescript', 'koa', 'express', 'java', '小程序', 'go', 'linux', 'shell']
  hslArray = this.getHslArray(this.tagList)

  get rgbArray() {
    if (!this.hslArray.length) return []

    const rgbArray = this.hslArray.map(item => {
      return this.hslToRgb.apply(this, item)
    })

    return rgbArray.map(item => {
      return {
        value: item,
        style: { background: 'rgb(' + item.toString() + ')' },
      }
    })
  }

  /**
   * HSL颜色值转换为RGB
   * H，S，L 设定在 [0, 1] 之间
   * R，G，B 返回在 [0, 255] 之间
   *
   * @param H 色相
   * @param S 饱和度
   * @param L 亮度
   * @returns Array RGB色值
   */
  hslToRgb(H, S, L) {
    let R, G, B
    if (+S === 0) {
      R = G = B = L // 饱和度为0 为灰色
    } else {
      const hue2Rgb = function(p, q, t) {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }
      const Q = L < 0.5 ? L * (1 + S) : L + S - L * S
      const P = 2 * L - Q
      R = hue2Rgb(P, Q, H + 1 / 3)
      G = hue2Rgb(P, Q, H)
      B = hue2Rgb(P, Q, H - 1 / 3)
    }
    return [Math.round(R * 255), Math.round(G * 255), Math.round(B * 255)]
  }

  // 获取随机HSL
  randomHsl() {
    const H = Math.random()
    const S = Math.random()
    const L = Math.random()
    return [H, S, L]
  }

  // 获取HSL数组
  getHslArray(tagList) {
    const HSL: any[] = []
    const hslLength = tagList.length // 获取数量
    for (let i = 0; i < hslLength; i++) {
      let ret = this.randomHsl()

      // 颜色相邻颜色差异须大于 0.25
      if (i > 0 && Math.abs(ret[0] - HSL[i - 1][0]) < 0.25) {
        i--
        continue // 重新获取随机色
      }
      ret[1] = 0.7 + ret[1] * 0.2 // [0.7 - 0.9] 排除过灰颜色
      ret[2] = 0.4 + ret[2] * 0.4 // [0.4 - 0.8] 排除过亮过暗色

      // 数据转化到小数点后两位
      ret = ret.map(function(item) {
        return parseFloat(item.toFixed(2))
      })

      HSL.push(ret)
    }
    return HSL
  }
}
</script>

<style scoped></style>
