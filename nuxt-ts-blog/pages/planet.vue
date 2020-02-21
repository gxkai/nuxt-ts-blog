<template>
  <div class="container">
    <!--太阳系系统-->
    <div class="taiyangxi">
      <div class="xingxing"></div>
      <!--太阳-->
      <div class="taiyang"></div>
      <!--水星-->
      <div class="shuixing-guidao"></div>
      <div class="shuixing-xitong">
        <div class="shuixing"></div>
      </div>
      <!--金星-->
      <div class="jinxing-guidao"></div>
      <div class="jinxing-xitong">
        <div class="jinxing"></div>
      </div>
      <!--地月系统-->
      <div class="diqiu-guidao"></div>
      <div class="diqiu-xitong">
        <!--地球-->
        <div class="diqiu"></div>
        <!--月球-->
        <div class="yueliang"></div>
      </div>
      <!--火星-->
      <div class="huoxing-guidao"></div>
      <div class="huoxing-xitong">
        <div class="huoxing"></div>
      </div>
      <!--小行星带-->
      <div class="xiaoxingxingdai"></div>
      <div class="xiaoxingxing"></div>
      <!--木星-->
      <div class="muxing-guidao"></div>
      <div class="muxing-xitong">
        <div class="muxing"></div>
      </div>
      <!--木星-->
      <div class="tuxing-guidao"></div>
      <div class="tuxing-xitong">
        <div class="tuxing"></div>
        <div class="ring"></div>
      </div>
      <!--天王星-->
      <div class="tianwangxing-guidao"></div>
      <div class="tianwangxing-xitong">
        <div class="tianwangxing"></div>
      </div>
      <!--海王星-->
      <div class="haiwangxing-guidao"></div>
      <div class="haiwangxing-xitong">
        <div class="haiwangxing"></div>
      </div>
    </div>

    <div id="optionBtn" onclick="popUp(this)">
      <svg
        t="1581348631156"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1959"
        width="32"
        height="32"
      >
        <path
          d="M1021.28261 737.254254 512.697383 228.665956 4.114203 737.254254 65.145208 798.285259 512.697383 350.727966 960.251605 798.280142Z"
          p-id="1960"
          fill="#ffffff"
        ></path>
      </svg>
    </div>

    <!--选项面板-->
    <div id="option">
      <input id="language" type="button" value="EN" onclick="changeLanguage(this)" />
      <table>
        <tr>
          <td class="zh">背景颜色</td>
          <td class="en" style="display: none">Background Color</td>
          <td id="cc">
            <div onclick="changeBgColor(this)"></div>
            <div onclick="changeBgColor(this)"></div>
            <div onclick="changeBgColor(this)"></div>
            <div onclick="changeBgColor(this)"></div>
          </td>
        </tr>
        <tr>
          <td class="zh">小行星数量</td>
          <td class="en" style="display: none">Asteroid Number</td>
          <td>
            <button onclick="RandomXiaoxingxing(0)">0</button>&nbsp;|&nbsp;<button
              onclick="RandomXiaoxingxing(1200)"
            >
              100</button
            >&nbsp;|&nbsp;<button onclick="RandomXiaoxingxing(2400)">200</button
            >&nbsp;|&nbsp;<button onclick="RandomXiaoxingxing(3600)">
              400
            </button>
          </td>
        </tr>
        <tr>
          <td class="zh">星球随机位</td>
          <td class="en" style="display: none">Random Position</td>
          <td>
            <button onclick="RandomPosition()">click</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
export default class Planet extends Vue {
  mounted() {
    /* 初始化 */
    window.onload = function() {
      this.RandomXiaoxingxing(2400)
      this.RandomXingxing(240)
    }

    window.onresize = function() {
      this.RandomXingxing(240)
    }
  }

  /* 随机生成小行星 */
  RandomXiaoxingxing(num) {
    let xiaoxingxing = ''
    for (let i = num; i >= 0; i--) {
      /* X轴坐标 */
      const j = Math.round(Math.random() * 360) - 180
      /* Y轴坐标 */
      const k = Math.round(Math.random() * 360) - 180
      /* 随机透明度 */
      const l = Math.random() * 0.5
      /* 环形判断 */
      if (j * j + k * k <= 160 * 160) {
        xiaoxingxing += j + 'px ' + k + 'px 0 -139px rgba(255,255,255,' + l + '),'
      }
    }
    /* 截掉最后多余的逗号 */
    xiaoxingxing = xiaoxingxing.substr(0, xiaoxingxing.length - 1)
    /* 添加到页面 */
    document.getElementsByClassName('xiaoxingxing')[0].style.boxShadow = xiaoxingxing
  }

