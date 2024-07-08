<template>
  <div class="flex flex-col items-center w-lvw h-lvh dark:bg-blue-100">
    <div class="flex justify-between w-10/12 h-12 py-2.5">
      <div class="">
        <p class="text-lg font-semibold tracking-widest">{{ route.query.title }}</p>
      </div>
      <div class="h-6">
        <p class="cursor-pointer tracking-wide " @click="router.push('Home')">
          <svg class="" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
              <path d="M16 5V4C16 3.44772 15.5523 3 15 3H6C5.44771 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H15C15.5523 21 16 20.5523 16 20V19" stroke-dasharray="46" stroke-dashoffset="46">
                <animate attributeName="stroke-dashoffset" dur="0.5s" fill="freeze" values="46;0" />
              </path>
              <path d="M10 12h11" opacity="0" stroke-dasharray="12" stroke-dashoffset="12">
                <set attributeName="opacity" begin="0.6s" to="1" />
                <animate attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" fill="freeze" values="12;0" />
              </path>
              <path d="M21 12l-3.5 -3.5M21 12l-3.5 3.5" opacity="0" stroke-dasharray="6" stroke-dashoffset="6">
                <set attributeName="opacity" begin="0.8s" to="1" />
                <animate attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" fill="freeze" values="6;0" />
              </path>
            </g>
          </svg>
        </p>
      </div>
    </div>
    <div class="w-lvw h-12 border-solid border border-y-gray-300"></div>


    <div class="flex h-full w-full justify-center content-around flex-wrap">
        <div class="flex w-full h-[40%] justify-evenly items-center rounded-2xl">

<!--            <svg class="text-gray-500 dark:text-slate-900" height="56" viewBox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">-->
<!--              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">-->
<!--                <path d="M21 12H3.5" stroke-dasharray="20" stroke-dashoffset="20">-->
<!--                  <animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="20;0" />-->
<!--                </path>-->
<!--                <path d="M3 12L10 19M3 12L10 5" stroke-dasharray="12" stroke-dashoffset="12">-->
<!--                  <animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" values="12;0" />-->
<!--                </path>-->
<!--              </g>-->
<!--            </svg>-->

          <div class="swiper " style="z-index:0;padding: 60px">
            <div class="swiper-wrapper justify-around " :style="swiperWrapperStyle">
              <div class="swiper-slide  dark:bg-slate-800 justify-center bg-gray-100" :style="slideStyles[0]">
                <Starport class="p-[60px]"  :port="String(route.query.title)" style="width: 400px; height: 400px;">
                  <img :src="route.query.img" alt="Gallery Image" />
                </Starport>
              </div>
              <div class="swiper-slide  dark:bg-slate-800 justify-center bg-gray-100" :style="slideStyles[1]">
                <div style="width: 400px; height: 400px;padding: 60px">
                <img  src="../assets/Air_Max.png">
              </div>
              </div>
            </div>
          </div>

<!--            <svg class="rotate-180 sm:d text-gray-500 dark:text-slate-900" height="56" viewBox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">-->
<!--              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">-->
<!--                <path d="M21 12H3.5" stroke-dasharray="20" stroke-dashoffset="20">-->
<!--                  <animate attributeName="stroke-dashoffset" dur="0.3s" fill="freeze" values="20;0" />-->
<!--                </path>-->
<!--                <path d="M3 12L10 19M3 12L10 5" stroke-dasharray="12" stroke-dashoffset="12">-->
<!--                  <animate attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" fill="freeze" values="12;0" />-->
<!--                </path>-->
<!--              </g>-->
<!--            </svg>-->
        </div>


        <div class="flex rounded-2xl w-64 items-center justify-center">
          <button class="h-10 cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none">
            Buy
          </button>
        </div>

    </div>

  </div>
</template>
<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default {
  name: 'MySwiper',
  data() {
    return {
      swiperWrapperStyle: {
        transitionDuration: '0ms',
        transform: 'translate3d(0px, 0px, 0px)',
        transitionDelay: '0ms',
      },
      slideStyles: [
        {
          borderRadius: '40px',
          display: 'flex'
        },
        {
          borderRadius: '40px',
          display: 'flex'
        }
      ]
    };
  },
  mounted() {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20
    });
  }
};
</script>
<script setup>
import { Starport } from 'vue-starport';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>
<style scoped>
@import 'src/css/swiper-bundle.min.css';

.swiper-wrapper {
  display: flex;
  transition-duration: 0ms;
  transform: translate3d(0px, 0px, 0px);
  transition-delay: 0ms;
}

.swiper-slide {
  border-radius: 40px;
  height: auto;
}
</style>
