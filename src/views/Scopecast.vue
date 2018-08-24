<template>
  <div class="scopecast page">
      <img src="../assets/logo.svg" class="main-logo"  v-scroll-reveal.reset="{ delay: 800 }">
    <section class="banner" v-scroll-reveal.reset="{ delay: 200 }">
    <div class="overlay">
          <img src="../assets/work/scopecast/scopecast-logo.svg">
          <p>Scopecast est un podcast francophone. On y parle de pop-culture (Cinema, Séries, Jeux  Vidéo…) avec des blagues et des bières. Scopecast 
est un podcast francophone. On y parle de pop-culture (Cinema, Séries, Jeux Vidéo…) avec des blagues et des bières.</p>
    </div>
    </section>

    <div class="row spaceBetween">
      <div class="col-L8" v-scroll-reveal.reset="{ delay: 400 }">
        <span class="blockquote">
          4 potes fous de ciné, séries, animation et jeux vidéo partagent leur passion dans un podcast décontracté.
       </span>
      </div>

      <div class="col-L4 text-align-right" v-scroll-reveal.reset="{ delay: 400 }">
      <p>Vous pouvez consulter la documentation sur align-content pour en savoir plus, notamment sur la compatibilité des navigateurs.</p>
      </div>

    </div>

    <section class="businesscards row spaceBetween">
      <section class="col-L4" v-scroll-reveal.reset="{ delay: 400 }">
      <img src="../assets/work/scopecast/card-black.svg">
      </section>

      <section class="col-L4" v-scroll-reveal.reset="{ delay: 400 }">
      <img src="../assets/work/scopecast/card-black.svg">
      </section>

      <section class="col-L4" v-scroll-reveal.reset="{ delay: 400 }">
      <img src="../assets/work/scopecast/card-black.svg">
      </section>      
    </section>

    <section class="businesscards row spaceBetween">
      <section class="col-L4" v-scroll-reveal.reset="{ delay: 400 }">
      <img src="../assets/work/scopecast/card-black.svg">
      </section>

      <section class="col-L4" v-scroll-reveal.reset="{ delay: 400 }">
      <img src="../assets/work/scopecast/card-black.svg">
      </section>

      <section class="col-L4" v-scroll-reveal.reset="{ delay: 400 }">
      <img src="../assets/work/scopecast/card-black.svg">
      </section>      
    </section>

    <section class="businesscards row spaceBetween">
      <section class="col-L4" v-scroll-reveal.reset="{ delay: 400 }">
      <img src="../assets/work/scopecast/card-black.svg">
      </section>

      <section class="col-L4" v-scroll-reveal.reset="{ delay: 400 }">
      <img src="../assets/work/scopecast/card-black.svg">
      </section>

      <section class="col-L4" v-scroll-reveal.reset="{ delay: 400 }">
      <img src="../assets/work/scopecast/card-black.svg">
      </section>      
    </section>


  
  </div>
</template>



<style scoped lang="scss">

@import '../blunderbuss/_config/variables.scss';


.main-logo {
      height: 96px;
    margin: 64px 0 0 40px;
}


.scopecast {
  margin:0 0 100px 0;
  .row {
    padding: 64px 140px;
  }
}

.banner {
  position: relative;
    margin: 8vh 0 0 40px;
    height: 75vh;
  background:url('../assets/work/scopecast/scopecast-banner.jpg') top center no-repeat;
  background-size:cover;
  .overlay {
    position:absolute;
    padding: 140px;
    top:0;
    bottom:0;
    left:0; 
    right:0;
    background: rgba(244, 66, 54, 0.6);
    p {
      color: $white;
      font-size: $font-size-tall;
      margin: 40px 0;
      line-height: $line-height-xl;
    }
    img {
      height:80px;
    }
  }
}

article {
   height: 100vh;
}


</style>