  /* 随机生成背景星星 */
  RandomXingxing(num) {
    const windowHeight = document.body.clientHeight
    const windowWidth = document.body.clientWidth
    let xingxing = ''
    for (let i = num; i >= 0; i--) {
      /* X轴坐标 */
      const j = Math.round(Math.random() * windowWidth)
      /* Y轴坐标 */
      const k = Math.round(Math.random() * windowHeight)
      /* 阴影大小 */
      const n = Math.round(Math.random() * 0.52)
      /* 随机透明度 */
      const l = Math.random() * 0.5
      /* 添加阴影 */
      for (let m = 0; m < 2; m++) {
        xingxing += j + 'px ' + k + 'px 0 ' + n + 'px rgba(255,255,255,' + l + '),'
        xingxing += j + 'px ' + (windowHeight + k) + 'px 0 ' + n + 'px rgba(255,255,255,' + l + '),'
      }
    }
    /* 截掉最后多余的逗号 */
    xingxing = xingxing + xingxing.substr(0, xingxing.length - 1)
    /* 添加到页面 */
    document.getElementsByClassName('xingxing')[0].style.boxShadow = xingxing
  }

  /* 随机星球位置 */
  RandomPosition() {
    const num1 = Math.random() * 45
    const x1 = (Math.random() > 0.5 ? 1 : -1) * num1 - 4 / 2
    const y1 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(45 * 45 - num1 * num1) - 4 / 2
    const shui = document.getElementsByClassName('shuixing-xitong')[0].style
    shui.marginTop = x1 + 1 / 2 + 'px'
    shui.marginLeft = y1 + 1 / 2 + 'px'
    shui.transformOrigin = -y1 + 'px ' + -x1 + 'px'

    const num2 = Math.random() * 60
    const x2 = (Math.random() > 0.5 ? 1 : -1) * num2 - 8 / 2
    const y2 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(60 * 60 - num2 * num2) - 8 / 2
    const jin = document.getElementsByClassName('jinxing-xitong')[0].style
    jin.marginTop = x2 + 'px'
    jin.marginLeft = y2 + 'px'
    jin.transformOrigin = -y2 + 'px ' + -x2 + 'px'

    const num3 = Math.random() * 90
    const x3 = (Math.random() > 0.5 ? 1 : -1) * num3 - 16 / 2
    const y3 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(90 * 90 - num3 * num3) - 16 / 2
    const di = document.getElementsByClassName('diqiu-xitong')[0].style
    di.marginTop = x3 + 'px'
    di.marginLeft = y3 + 'px'
    di.transformOrigin = -y3 + 'px ' + -x3 + 'px'

    const num4 = Math.random() * 120
    const x4 = (Math.random() > 0.5 ? 1 : -1) * num4 - 16 / 2
    const y4 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(120 * 120 - num4 * num4) - 16 / 2
    const huo = document.getElementsByClassName('huoxing-xitong')[0].style
    huo.marginTop = x4 + 'px'
    huo.marginLeft = y4 + 'px'
    huo.transformOrigin = -y4 + 'px ' + -x4 + 'px'

    const num5 = Math.random() * 190
    const x5 = (Math.random() > 0.5 ? 1 : -1) * num5 - 40 / 2
    const y5 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(190 * 190 - num5 * num5) - 40 / 2
    const mu = document.getElementsByClassName('muxing-xitong')[0].style
    mu.marginTop = x5 + 'px'
    mu.marginLeft = y5 + 'px'
    mu.transformOrigin = -y5 + 'px ' + -x5 + 'px'

    const num6 = Math.random() * 240
    const x6 = (Math.random() > 0.5 ? 1 : -1) * num6 - 24 / 2
    const y6 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(240 * 240 - num6 * num6) - 24 / 2
    const tu = document.getElementsByClassName('tuxing-xitong')[0].style
    tu.marginTop = x6 + 'px'
    tu.marginLeft = y6 + 'px'
    tu.transformOrigin = -y6 + 'px ' + -x6 + 'px'

    const num7 = Math.random() * 290
    const x7 = (Math.random() > 0.5 ? 1 : -1) * num7 - 20 / 2
    const y7 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(290 * 290 - num7 * num7) - 20 / 2
    const tian = document.getElementsByClassName('tianwangxing-xitong')[0].style
    tian.marginTop = x7 + 'px'
    tian.marginLeft = y7 + 'px'
    tian.transformOrigin = -y7 + 'px ' + -x7 + 'px'

    const num8 = Math.random() * 340
    const x8 = (Math.random() > 0.5 ? 1 : -1) * num8 - 18 / 2
    const y8 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(340 * 340 - num8 * num8) - 18 / 2
    const hai = document.getElementsByClassName('haiwangxing-xitong')[0].style
    hai.marginTop = x8 + 'px'
    hai.marginLeft = y8 + 'px'
    hai.transformOrigin = -y8 + 'px ' + -x8 + 'px'
  }

