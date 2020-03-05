<template>

<nav>
<div class="nav-mobile">
<div class="dropdown">
<img class="cross" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTAxLjMzMyw5NkgxMC42NjdDNC43NzksOTYsMCwxMDAuNzc5LDAsMTA2LjY2N3M0Ljc3OSwxMC42NjcsMTAuNjY3LDEwLjY2N2g0OTAuNjY3YzUuODg4LDAsMTAuNjY3LTQuNzc5LDEwLjY2Ny0xMC42NjcgICAgUzUwNy4yMjEsOTYsNTAxLjMzMyw5NnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01MDEuMzMzLDI0NS4zMzNIMTAuNjY3QzQuNzc5LDI0NS4zMzMsMCwyNTAuMTEyLDAsMjU2czQuNzc5LDEwLjY2NywxMC42NjcsMTAuNjY3aDQ5MC42NjcgICAgYzUuODg4LDAsMTAuNjY3LTQuNzc5LDEwLjY2Ny0xMC42NjdTNTA3LjIyMSwyNDUuMzMzLDUwMS4zMzMsMjQ1LjMzM3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01MDEuMzMzLDM5NC42NjdIMTAuNjY3QzQuNzc5LDM5NC42NjcsMCwzOTkuNDQ1LDAsNDA1LjMzM0MwLDQxMS4yMjEsNC43NzksNDE2LDEwLjY2Nyw0MTZoNDkwLjY2NyAgICBjNS44ODgsMCwxMC42NjctNC43NzksMTAuNjY3LTEwLjY2N0M1MTIsMzk5LjQ0NSw1MDcuMjIxLDM5NC42NjcsNTAxLjMzMywzOTQuNjY3eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
  <div class="dropdown-content">
    <ul>
      <li><router-link to="/">intro</router-link></li>
      <li><router-link to="/blog">Projects</router-link></li>

    </ul>
  </div>
</div>
</div>

  <div class="nav-desktop">  
    <ul>
      <li><router-link to="/">intro</router-link></li>
      <li><router-link to="/blog">Projects</router-link></li>
    </ul>
  </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import '../blunderbuss/_config/variables.scss';

    .nav-desktop {
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 0 0 0;
    position: absolute;
      ul { 
        display: flex;
        padding:0;
        li {
          cursor:pointer;
          padding-right: 52px;
          list-style-type: none;
          &:last-child {
            padding-right: 0;
          }
  
          .router-link-exact-active {
              background: $blue-orchid;
              color:$white;
          }
          a {
            background-color: $white;
            border: none;
            color: $black;
            padding: 20px;
            transition: 0.3s;
            text-decoration:none;
              &:hover {
              background: $blue-orchid;
              color:$white;
              }
            }
          }
        }
      }

.dropdown {
  display:none;
}

  @media (max-width:800px) {

    .nav-desktop {
      display:none !important;
    }

    .dropdown {

      .cross {
        background:$white !important;
      }
      display:block;
      position:absolute;
      left:20px;
      top:20px;
      background:$blue-orchid;
        &:hover {
        .dropdown-content {
          display: block;
          position: absolute;
          top:-20px;
          left:-20px;
          right:0;
          bottom:0;
          background-color: $blue-orchid;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 100;
          height:300px;
          width:100vh;
            ul { 
              padding:40px;
              display: flex;
              flex-direction: column;
              justify-content:space-between;
                li {
                  cursor:pointer;
                  padding-right: 0;
                  padding:10px 0;
                  list-style-type: none;
                     &:last-child {
                       padding-right: 0;
                     }
  
          .router-link-exact-active {
              background: $blue-orchid;
              color:$white;
          }
          a {
            background-color: $blue-orchid;
            color: $white;
            width:100%;
            font-size: 1.8rem;
            transition: 0.3s;
            text-decoration:none;
              &:hover {
              background: $white;
              color:$blue-orchid;
              }
            }
          }
        }
        }
      }
    }

    .dropdown-content {
        display: none;
    }
  }

</style>
