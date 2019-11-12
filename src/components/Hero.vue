<template>
  <div class="hero">
    <div class="wrapper">
       <img class="wrapper__img" src="../assets/img/hero.png">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hero'
}
</script>


<style lang="scss" scoped>
$accent: #FFDAC9;
 .hero {
     background-color: $accent;  
 }

 .wrapper {
     width: 60%;
     text-align: center;
     margin: 0 auto;
     &__img{
         width: 100%;
     }
 }
 
</style>
