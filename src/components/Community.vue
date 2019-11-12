<template>
<div class="community">
          <div class="opinion">
              <div class="inner">
              <h2 class="header">MEET OUR COMMUNITY</h2>
              <button class="btn" href="#">Know more</button>
              <p class="text">Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker</p>
              </div>
          </div>

          <div class="opinion" data-aos="slide-up" data-aos-duration="800"  data-aos-easing="ease-in-sine">
            <img class="right" src="../assets/img/pic01.png">
            <img src="../assets/img/text01.png">
                 <!-- <span> <img class="right" src="../assets/img/pic01.png"><img class="stars" src="../assets/img/detail03.png"></span>
                 <span>
                 <img src="../assets/img/text01.png">
                 <img class="bars" src="../assets/img/detail01@2x.png">   
                 </span> -->
                 
          </div>

          <div class="opinion top" data-aos="slide-up" data-aos-duration="800"  data-aos-easing="ease-in-sine">
              <img  src="../assets/img/text02.png">
              <img  class="left" src="../assets/img/pic02.png">
              <!-- <img src="../assets/img/detail02@2x.png"> -->

              
          </div>

          <div class="opinion">
             
               
          </div>

          <div class="opinion">
              <p class="opinion__text">Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum</p>
              

          </div>

          <div class="opinion top" data-aos="slide-up" data-aos-duration="800"  data-aos-easing="ease-in-sine">
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
  $fontDin: DIN Condensed Bold;
  $fontGill: GillSans;

   .community {
        font-family: $fontGill;
        margin: 0 auto;
        padding: 7% 2% 4% 2%;
        display: grid;
        grid-template-columns: 50% 50%;

              background-image: url("../assets/img/background.svg");
        background-repeat: no-repeat;
        background-position: 76% 44%;
        

    }

     
    .opinion {
        &__text {
            padding-left: 12%;
        }
    }

    .inner {
        display: grid;
        text-align: left;
        left: 0;
        padding-bottom: 50px;
    }


    h2 {
        font-size: 50px;
        font-weight: 600;
        text-align: left;
        text-transform: uppercase;
        margin-top: -30px;
        justify-self: end;
        font-stretch: 50%;
        letter-spacing: -2px;
        padding-left: 15px;
    }

    .header {
        width: 40%;
        margin-right: 10%;
    }

    h2.header {
        position: relative;
        z-index: 1;
        
        
        &:before {
            border-top: 4px solid $accent;
            content: '';
            margin: 0 auto;
            position: absolute;
            top: 75%; left: 0; right: 0; bottom: 0;
            width: 113%;
            z-index: -1;
        }
    }

    .btn {
        padding: 7px;
        text-transform: uppercase;
        background-color: $accent;
        font-size: 17px;
        font-weight: bold;
        border: transparent;
        text-align: center;
        justify-self: end;
        margin: 2% 32% 0 0;
        // margin: 5px 150px 0 0;

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



    // .a, .c, .e {
    //     justify-self: end;
    //     align-self: end;
    //     text-align: right; 
    //     padding-left: 20px;
    // }

    .hidden {
        opacity: 0;
    }

    p {
        width: 30%;
        padding: 20px;
        font-size: 15px;
        // justify-self: center;
        text-align: left;
        letter-spacing: 1px;

    }

    .text {
         text-transform: uppercase;
         font-size: 19px;
         justify-self: end;
         padding: 5% 19% 0 0;
         letter-spacing: 0;
         font-weight: 600;
    }

    img {
        //padding: 10px;
       // width: 50%;
    }

</style>