  /* 背景颜色 */
  changeBgColor(color) {
    document.getElementsByClassName('taiyangxi')[0].style.backgroundColor = window.getComputedStyle(
      color
    ).backgroundColor
    document.getElementsByTagName('body')[0].style.backgroundColor = window.getComputedStyle(
      color
    ).backgroundColor
  }

  /* 更改语言 */
  changeLanguage(btn) {
    const zh = document.getElementsByClassName('zh')
    const en = document.getElementsByClassName('en')
    if (btn.value === 'EN') {
      btn.value = '中'
      for (let i = 0; i < zh.length; i++) {
        zh[i].style.display = 'none'
        en[i].style.display = 'table-cell'
      }
    } else {
      btn.value = 'EN'
      for (let i = 0; i < zh.length; i++) {
        zh[i].style.display = 'table-cell'
        en[i].style.display = 'none'
      }
    }
  }

  /* 弹出面板 */
  popUp(btn) {
    btn.classList.toggle('optionBtnHide')
    document.getElementById('option').classList.toggle('optionHide')
  }
}
</script>
<style scoped>
.taiyangxi {
  position: relative;
  height: 100vh;
  margin: 0 auto;
  transition: 1s linear;
}

.taiyang {
  position: absolute;
  top: 50%;
  left: 50%;
  height: calc(70px + 1px);
  width: calc(70px + 1px);
  margin-top: calc(-70px / 2);
  margin-left: calc(-70px / 2);
  background: radial-gradient(goldenrod 0%, goldenrod 64%, transparent 76%, transparent 100%);
  box-shadow: 0 0 36px #da9800;
  border-radius: 50%;
}

/*星球轨道*/
[class*='-guidao'] {
  position: absolute;
  border: 1px dashed rgba(128, 128, 128, 0.4);
  border-radius: 50%;
  top: 50%;
  left: 50%;
}

.shuixing-guidao {
  height: calc(90px - 1px);
  width: calc(90px - 1px);
  margin-top: -45px;
  margin-left: -45px;
}

.jinxing-guidao {
  height: calc(120px - 1px);
  width: calc(120px - 1px);
  margin-top: -60px;
  margin-left: -60px;
}

.diqiu-guidao {
  height: calc(180px - 1px);
  width: calc(180px - 1px);
  margin-top: -90px;
  margin-left: -90px;
}

.huoxing-guidao {
  height: calc(240px - 1px);
  width: calc(240px - 1px);
  margin-top: -120px;
  margin-left: -120px;
}

.muxing-guidao {
  height: calc(380px - 1px);
  width: calc(380px - 1px);
  margin-top: -190px;
  margin-left: -190px;
}

.tuxing-guidao {
  height: calc(480px - 1px);
  width: calc(480px - 1px);
  margin-top: -240px;
  margin-left: -240px;
}

.tianwangxing-guidao {
  height: calc(580px - 1px);
  width: calc(580px - 1px);
  margin-top: -290px;
  margin-left: -290px;
}

.haiwangxing-guidao {
  height: calc(680px - 1px);
  width: calc(680px - 1px);
  margin-top: -340px;
  margin-left: -340px;
}

