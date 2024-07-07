<template>
<Nva_bar/>
  <div ref="photos" class="photos dark:bg-blue-100" >
    <div ref="photos" class="photos_line" v-for="(line, index) in lines" :key="index">
      <div ref="photos_line_photo" class="photos_line_photo bg-white dark:bg-slate-800 ring-1 ring-slate-900/5
        shadow-xl" v-for="(photo, photoIndex) in line" :key="photoIndex">
        <Starport :port="String(photo.title)" style="width:100%; height:70%;">
        <img :src="photo.imgSrc" />
         </Starport>

        <router-link  :to="{
          path:'home2',
          query:{
            img:photo.imgSrc,
            title:photo.title
          }}"
            type="button"
            class="bg-[#e8e8e8] text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group dark:bg-black dark:text-white"
        >
          <div
              class="bg-green-400 max-w-full rounded-xl h-12 w-1/4  absolute left-1 top-1 group-hover:w-[184px] z-10 duration-500 "
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
          </div>
          <p class="mt-3.5 ml-4 dark:text-white">Go Back</p>
        </router-link>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script setup>

  import { Starport } from "vue-starport"
</script>


<script >
import { gsap } from 'gsap';
import img from 'src/public/watch.png'
import img_1 from 'src/public/Air_Max.png'
import img_2 from  'src/public/watch_9.png'
export default {
  name: 'home',

  data() {
   return {
      lines: [
        [
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 1' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Air_Max' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch 9' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 4' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 5' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 6' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 7' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 8' },
        ],
        [
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 9' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 10' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 11' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 12' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 13' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 14' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 15' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 16' },
        ],
        [
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 17' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 18' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 19' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 20' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 21' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 22' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 23' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 24' },
        ],
        [
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 25' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 26' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 27' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 28' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 29' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 30' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 31' },
          { imgSrc: "require('@/public/Air_Max.png')", title: 'Apple Watch Ultra 32' },
        ]
      ],
    };
  },
  mounted(){
    let imgs = this.$refs.photos_line_photo;
    let Sheet;
    console.log(imgs);
    console.log(this);

    const photobox = {
      container : this.$refs.photos,
      img_data: [],
      container_width: 0,//容器的宽度
      container_height: 0,//容器的高度
      photo_width: 0,//图片的宽度
      photo_height: 0,//图片的高度
      if_movable: false,//如果活动
      mouse_x: 0,//鼠标x
      mouse_y: 0,//鼠标y
      standard_width: 1440,//标准宽度
      scale_nums: 1,
      init() {
        this.resize();
        window.addEventListener("resize", () => {
          this.resize();
        });
        this.container.addEventListener("mousedown", () => {
          this.if_movable = true;
          this.mouse_x = event.clientX;
          this.mouse_y = event.clientY;
        });
        this.container.addEventListener("mouseup", () => {
          this.if_movable = false;
        });

        this.container.addEventListener("mouseleave", () => {
          this.if_movable = false;
        });

        this.container.addEventListener("mousemove", () => {
          this.move(event.clientX, event.clientY);
        });
      },
      resize() {
        this.container_width = this.container.offsetWidth;
        this.container_height = this.container.offsetHeight;
        this.photo_width = imgs[0].offsetWidth;
        this.photo_height = imgs[0].offsetHeight;
        this.scale_nums = document.body.offsetWidth / this.standard_width;
        this.container.style.transform = `scale(${this.scale_nums})`;
        gsap.to(imgs, {
          transform: `translate(0,0)`, duration: 0, ease: 'power4.out'
        });
        this.img_data = [];

        imgs.forEach(img => {
          this.img_data.push({
            node: img, x: img.offsetLeft, y: img.offsetTop, mov_x: 0, mov_y: 0, ani: 0
          });
        });
      },
      move(x, y) {
        if (!this.if_movable) return 0;
        let distance_x = (x - this.mouse_x) / this.scale_nums;
        let distance_y = (y - this.mouse_y) / this.scale_nums;
        this.img_data.forEach((img) => {
          let duration = 1;
          img.mov_x += distance_x;
          if (img.x + img.mov_x > this.container_width) {
            img.mov_x -= this.container_width;
            duration = 0;
          }
          if (img.x + img.mov_x < -this.photo_width) {
            img.mov_x += this.container_width;
            duration = 0;
          }
          img.mov_y += distance_y;
          if (img.y + img.mov_y > this.container_height) {
            img.mov_y -= this.container_height;
            duration = 0;
          }
          if (img.y + img.mov_y < -this.photo_height) {
            img.mov_y += this.container_height;
            duration = 0;
          }
          if (img.ani) img.ani.kill();
          img.ani = gsap.to(img.node, {
            transform: `translate(${img.mov_x}px,${img.mov_y}px)`, duration: duration, ease: 'power4.out'
          });
        });
        this.mouse_x = x;
        this.mouse_y = y;
      }
    };
    photobox.init();
  },
};
</script>
<style>

* {
  padding: 0;
  margin: 0;
}

img {
  width: 80%;
  height:  auto;
  pointer-events: none;
  user-select: none;
  z-index: 99999;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

body {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}



/* homecss */
.photos {
  position: absolute;
  flex-direction: column;
  overflow: hidden;
}

.photos_line {
  font-size: 1px;
  height: 342em;
  margin-bottom: 48em;
  flex-shrink: 0;
}


.photos_line_photo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1px;
  width: 234em;
  height: 100%;
  margin-right: 36em;
  border-radius: 15em;
  overflow: hidden;
  flex-shrink: 0;
}

.photos_line_photo img {
  z-index: 999;
  background-repeat: round;
  transition: 1s;
}


.photos_line_photo h2 {
  font-size: 20px;
  transition: 0.6s;
  z-index: 99999;
  color: #f56900;
  opacity: 0;
}

.photos_line_photo:hover h2 {
  z-index: 1;
  opacity: 1;
  transform: scale(1) translateY(-320%);
}



.photos_line_photo button:active{
  box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
}

@media screen and (max-aspect-ratio: 1.5/1) {

  .photos_line,
  .photos_line_photo {
    font-size: 2px;
  }
}

@media screen and (max-aspect-ratio: 0.8/1) {
  .photos_line,
  .photos_line_photo {
    font-size: 2.8px;
  }
}

</style>
