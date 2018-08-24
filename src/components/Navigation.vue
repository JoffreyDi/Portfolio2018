<template>
  <nav class="nav">
    <ul>
      <li><router-link to="/">intro</router-link></li>
      <li><router-link to="/scopecast">my work</router-link></li>
      <li><router-link to="/">contact</router-link></li>
       <li><router-link to="/about">my music</router-link></li>
    </ul>
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

    .nav {
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 100px 0 0 0;
    position: absolute;
      ul { 
        display: flex;
        padding: 0 0 0 120px;
        li {
          padding-right: 64px;
          list-style-type: none;
          &:last-child {
            padding-right: 0;
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

</style>