/*小行星带*/
.xiaoxingxingdai,
.xiaoxingxing {
  position: absolute;
  top: 50%;
  left: 50%;
}

.xiaoxingxingdai {
  box-sizing: border-box;
  height: calc(330px - 1px);
  width: calc(330px - 1px);
  margin-top: -165px;
  margin-left: -165px;
  border-radius: 50%;
  /*background: radial-gradient(
            transparent 0%,
            transparent 60%,
            rgba(255, 255, 255, 0.01) 60%,
            rgba(255, 255, 255, 0.05) 65%,
            rgba(255, 255, 255, 0.01) 70%,
            transparent 70%
    );*/
  animation: rotate 48s infinite linear;
}

.xiaoxingxing {
  border-radius: 50%;
  width: 280px;
  height: 280px;
  margin-left: -140px;
  margin-top: -140px;
  animation: rotate 48s infinite linear;
}

/*星球系统*/
[class*='-xitong'] {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 1s;
}

.shuixing-xitong {
  height: 4px;
  width: 4px;
  margin-top: calc(-4px / 2 + 1px / 2);
  margin-left: calc(-90px / 2 - 4px / 2 + 1px / 2);
  transform-origin: calc(90px / 2 + 4px / 2) calc(4px / 2);
  animation: rotate 4.4s infinite linear;
}

.jinxing-xitong {
  height: 8px;
  width: 8px;
  margin-top: calc(-8px / 2);
  margin-left: calc(-120px / 2 - 8px / 2);
  transform-origin: calc(120px / 2 + 8px / 2) calc(8px / 2);
  animation: rotate 11.235s infinite linear;
}

.diqiu-xitong {
  height: 16px;
  width: 16px;
  margin-top: calc(-16px / 2);
  margin-left: calc(-180px / 2 - 16px / 2);
  transform-origin: calc(180px / 2 + 16px / 2) calc(16px / 2);
  animation: rotate 18.262s infinite linear;
}

.huoxing-xitong {
  height: 16px;
  width: 16px;
  margin-top: calc(-16px / 2);
  margin-left: calc(-240px / 2 - 16px / 2);
  transform-origin: calc(240px / 2 + 16px / 2) calc(16px / 2);
  animation: rotate 34.349s infinite linear;
}

.muxing-xitong {
  height: 40px;
  width: 40px;
  margin-top: calc(-40px / 2);
  margin-left: calc(-380px / 2 - 40px / 2);
  transform-origin: calc(380px / 2 + 40px / 2) calc(40px / 2);
  animation: rotate 216.6215s infinite linear;
}

.tuxing-xitong {
  height: 24px;
  width: 24px;
  margin-top: calc(-24px / 2);
  margin-left: calc(-480px / 2 - 24px / 2);
  transform-origin: calc(480px / 2 + 24px / 2) calc(24px / 2);
  animation: rotate 541.616s infinite linear;
}

.tianwangxing-xitong {
  height: 20px;
  width: 20px;
  margin-top: calc(-20px / 2);
  margin-left: calc(-580px / 2 - 20px / 2);
  transform-origin: calc(580px / 2 + 20px / 2) calc(20px / 2);
  animation: rotate 1539.95s infinite linear;
}

.haiwangxing-xitong {
  height: 18px;
  width: 18px;
  margin-top: calc(-18px / 2);
  margin-left: calc(-680px / 2 - 18px / 2);
  transform-origin: calc(680px / 2 + 18px / 2) calc(18px / 2);
  animation: rotate 3009.6s infinite linear;
}

/*星球设置*/
.shuixing {
  height: 4px;
  width: 4px;
  animation: rotate 2.9325s infinite linear;
  background: radial-gradient(deepskyblue 0%, deepskyblue 55%, transparent 70%, transparent 100%);
}

.jinxing {
  height: 8px;
  width: 8px;
  animation: rotate 12.15s infinite linear;
  background: radial-gradient(gold 0%, gold 60%, transparent 70%, transparent 100%);
}

.diqiu {
  height: 16px;
  width: 16px;
  animation: rotate 0.05s infinite linear;
  background: radial-gradient(royalblue 0%, royalblue 60%, transparent 70%, transparent 100%);
}

