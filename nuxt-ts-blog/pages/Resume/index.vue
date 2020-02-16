<template>
  <div class="container">
    <hr/>
    <section class="person-info">
      <div class="col-sm-8 blog-main">
        <h4>
          <span class="info-title">顾旭凯</span>
          <span class="label label-success">全栈工程师</span>
          <span class="label label-success">四年工作经验</span>
          <span class="label label-info">南京信息工程大学</span>
        </h4>
        <div>
          <span class="info-title">现居:</span> 江苏昆山
          <br/>
          <span class="info-title">公司:</span> 祥云平台
          <br/>
          <span class="info-title">手机:</span> 18896781024
          <br/>
          <span class="info-title">技术栈:</span>
            <span class="label label-default">Vue</span>
            <span class="label label-default">Flutter</span>
            <span class="label label-default">Node</span>
            <span class="label label-default">JAVA</span>
            <span class="label label-default">GO</span>
          <br/>
          <span class="info-title">GitHub:</span> <a href="https://github.com/gxkai">gxkai</a>
          <br/>
          <span class="info-title">意向:</span> 全栈工程师 15-18K
        </div>
      </div>
      <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
        <div class="sidebar-module">
          <img src="https://avatars1.githubusercontent.com/u/16274199?s=460&v=4" class="avatar" />
          <p>写写代码，看看比赛<br/>永远年轻，永远热泪盈眶</p>
        </div>
      </div>
    </section>
    <hr/>
    <section>
      <h4>工作经历</h4>
      <div class="work-item"></div>
    </section>
    <hr/>
    <section>
      <h4>项目</h4>
      <div></div>
    </section>
    <hr/>
    <section>
      <h4>个人简介</h4>
      <div></div>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {}
})
export default class Resume extends Vue {
  mounted () { }
}
</script>
<style>
.resume-container{
  margin: 30px 0;
}
.info-title{
  display: inline-block;
  text-align: right;
  margin-right: 8px;
  width: 60px;
}
.person-info{
  overflow: hidden;
  height: auto;
  width: 100%;
}
</style>
