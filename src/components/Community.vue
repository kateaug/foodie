<template>
<div class="community">
          <div class="opinion">
              <div class="heading">
                    <h3 class="heading__header">MEET OUR COMMUNITY</h3>
                    <button class="heading__btn" href="#">Know more</button>
                    <p class="heading__text">Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker</p>
              </div>
          </div>

          <div class="opinion" data-aos="slide-up" data-aos-duration="900"  
               data-aos-easing="ease-in-sine">
                    <img class="right" src="../assets/img/pic01.png">
                    <img src="../assets/img/text01.png">          
          </div>

          <div class="opinion top" data-aos="slide-up" data-aos-duration="900"      
               data-aos-easing="ease-in-sine">
                    <img  src="../assets/img/text02.png">
                    <img  class="left" src="../assets/img/pic02.png">    
          </div>

          <div class="opinion">    
          </div>

          <div class="opinion">
              <p class="opinion__text">Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum</p>
          </div>

          <div class="opinion top" data-aos="slide-up" data-aos-duration="900"  
               data-aos-easing="ease-in-sine">
                    <img class="right" src="../assets/img/pic03.png">
                    <img src="../assets/img/text03.png">
          </div>
    </div>

</template>


<script>

export default {
  name: 'Community',
}
</script>

<style lang="scss" scoped>
  $background: #F8F8F8;
  $accent: #FFDAC9;
  $grey: #767676;
  $blackish: #333333;
  $fontDin: DIN Condensed Bold;
  $fontGill: GillSans;

   .community {
        font-family: $fontGill;
        margin: 0 auto;
        color: $blackish;
        padding: 7% 2% 4% 2%;
        display: grid;
        grid-template-columns: 50% 50%;
        overflow: hidden;
        background-image: url("../assets/img/background.svg");
        background-repeat: no-repeat;
        background-position: 76% 44%;
    } 

    .heading {
        display: grid;
        text-align: left;
        left: 0;
        padding-bottom: 50px;

            &__header {
                font-size: 50px;
                font-weight: 500;
                text-align: left;
                text-transform: uppercase;
                margin-top: -30px;
                justify-self: end;
                font-stretch: 50%;
                letter-spacing: -2px;
                padding-left: 15px;
                width: 40%;
                margin-right: 10%;
                position: relative;
                z-index: 1;

                    &:before { 
                            border-top: 4px solid $accent;
                            content: '';
                            margin: 0 auto;
                            position: absolute;
                            top: 75%; left: 0; right: 0; bottom: 0;
                            width: 105%;
                            z-index: -1;
                    }
            }

            &__btn {
                padding: 7px;
                text-transform: uppercase;
                background-color: $accent;
                font-size: 17px;
                font-weight: bold;
                border: transparent;
                text-align: center;
                justify-self: end;
                margin: 2% 32% 0 0;
                transition: all 0.2s;

                        &:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 1rem 1rem rgba($grey, .6);
                        }
            }

            &__text {
                text-transform: uppercase;
                font-size: 15px;
                justify-self: end;
                padding: 5% 19% 0 0;
                letter-spacing: 0;
                font-weight: 600;
                width: 30%;            
            }
    }

    .right {
        margin-right: -16%;
    }

    .left {
        margin-left: -16%;
    }

    .top {
        margin-top: -18%;
    }

    .hidden {
        opacity: 0;
    }

    .opinion {
        &__text {
            width: 30%;
            padding-left: 12%;
            font-size: 15px;
            text-align: left;
            letter-spacing: 1px;
        }
    }

</style>
