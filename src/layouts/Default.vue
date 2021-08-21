<template>
  <div class="ly-layout">
    <div class="ly-layout__inner">
      <div class="ly-layout__wrapper">
        <header class="header">
          <strong class="logo">
            <g-link to="/">DAI IMANISHI PORTFOLIO SITE</g-link>
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
  padding-top: 120px;
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
  background-color: #fff;
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
