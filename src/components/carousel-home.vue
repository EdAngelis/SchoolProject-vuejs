<template lang='pug'>
    v-carousel
      v-carousel-item( v-for="(item, index) in items" :key="index" :src="item.src")
</template>

<script>
export default {
  name: 'carosel',
  data () {
      return {
        items: [
          {
            src: 'https://cdn-images-1.medium.com/max/1200/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg'
          },
          {
            src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--_VSTqAUX--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/9qypxdkcnrvkzqhxeo59.png'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>