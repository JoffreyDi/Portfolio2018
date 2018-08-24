<template>
  <div class="home page">
  
    <section class="wrapper-main-infos">
      <div class="main-infos">
      <img class="logo-home" src="../assets/logo.svg">
      <div class="main-infos-text">
        <h1>Hello, je m'appelle Joffrey</h1>
        <span class="headline">Je suis webdesigner de fou</span>
        <span class="big-link">Check my work !</span>
      </div>
      </div>
    </section>

    <section class="bio">
    <p>Depuis quelques années, l’écoute des podcasts s’est considérablement multipliée. C’est en sortant d’une scéance de cinéma que nous nous sommes dit “pourquoi pas nous ?”</p>
    </section>

  </div>
</template>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import '../blunderbuss/_config/variables.scss';

@keyframes opacityLoading {
  0% {
    opacity:0;
  }

  100% {
    opacity:1;
  }
}


.logo-home {
animation: opacityLoading 5000ms;
}

h1 {
animation: opacityLoading 3000ms;
}

.headline {
animation: opacityLoading 5000ms;
}

.big-link {
animation: opacityLoading 7000ms;
}

.home {
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  margin:auto;
  width:866px;
}

.wrapper-main-infos {
  margin: 180px 0 0 0;
    .main-infos {
      align-items: center;
      display:flex;
      img {
        margin-right:88px;
        height:150px;
      }
    }
}

.bio {
  animation: opacityLoading 9000ms;
max-width:500px;
margin: 0 0 0 244px;
}



</style>