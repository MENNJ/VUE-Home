<script setup>
import {StarportCarrier} from 'vue-starport'


</script>

<template>

  <StarportCarrier>
  <div id="app dark:bg-blue-100" >
    <Nva_bar/>
    <router-view  v-if="!$route.meta.keepAlive" ></router-view>
  </div>
</StarportCarrier>
</template>



<script>
import Nva_bar from './views/Nva_bar.vue';
export default {

  // 数据对象，包含组件的响应式数据
  data() {
    return {
      // 初始主题，'light' 表示亮色主题
      currentTheme: 'light',
      isDark: false,
    };
  },
  components:{
    Nva_bar
  },
}


</script>
