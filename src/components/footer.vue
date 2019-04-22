
<template>
  <div class="footer"> 学习养成记 ©2018 Created by lengdaner <a href="feiliu.site" target="_blank" style="color:#ccc;font-size:10px;line-height:10px;">管理员</a></div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
<style scoped>
.footer {
  text-align: center;
  padding: 20px;
  font-weight: bold;
}
</style>

