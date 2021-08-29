<template>
  <div class="ly-layout">
    
    <div class="ly-layout__inner">
      <div class="ly-layout__wrapper">
        <header class="header">
          <strong class="logo js-popup_logo">
            <span class="logo__wrapper js-popup_logo__wrapper">
              <g-link to="/">DAI IMANISHI PORTFOLIO SITE</g-link>
            </span>
            
          </strong>
          <!--<nav class="nav">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about/">About</g-link>
          </nav>-->
        </header>
        <slot/>
      </div>

    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>



<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.js-popup_logo{
  overflow: hidden;
}

#top .js-popup_logo__wrapper{
  position: relative;
  opacity: 0;
  animation: popupLogo 600ms cubic-bezier(0.7,0,0.3,1) 2000ms forwards;
  bottom: -40px;
}

@keyframes popupLogo{
  0%{
    opacity: 0;
    bottom: -40px;
  }
  100%{
    opacity: 1;
    bottom: 0;
  }
}



.ly-layout__inner{
  padding-top: 40px;
  width: calc(100% - 80px);
  margin: 0 auto;
}

.full_view .ly-layout__inner{
  width: 100%;
}


@media screen and (max-width: 767px){
  .ly-layout__inner{
    width: 100%;
  }
}



.ly-layout__wrapper{
  background-color: #f8f8f8;
  padding: 120px 0px 120px;
  box-sizing: border-box;
  margin-bottom: 40px;
}@media screen and (max-width: 767px){
  .ly-layout__wrapper{
    padding: 80px 0px 80px;
    margin-bottom: 0;
  }
}

.full_view .ly-layout__wrapper{
  padding-top: 150px;
  padding-bottom: 200px;
  background-color: #f8f8f8;
  margin-bottom: 0;
}@media screen and (max-width: 767px){
  .full_view .ly-layout__wrapper{
    padding-top: 60px;
    padding-bottom: 120px;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 40px;
  z-index: 20;
}

.logo{
  position: fixed;
  left: 40px;
  top: 10px;
  font-size: 12px;
}

.nav__link {
  margin-left: 20px;
}
</style>
