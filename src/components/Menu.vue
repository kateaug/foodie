<template>
  <div class="menu">
    
    <div class="border">
       <div class="heading">
          <h1>OUR MENU</h1>
          <button class="btn" href="#">Know more</button>
        </div>

      <div class="section" v-parallax="-0.8"> 
       <h2 class="section__header reset">STARTERS</h2>
          <div class="item">
            <h3 class="item__header">QUINOA CROQUETTAS</h3>
            <p class="item__description outer">Quinoa and cheddar croquettas with aji rocotto &amp; pineapple salsa (v)</p>
            <div class="item__price"><span>£4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">CHIFA CHICHARRONES</h3>
            <p class="item__description outer">Slow cooked, crispy pork belly with sweet soy sauce</p>
            <div class="item__price"><span>£6.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">CALAMARES</h3>
            <p class="item__description outer">Crispy baby squid with pickled
             jalapeño miso salsa</p>
            <div class="item__price"><span>£6.95</span></div>
          </div>
      </div>
    </div>

    <div class="border">
      <div class="section" v-parallax="0.8">
        <h2 class="section__header">MAIN COURSES</h2>
          <div class="item">
            <h3 class="item__header">EL CLASICO</h3>
            <p class="item__description">Sea bass ceviche with aji limo
            tiger’s milk, sweet potato purée, choclo corn, red onion, coriander &amp; plantain (gf)</p>
            <div class="item__price"><span>£8.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">TIRADITO CALLAO</h3>
            <p class="item__description">Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche &amp; sweet potato crunchies</p>
            <div class="item__price"><span>£8.95</span></div>
          </div>
      </div>
    </div>
    
    <div class="border">
      <div class="section" v-parallax="-0.8">
        <h2 class="section__header">SIDES</h2>
          <div class="item">
            <h3 class="item__header">SUPER POLLO</h3>
            <p class="item__description">Marinated corn fed chicken pieces with rocotto salsa</p>
            <div class="item__price"><span>£4.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">PATATAS FRITAS</h3>
            <p class="item__description">Sweet potato fries with aji rocotto mayonnaise (v) </p>
            <div class="item__price"><span>£3.95</span></div>
          </div>
      </div>
    </div>

    <div class="border">
      <div class="section outer" v-parallax="0.8" >
        <h2 class="section__header">DESSERTS</h2>
          <div class="item">
            <h3 class="item__header">ICECREAM</h3>
            <p class="item__description">Lorem ipsum dolor sit amet salerma petrum sea</p>
            <div class="item__price"><span>£3.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">TIRAMISU</h3>
            <p class="item__description">Lorem ipsum dolor sit amet salerma petrum sea</p>
            <div class="item__price"><span>£3.95</span></div>
          </div>
          <div class="item">
            <h3 class="item__header">CHOCOLATE BROWNIE</h3>
            <p class="item__description">Lorem ipsum dolor sit amet salerma petrum sea</p>
            <div class="item__price"><span>£3.95</span></div>
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
  $grey: #767676;
  $blackish: #333333;
  $fontDin: DIN Condensed Bold;
  $fontGill: GillSans;
 

  .menu {
    background-color: $background;
    padding: 0 12%; 
    height: auto;
    display: grid;
    color: $blackish;
    grid-template-columns: 25% 25% 25% 25%;
    overflow: hidden;
    font-family: $fontGill;
  }

  .heading {
    width: 80vw;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;

        h1 {
          font-size: 50px;
          font-weight: 600;
          text-align: center;
          text-transform: uppercase;
          margin-top: 20px;
          letter-spacing: -1px;
          position: relative;
          z-index: 1;

              &:before {
                border-top: 4px solid $accent;
                content: '';
                margin: 0 auto;
                position: absolute;
                top: 50%; left: 0; right: 0; bottom: 0;
                width: 25%;
                z-index: -1;
              }
        }

        .btn {
        padding: 7px;
        text-transform: uppercase;
        background-color: $accent;
        font-size: 15px;
        font-weight: 600;
        border: transparent;
        text-align: center;
        margin-top: 5px;
        position: sticky;
        z-index: 1;
        transition: all 0.2s;
        
            &:hover {
            transform: translateY(-3px);
            box-shadow: 0 1rem 1rem rgba($grey, .6);
            }
      }
  }

 
  .border:not(:last-child) {
    border-right: 1px solid #acaaaa;
  }
  
  .section {
    padding: 30px;
    overflow: hidden;

      &__header {
        padding-top: 65%;
        font-size: 50px;
        font-weight: 200;
        letter-spacing: -4px;
        margin-bottom: 0;
        margin-left: -38px;
      }
  }

  .outer {
    padding: 0 20px;
  }

  .reset {
    padding-top: 0;
    margin-left: 0;
  }
  
  .item {
    text-align: left;

      &__header {
        padding: 40% 0 5% 0;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: -1px;
      }

      &__description {
        font-size: 15px;
        font-weight: 400;
        color: $grey;
        letter-spacing: 1px;
        padding: 2% 0;
      }

      &__price {
        border: 2px solid $accent; 
        width: 20%;
        text-align: center;
        padding: 5px;
        margin-top: 5%;
      }
  }


</style>
