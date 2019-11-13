<template>
  <div class="hero">
    <div class="hero__wrapper">
       <img class="hero__img" src="../assets/img/hero.png">
       <div class="hero__title">
            <h1>THE BEST FOODIE <span class="hero__title-bolder">EXPERIENCE</span></h1>
            <h2>NOW IN LONDON</h2>
       </div>
       <img class="hero__logo" src="../assets/img/stamp.png">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hero'
}
</script>


<style lang="scss" scoped>
$fontGill: GillSans;
$accent: #FFDAC9;
$white: #fff;

 .hero {
     background-color: $accent;  

     &__title {
        color: $white;
        font-family: $fontGill;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);

        h1 {
          font-size: 65px;
          font-weight: 600;
          letter-spacing: -2px;
        }

        h2 {
          padding-top: 10px;
          font-size: 30px;
          font-weight: 600;
          letter-spacing: -2px;
        }

        &-bolder {
          font-size: 85px;
        }
     }

     &__wrapper {
       width: 60%;
       text-align: center;
       margin: 0 auto;
     }

     &__img {
      width: 100%;
     }

     &__logo {
        position: absolute;
        top: 30%;
        left: 27%;
        transform: translate(-50%, -50%);
     }
 } 
</style>