.yueliang {
  position: absolute;
  top: -3px;
  left: -3px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  transform-origin: 11px 11px;
  animation: rotate 1.4765s infinite linear;
  background: radial-gradient(lightgrey 0%, lightgrey 60%, transparent 70%, transparent 100%);
}

.huoxing {
  height: 16px;
  width: 16px;
  animation: rotate 0.0506s infinite linear;
  background: radial-gradient(orangered 0%, orangered 50%, transparent 70%, transparent 100%);
}

.muxing {
  height: 40px;
  width: 40px;
  animation: rotate 0.021s infinite linear;
  background: radial-gradient(
    #2a2a2a 0%,
    #79694f 20%,
    #7a7467 30%,
    #7f6244 35%,
    #c3d1d1 37%,
    #918e85 40%,
    #585858 54%,
    #a6a6a6 58%,
    transparent 65%,
    transparent 70%
  );
}

.tuxing {
  position: absolute;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  animation: rotate 0.021s infinite linear;
  background: radial-gradient(
    palegoldenrod 0%,
    tan 10%,
    burlywood 30%,
    palegoldenrod 60%,
    darkgray 100%
  );
}

.ring {
  position: absolute;
  top: calc((24px - 48px) / 2);
  left: calc((24px - 48px) / 2);
  width: 48px;
  height: 48px;
  animation: rotate 0.021s infinite linear;
  background: radial-gradient(transparent 35%, #bf9b4f 52%, #648d90 58%, transparent 70%);
}

.tianwangxing {
  height: 20px;
  width: 20px;
  animation: rotate 0.0356s infinite linear;
  background: radial-gradient(lightblue 0%, lightblue 65%, transparent 70%, transparent 100%);
}

.haiwangxing {
  height: 18px;
  width: 18px;
  animation: rotate 0.0333s infinite linear;
  background: radial-gradient(steelblue 0%, steelblue 65%, transparent 70%, transparent 100%);
}

/*使旋转*/
@keyframes rotate {
  100% {
    transform: rotate(-360deg);
  }
}

/*操作面板弹出按钮*/
#optionBtn {
  width: 72px;
  height: 36px;
  position: fixed;
  bottom: 10px;
  left: calc(100vw / 2 - 72px / 2);
  line-height: 36px;
  text-align: center;
  color: white;
  transition: 0.5s linear;
  animation: opacity 3.6s ease-in-out infinite;
}

.optionBtnHide {
  transform: rotateX(-180deg);
}

@keyframes opacity {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.05;
  }
  100% {
    opacity: 0.8;
  }
}

/*选项面板*/
#option {
  box-sizing: border-box;
  position: fixed;
  bottom: -200px;
  left: calc(100vw / 2 - 400px / 2);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px;
  height: 200px;
  width: 400px;
  max-width: 100vw;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 1);
  transition: 1s ease-in-out;
}

.optionHide {
  bottom: 50px !important;
}

#option table {
  width: 100%;
  height: 100%;
}

#option table td {
  height: 30px;
  text-align: center;
}

#option table td input {
  width: 50%;
  height: 30px;
  text-align: center;
}

#option table td div {
  display: inline-block;
  width: 24px;
  height: 24px;
}

#option button {
  background-color: transparent;
  border: transparent;
  color: rgba(255, 255, 255, 0.5);
  padding-left: 2px;
  padding-right: 2px;
}

#option button:hover {
  color: orangered;
  cursor: pointer;
}

/*颜色选取*/
#cc div:hover {
  box-shadow: 0 0 3px deepskyblue;
  cursor: pointer;
}

#cc div:nth-child(1) {
  background-color: rgb(34, 39, 56);
}

#cc div:nth-child(2) {
  background-color: rgb(11, 18, 51);
}

#cc div:nth-child(3) {
  background-color: rgb(30, 54, 56);
}

#cc div:nth-child(4) {
  background-color: rgb(43, 43, 43);
}

/*语言切换*/
#language {
  position: absolute;
  top: 5px;
  right: 10px;
  border: transparent;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0);
}

/*背景星星*/
.xingxing {
  height: 1px;
  width: 1px;
  background-color: transparent;
  z-index: 1000;
  animation: toTop 36s infinite linear;
}

@keyframes toTop {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100vh);
  }
}
</style>
