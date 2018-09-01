<template>
  <div class="home page">



  <div class="global-wrapper">
  <div class="border-layout">
  </div>

    <section class="wrapper-main-infos">
      <div class="main-infos">
      <img class="logo-home" src="../assets/logo.svg">
      <div class="main-infos-text">
        <h1>Joffrey Dieudonat</h1>
        <span class="headline">UI/UX Designer & Intégrateur</span>
        <span class="big-link"><router-link to="/scopecast">Check out my works !</router-link></span>
      </div>
      </div>
    </section>


    <section class="row bio relative">
          <div class="ring-symbol">
          <div class="ring-one"></div>
          <div class="ring-two"></div>
        </div>
    <div class="col-L6 col-M12 bio-coln1">
    <p>
    Actuellement Freelance et Front-end Designer Senior chez Ligatus France, je serai ravi de créer l'identité visuelle et le site internet les plus adaptés à votre projet ! Que vous soyez créateur, artisan ou cosmonaute, n'hésitez pas à me contacter !
    </p>
    </div>
    <div class="col-L6 col-M12 bio-coln2">
    <p>
    Quand je ne fais pas du webdesign ou du code, je fais de la guitare avec mon groupe <a href="https://twitter.com/thehallies">@TheHallies</a>, je joue aux jeux vidéo et je vais au cinéma (j'écris sur <a href="https://twitter.com/_scopecast">@scopecast</a>)
    </p>
    </div>
    </section>

  <div class="contact">
      <span>
      <a href="https://twitter.com/joffreyd?lang=fr">
      <img src="../assets/twitter.svg">
      </a>
      </span>
    <span><a href="https://joffreyd.tumblr.com/">more work on my blog</a></span>
    <span>contact : joffreydi at gmail.com</span>
  </div>

  </div>
  </div>
</template>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../blunderbuss/_config/variables.scss';
@keyframes borderApp {
    0% {
        width: 0;
    }
    100% {
        width: 8px;
    }
}

@keyframes opacityLoading {
    0% {
        opacity: 0;
        margin-left: -40px;
    }
    100% {
        opacity: 1;
        margin-top: 0px;
    }
}

@keyframes logoHome {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.contact {
   transform: rotate(270deg);
   position:absolute; 
    bottom: 240px;
    right: -160px;
    span {
      margin-right:20px;
      img {
        height:24px;
           transform: rotate(90deg);
      }
    }
    a {
      text-decoration: none;
      &:hover {
        color:$blue-orchid;
      }
    }
}

.border-layout {
    width: 16px;
    position: fixed;
    top: 260px;
    left: -8px;
    bottom: 430px;
    border-radius: 10px;
    background: linear-gradient(#7ED8CF, #2DDBCC);
}

.logo-home {
    animation: logoHome 3000ms;
}

h1 {
    animation: opacityLoading 2000ms;
}

.headline {
    animation: opacityLoading 2500ms;
}

.big-link {
    animation: opacityLoading 3000ms;
}

.global-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 90vh;
    margin: auto;
    width: 1020px;
}

.wrapper-main-infos {
    margin: 180px 0 0 0;
    .main-infos {
        align-items: center;
        display: flex;
        img {
            margin-right: 88px;
            height: 150px;
        }
    }
}

.bio {
    animation: logoHome 3000ms;
    max-width: 700px;
    margin: 0 0 0 244px;
    padding: 0 0 0 64px;
    .bio-coln1 {
        animation: opacityLoading 2000ms;
        padding: 0 20px 0 0;
    }
    .bio-coln2 {
        animation: opacityLoading 3000ms;
        padding: 0 0 0 0;
    }
    .ring-symbol {
        width: 48px;
        position: relative;
        right: 64px;
        position: absolute;
        top: 28px;
        left: 0;
        transform: rotate(270deg) !important;
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
    a {
      color:$black;
      font-weight:400;
      text-decoration:none;
      &:hover {
        color:$blue-orchid;
      }
    }
}

@media (max-width:1200px) {
    .global-wrapper {
        min-height: 100vh;
        margin: auto;
        width: 80%;
    }
    .wrapper-main-infos {
        margin: 180px 0 0 0;
        .main-infos {
            img {
                margin-right: 60px;
                height: 100px;
            }
        }
    }
    .bio {
        max-width: 500px;
        margin: 0 0 0 100px;
        padding: 0 0 0 64px;
    }
}

@media (max-width:800px) {
    .border-layout {
        top: 260px;
        bottom: 480px;
    }
    .global-wrapper {
        text-align: center;
        display: block;
        flex-direction: column;
        justify-content: space-around;
        margin: auto;
        padding: 40px;
        width: 100%;
    }
    .wrapper-main-infos {
        margin: 100px 0 0 0;
        .main-infos {
            align-items: center;
            display: block;
            img {
                height: 100px;
                margin: 0 0 40px 0;
            }
        }
    }
    .bio {
        animation: logoHome 3000ms;
        min-width: 100%;
        margin: 40px 0 0 0;
        padding: 0;
        .bio-coln1 {
            animation: opacityLoading 2000ms;
            padding: 64px 0 0 0;
        }
        .bio-coln2 {
            animation: opacityLoading 3000ms;
            padding: 0 0 0 0;
        }
        .ring-symbol {
            width: 48px;
            margin: auto;
            position: relative;
            transform: rotate(0deg) !important;
            .ring-one {
                right: -10px;
            }
            .ring-two {
                position: absolute;
                right: 14px;
            }
        }
    }
    .border-layout {
        animation: logoHome 3000ms;
        top: 130px;
        bottom: 520px;
    }

.contact {
   transform: rotate(0) ;
   position:static; 

    margin: 20px auto;
    width: 212px;
    span {
      margin-right:0;
      display:block;
      text-align:center;
      img {
        height:24px;
           transform: rotate(0deg);
      }
    }
}

}



</style>