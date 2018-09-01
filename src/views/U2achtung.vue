<template>
  <div class="u2achtung page">
    <img src="../assets/logo.svg" class="main-logo" v-scroll-reveal.reset="{ delay: 800 }">

    <section class="banner" v-scroll-reveal.reset="{ delay: 200 }">
      <div class="overlay">
        <img src="../assets/work/u2achtung/u2achtung-logo.svg" />
        <p>U2Achtung est une association et un site internet crée par des fans de U2 pour les fans depuis 1999. C'est aujourd'hui la plus grande communautée française sur le groupe, avec du nouveau contenu régulier et un forum très actif.</p>
        <div class="project-colors">
          <div class="color-one"></div>
          <div class="color-two"></div>
          <div class="color-three"></div>
        </div>
        <a href="https://www.u2achtung.com">
        <button class="button-link"><img src="../assets/icon-link.svg">Visiter le site</button>
        </a>
        </div>
    </section>

    <div class="row spaceBetween relative">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        Présentation
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>

      <div class="col-L4 col-M12 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <span class="blockquote">
          TOUCH ME, TAKE ME TO THAT OTHER PLACE  TEACH ME, I KNOW I’M  NOT A HOPELESS CASE
        </span>
      </div>

      <div class="col-L2 col-M12 col-S12" >
      </div>

      <div class="col-L3 col-M12 col-S12 project-resume first-column" v-scroll-reveal.reset="{ delay: 400 }">
        <p>U2Achtung est une association et un site internet crée par des fans de U2 pour les fans depuis 1999. Le projet est composé de plusieurs sites dont le site principal (actualités & infos), le club (espace payant pour accéder à du contenu exclusif, concours, bootlegs…) le forum (environ 150 000 membres inscrits) et des mini-sites evenementiels, souvent en partenariat avec Universal.</p>
      </div>
      <div class="col-L3 col-M12 col-S12 project-resume second-column" v-scroll-reveal.reset="{ delay: 400 }">
        <p>J’ai rejoins l’association en 2006 en tant que graphiste pour designer les TShirts de la tournée 2008 du groupe. Ensuite, j’ai été élu président de l’association en 2010 jusqu’en 2016. Mon rôle a été de rebooter le site de A à Z avec une équipe de redacteur, modérateurs et developpeurs. Cette nouvelle version a apporté un nouveau souffle à la communauté et la refonte de la base des données a rendu l'utilisation du back-end beaucoup plus intuitif.<br />
        C'est durant les périodes de nouveaux albums et tournées que l'équipe était le plus mobilisée. Il fallait préparer les concours (et donc les visuels), des meetings entre fans après les concerts, des mini-sites évenementiels... Un travail très enrichissant pour ses parties techniques et visuelle et de gestion de projet en équipe.
        </p>
      </div>

    </div>

    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        posters evenementiels
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L12 col-M12 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img class="extend" src="../assets/work/u2achtung/u2achtung-posters.jpg">
      </div>
    </section>



    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        posters achtung awards
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L6 col-M6 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img src="../assets/work/u2achtung/u2achtung-awards-poster1.jpg">
      </div>

      <div class="col-L6 col-M6 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img src="../assets/work/u2achtung/u2achtung-awards-poster2.jpg">
      </div>
    </section>

    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        minisites évenementiels
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>

      <div class="col-L8 col-M12 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img class="extend" src="../assets/work/u2achtung/achtungbaby20thanniversary.gif">
      </div>

      <div class="col-L4 col-M12 col-S12 text-column" v-scroll-reveal.reset="{ delay: 400 }">
        <p>Pour les 20 ans de l'album Achtung Baby, nous avions crée un mini-site dédié à l'album. EN partenariat avec Universal, le minisite a été largement diffusé et permettait d'acheter la réedition de l'album via un lien sponsorisé. </p>
        <p>Le layout reprend la pochette de l'album, et les cases s'animent au rollover. Un modal s'ouvre au clic pour afficher diverses informations sur l'album.</p>
        <a href="http://events.u2achtung.com/achtungbaby20th/">
        <button class="button-classic"><img src="../assets/icon-link.svg">Visiter le site</button>
        </a>
      </div>

    </section>


    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        Site internet
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L12 col-M12 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img class="extend" src="../assets/work/u2achtung/website.jpg">
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

  .u2achtung {
    margin: 0 0 100px 0;
    .row {
      padding: 64px 140px;
    }
  }

  .banner {
    position: relative;
    margin: 8vh 0 0 40px;
    height: 75vh;
    background: url('../assets/work/u2achtung/u2achtung-banner.jpg') top center no-repeat;
    background-size: cover;
    .overlay {
      position: absolute;
      padding: 140px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(217, 183, 215, 0.9);
      p {
        color: $white;
        font-size: $font-size-tall;
        margin: 40px 0;
        line-height: $line-height-xl;
        font-weight:400;
      }
      img {
        height: 80px;
      }
    
    }
  }

  .title-section {
    position: absolute;
    top: 124px;
    left: 0;
    transform: rotate(270deg) !important;
  }

  .project-resume {
    text-align: left;
  }

  .first-column {
    padding-right: 12px;
    align-self: flex-end;
  }

  .second-column {
    padding-left: 12px;
    align-self: flex-end;
  }

  .text-column {
    align-self: flex-end;
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
      background: rgba(217, 183, 215, 1);
    }
    .color-two {
      width: 32px;
      height: 32px;
      background: white;
    }
    .color-three {
      width: 32px;
      height: 32px;
      background: black;
    }
  }

  @media (max-width:1200px) {

    .u2achtung {
      .row {
        padding: 64px 100px;
      }
    }

.project-colors  {
  display:none;
}

    .blockquote {
      font-size: $font-size-vtall;
    }

  .first-column {
    padding: 40px 20px 40px 20px;
    align-self: flex-end;
  }

  .second-column {
    padding: 0px 20px 0px 20px;
    align-self: flex-end;
  }

 .text-column {
    align-self: flex-end;
    padding: 40px 20px 0 20px;
  }

}


  @media (max-width:800px) {

    .u2achtung {
      .row {
        padding: 20px 40px;
        .col-S12 {
          margin:0 0 20px 0;
        }
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

  .first-column {
    padding: 0px 0px 0px 0px;
    align-self: flex-end;
  }

  .second-column {
    padding: 0px 0px 0px 0px;
    align-self: flex-end;
  }

 .text-column {
    align-self: flex-end;
    padding: 20px 0px 0px 0px;
  }

  }
</style>