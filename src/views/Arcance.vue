<template>
  <div class="arcance page">
    <img src="../assets/logo.svg" class="main-logo" v-scroll-reveal.reset="{ delay: 800 }">
    <section class="banner" v-scroll-reveal.reset="{ delay: 200 }">
      <div class="overlay">
        <img src="../assets/work/arcance/arcance-logo.png">
        <p>Organisateur de salon spécialisé sur Paris, Arcance Event accompagne les organisateurs de salons, de congrès, d’évènements et d’expositions dans la gestion de leurs exposants. Nous mettons à votre disposition un logiciel destiné à gérer les besoins et attentes de vos exposants. Cette plateforme exposant aux couleurs de votre salon est un outil de gestion particulièrement innovant pour un service à l’exposant rapide efficace et irréprochable.</p>
        <div class="project-colors">
          <div class="color-one"></div>
          <div class="color-two"></div>
          <div class="color-three"></div>
        </div>
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
          Organisation de salons, événements, expositions, organisateur d’événement spécialisé sur Paris.
        </span>
      </div>

      <div class="col-L4 col-M4 col-S12 project-resume" v-scroll-reveal.reset="{ delay: 400 }">
        <p>L'objectif de ce projet était de rebooter une plateforme utilisée depuis une dizaine d'année. Il fallait donc revoir l'éxperience utilisateur du projet mais aussi l'intérface utilisateur.<br /><br />
        Une fois le prototype validé par le client, je me suis occupé de l'intégration de la plateforme avec mon propre framework CSS : Blunderbuss (site dédié bientôt en ligne)</p>
      </div>
    </section>


    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        design system
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L6 col-M6 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img src="../assets/work/arcance/arcance-navbar.svg">
      </div>

      <div class="col-L6 col-M6 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img src="../assets/work/arcance/arcance-tabs.svg">
      </div>
    </section>

    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
       design system
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L12 col-M12 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img class="extend" src="../assets/work/arcance/arcance-prototyping.svg">
      </div>
    </section>

    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        design system
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L12 col-M12 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img class="extend" src="../assets/work/arcance/arcance-header.svg">
      </div>
    </section>

    <section class="relative row spaceBetween">
      <div class="title-section" v-scroll-reveal.reset="{ delay: 400 }">
        site internet
        <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
      </div>
      <div class="col-L12 col-M12 col-S12" v-scroll-reveal.reset="{ delay: 400 }">
        <img class="extend" src="../assets/work/arcance/website.jpg">
      </div>
    </section>



  </div>
</template>


<style scoped lang="scss">
  @import '../blunderbuss/_config/variables.scss';

  .main-logo {
    height: 80px;
    margin: 64px 0 0 40px;
  }

  .arcance {
    margin: 0 0 100px 0;
    .row {
      padding: 64px 140px;
    }
  }

  .banner {
    position: relative;
    margin: 8vh 0 0 40px;
    height: 75vh;
    background: url('../assets/work/arcance/arcance-banner.jpg') top center no-repeat;
    background-size: cover;
    .overlay {
      position: absolute;
      padding: 140px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(120, 120, 120, 0.8);
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

    .arcance {
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
  }


  @media (max-width:800px) {

    .arcance {
      .row {
        padding: 40px;
      }
    }

    .title-section {
      display: none;
    }

    .main-logo {
        margin: 24px auto;
        display: flex;
    }

    .banner {
      margin: 4vh 0 0 0;
      height: 75vh;
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