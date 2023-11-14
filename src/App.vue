<template>
  <div id="nav">
    <router-link to="/" @click="this.$store.dispatch('loadProductsAction', this.url)">Home</router-link>
    <div class="devider">|</div>
    <router-link to="/basket">Cart <div class="cart"><div class="items" v-if="inBag.length">{{inBag.length}}</div></div></router-link> 
  </div>
  <router-view/>
</template>

<script>

  export default {
    name: 'App',
    
    data() {
      return {
        url : {baseUrl:"https://dummyjson.com/products", category:"", limit: "?limit=9", skipCode:"&skip=" ,skip:0},
        cartSelected : false
      }
    },

    method: {

    },

    created() {
      
    },
    
    computed: {
      inBag() {
        var products = this.$store.state.inBag;
        return products;
      }
    },

    beforeCreate() {
      this.$store.commit('initialiseStore');
    }

  }
  
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: rgb(37, 37, 37);
  box-shadow: 3px 3px 6px -3px rgba(0,0,0,0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 640px){
    padding: 10px 0;
  }

  .devider{
    margin: 0 15px;
  }
  
  .cart{
    height: 25px;
    width: 25px;
    background-image: url('./img/cart_w.png');
    background-size: 100% auto;
    display: inline-block;
    position: relative;

    .items{
      background-color: red;
      height: 15px;
      width: 15px;
      border-radius: 10px;
      position: absolute;
      top:-5px;
      right:0px;
      color: white;
      font-size: 12px;
      text-align: center;
    }
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;

    &.router-link-exact-active {
      color: #007bff;
    }
  }
}

</style>
