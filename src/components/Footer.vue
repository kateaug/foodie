<template>
  <div class="footer">
      <!-- <div class="items">
          <div class="items__header">SECTION 1</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
      </div>
      <div class="items">
          <div class="items__header">SECTION 1</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
      </div>
      <div class="items">
          <div class="items__header">SECTION 1</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
      </div>
      <div class="items">
          <div class="items__header">SECTION 1</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
      </div>
      <div class="items">
          <div class="items__header">SECTION 1</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
          <div class="items__category">Subsection</div>
      </div> -->
   
  </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>


<style lang="scss" scoped>
$fontGill: GillSans;
$fill: #333333;
$white: #fff;

 .footer {
     background-color: $fill;  
     height: 200px;    
 } 

 .items {
         width: 60%;
         background-color: blue;
         display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 20% 80%;
     }
</style>
