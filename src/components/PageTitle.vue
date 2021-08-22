<template>
  <div class="pageTitle">
    <div class="pageTitle__text js-text_popup">{{ text }}</div>
  </div>
</template>

<script>
import Util from '~/assets/js/util.js'
export default {
  name: 'pageTitle',
  props: ['text'],
  data () {
    return {
      message: 'Try change me!'
    }
  },
  mounted () {
    let target = document.querySelectorAll('.js-text_popup');
    for (var i = 0; i < target.length; i++) {
        let text = target[i].textContent;
        target[i].textContent = "";
        for (var n = 0; n < text.length; n++) {
          target[i].innerHTML  += "<span class='js-text_popup__item'>" + text.charAt(n) + "</span>";

        }
    }

    let children = document.querySelectorAll('.js-text_popup__item');
    let loop_count = 0;

    setTimeout(()=>{
      activatePerChild(children);
    },1300);

    function activatePerChild(target){
      target[loop_count].classList.add("active");
      //console.log(target[loop_count]);
      loop_count++
      if(loop_count < target.length){
        setTimeout(()=>{
          activatePerChild(target);
        },60);
        
      }
    }

    

    //console.log(children);
    //test();
  },
  methods: {
  }
}

/*var str = "pageTitle__text";
for (var i = 0; i < str.length; i++) {
  alert(str.charAt(i));
}*/

</script>

<style scoped>
.pageTitle__text{
  font-size: 78px;
  margin-bottom: 100px;
  padding-left: 60px;
  font-weight: bold;
  line-height: 1.3;
}

@media screen and (max-width: 767px){
  .pageTitle__text{
    font-size: 28px;
    padding-left: 20px;
    margin-bottom: 60px;
  }
}
</style>