<template>
  <div class="scopecast page">
    <img src="../assets/logo.svg" class="main-logo" v-scroll-reveal.reset="{ delay: 800 }">
    <section class="banner" v-scroll-reveal.reset="{ delay: 200 }">
      <div class="overlay">
        <img src="../assets/work/scopecast/scopecast-logo.svg">
        <p>Scopecast est un podcast francophone. On y parle de pop-culture (Cinema, Séries, Jeux Vidéo…) avec des blagues
          et des bières.</p>
        <div class="project-colors">
          <div class="color-one"></div>
          <div class="color-two"></div>
          <div class="color-three"></div>
        </div>
        <a href="http://www.scopecast.fr/">
        <button class="button-link"><img src="../assets/icon-link.svg">Visiter le site</button>
        </a>
      </div>
    </section>

    <section class="row spaceBetween relative">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        Présentation
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>

      <div class="col-L8 col-M8 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <span class="blockquote">
          4 potes fous de ciné, séries, animation et jeux vidéo partagent leur passion dans un podcast décontracté.
        </span>
      </div>

      <div class="col-L4 col-M4 col-S12 project-resume" v-scroll-reveal.reset="{ delay: 400 }">
        <p>C'est en voulant partager notre passions pour la pop-culture que nous avions decidé d'acheter 3 micros pour créer notre émission. Une fois le premier numéro enregistré, il fallait créer un site, un logo... Créer notre marque !<br /><br/> Je suis parti du logo et de son code couleur pour créer le site. Il tourne sous Wordpress, avec un thème custom et le framework Materialize.</p>
      </div>
    </section>

    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
      Logotype
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L4 col-M4 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img src="../assets/work/scopecast/card-red.svg">
      </div>

      <div class="col-L4 col-M4 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img src="../assets/work/scopecast/card-pulp.svg">
      </div>

      <div class="col-L4 col-M4 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img src="../assets/work/scopecast/card-black.svg">
      </div>
    </section>

    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        Podcast cover
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L6 col-M6 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img src="../assets/work/scopecast/miniscopecast-cover.jpg">
      </div>

      <div class="col-L6 col-M6 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img src="../assets/work/scopecast/scopecast-cover.jpg">
      </div>
    </section>

    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        website
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L12 col-M12 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img class="extend" src="../assets/work/scopecast/website.jpg">
      </div>
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
     margin: 0 0 100px 0;
     .row {
         padding: 64px 140px;
     }
 }

 .banner {
     position: relative;
     margin: 8vh 0 0 40px;
     height: 75vh;
     background: url('../assets/work/scopecast/scopecast-banner.jpg') top center no-repeat;
     background-size: cover;
     .overlay {
         position: absolute;
         padding: 140px;
         top: 0;
         bottom: 0;
         left: 0;
         right: 0;
         background: rgba(244, 66, 54, 0.6);
         p {
             color: $white;
             font-size: $font-size-tall;
             margin: 40px 0;
             line-height: $line-height-xl;
         }
         img {
             height: 80px;
         }
     }
 }

 .title-section {
     position: absolute;
     top: 104px;
     left: 0;
     transform: rotate(270deg) !important;
 }

 .project-resume {
     text-align: right;

 }

 .ring-symbol {
     width: 48px;
     position: relative;
     right: 64px;
     .ring-one {
         position: absolute;
         top: -34px;
         right: 0;
         width: 48px;
         height: 48px;
         background: blue;
         border-radius: 30px;
         background: linear-gradient(#7ED8CF, #2DDBCC);
         opacity: 0.3;
     }
     .ring-two {
         position: absolute;
         right: 30px;
         top: -34px;
         width: 48px;
         height: 48px;
         background: blue;
         border-radius: 30px;
         background: linear-gradient(#7ED8CF, #2DDBCC);
         opacity: 0.3;
     }
 }

 .project-colors {
     display: flex;
     display: none;
     * {
         margin-right: 12px;
     }
     .color-one {
         width: 32px;
         height: 32px;
         background: #F44236;
     }
     .color-two {
         width: 32px;
         height: 32px;
         background: #FDD834;
     }
     .color-three {
         width: 32px;
         height: 32px;
         background: #2C3032;
     }
 }

 @media (max-width:1200px) {
     .scopecast {
         .row {
             padding: 64px 100px;
         }
     }
     .project-colors {
         display: none;
     }
     .blockquote {
         font-size: $font-size-vtall;
     }
 }

 @media (max-width:800px) {
     .scopecast {
         .row {
             padding: 40px;
         }
     }
     .title-section {
         display: none;
     }
     .main-logo {
         height: 84px;
         margin: 24px auto;
         display: flex;
     }
     .banner {
         margin: 4vh 0 0 0;
      height: 65vh;
         .overlay {
             padding: 40px;
             p {
                 color: $white;
                 font-size: $font-size-base;
                 margin: 40px 0;
                 line-height: $line-height-base;
             }
             img {
                 height: 64px;
             }
         }
     }
     .project-resume {
         text-align: left;
         margin: 20px 0 0 0;
     }
 }
</style>