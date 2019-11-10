<template>
  <div class="menu">
   <h1 class="header">OUR MENU</h1>
  
   <div class="cart">
     
      <div class="section" v-parallax="0.2">
        <h2 class="section__header">STARTERS</h2>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
      </div>

      <div class="section" v-parallax="-0.2">
        <h2 class="section__header">STARTERS</h2>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
      </div>

      <div class="section" v-parallax="-0.2">
        <h2 class="section__header">STARTERS</h2>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
      </div>

      <div class="section" v-parallax="0.2">
        <h2 class="section__header">STARTERS</h2>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description">)v( aslas elppaenip ottocor ija htiw satteuqorc raddehc dna aoniuQ</p>
            <div class="item__price"><span>$4.95</span></div>
          </div>
      </div>
    </div>

</div>
</template>


<script>

export default {
  name: 'Menu'

}
</script>

<style lang="scss" scoped>
  $background: #F8F8F8;
  $accent: #FFDAC9;

  .menu {
    background-color: $background;
    width: 100%;
    height: auto;
  }

  h1 {
    font-size: 50px;
    text-align: center;
    text-transform: uppercase;
  }

  h1.header {
     position: relative;
     z-index: 1;
    
    &:before {
        border-top: 4px solid $accent;
        content: '';
        margin: 0 auto;
        position: absolute;
        top: 50%; left: 0; right: 0; bottom: 0;
        width: 20%;
        z-index: -1;
    }
  }

  .cart {
    display: grid;
    grid-template-rows: auto;
    grid-template-areas: 
    "section section section section"
  }


</style>
