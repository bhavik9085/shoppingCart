<template>
  <div class="home">
    <Aside ref="asideComponent"></Aside>
    <individualProduct ref="individualProductComponent"></individualProduct>
    <span 
      v-if="this.currUrl.category" 
      @click="this.$store.dispatch('loadProductsAction', this.url)">
      {{ this.currUrl.category }}&nbsp;&nbsp; <img src="@/img/cross.png">
    </span>
    <div class="products">
        <div class="product" v-for="(product,index) in this.products.products" :key="index" :class="{inBag: isInBag(product.id)}" @click.self.prevent="individualProductPushPopUp(product)">
          <div class="product-image" :style="{backgroundImage: 'url(' + product.thumbnail +')'}" @click="individualProductPushPopUp(product)"></div>
          <h4 v-html="product.title" @click="individualProductPushPopUp(product)"></h4>
          <p class="price" @click="individualProductPushPopUp(product)">US$ {{ product.price.toFixed(2) }}</p>
          <button @click="addToBag(product)" v-if="!isInBag(product.id)">Add to Bag</button>
          <button class="remove" v-else @click="removeFromBag(product.id)">&#10060;Remove From Bag</button>
        </div>
        <div class="pageControl" v-if="this.products.total">
          <button class="prevPage" @click="firstPage()" v-if="!hidePrev()">&#60;&#60;</button>
          <button class="prevPage" @click="prevPage()" v-if="!hidePrev()">&#60;</button>
          <button class="nextPage" @click="nextPage()" v-if="!hideNext()">&#62;</button>
          <button class="prevPage" @click="lastPage()" v-if="!hideNext()">&#62;&#62;</button>
        </div>
    </div>

  
  </div>
</template>

<script>

import Aside from '@/components/Aside.vue'
import individualProduct from '@/components/individualProduct.vue'
import shared from '@/shared'

export default {

  components: {
    Aside,
    individualProduct
  },
  
  name: 'Home',

  data() {
    return {
      inBag : this.$store.state.inBag,
      url : {baseUrl:"https://dummyjson.com/products", category:"", limit: "?limit=9", skipCode:"&skip=" ,skip:0}
    }
  },

  methods: {

    nextPage() {
      this.url.baseUrl = this.currUrl.baseUrl;
      this.url.skip = parseInt(this.currUrl.skip) + 9;
      this.$store.dispatch('loadProductsAction', this.url);
      },

    prevPage() {
      this.url.baseUrl = this.currUrl.baseUrl;
      this.url.skip = parseInt(this.currUrl.skip) - 9;
      this.$store.dispatch('loadProductsAction', this.url);
      },

    firstPage() {
      this.url.baseUrl = this.currUrl.baseUrl;
      this.url.skip = 0;
      this.$store.dispatch('loadProductsAction', this.url);
    },

    lastPage() {
      this.url.baseUrl = this.currUrl.baseUrl;
      this.url.skip = this.products.total - (this.products.total % 9);
      this.$store.dispatch('loadProductsAction', this.url);
    },

    individualProductPushPopUp(product){
      this.$refs.individualProductComponent.pushPopUp(product);
    },

    hideNext() {
      if (this.currUrl.skip+9 >= this.products.total){
        return true;
      }
    },

    hidePrev() {
      if (this.currUrl.skip-9 < 0){
        return true;
      }
    }
    
  },

  created() {
    this.$store.dispatch('loadProductsAction', this.url);
    this.isInBag = shared.isInBag;
    this.addToBag = shared.addToBag;
    this.removeFromBag = shared.removeFromBag;
  },

  computed: {
    products() {
      var products = this.$store.state.allProducts;
      return products;
    },

    currUrl() {
      var url = this.$store.state.currUrl;
      return url;
    }
  }
}
</script>

<style lang="scss">

  .home {
    display: flex;
    position: relative;

    span {
      position: absolute;
      left: 170px;
      top:-15px;
      background-color: #929292;
      height: 15px;
      width: auto;
      padding: 5px;
      font-size: 12px;
      border-radius: 3px;
      color:rgb(223, 220, 220);
      display: flex;
      justify-content: center;
      cursor: pointer;

      @media only screen and (max-width: 640px){
        left: 30px;
      }

      img {
        height: 100%;
      }
    }

    .products {
      z-index: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: relative;


      .product {
        flex: 0 0 30%;
        box-sizing: border-box;  
        box-shadow: 4px 4px 15px 0 rgba(0,0,0,0.2);
        padding: 0px;
        margin: 8px;
        height: 360px;
        cursor: pointer;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }
        
        .product-image {
          margin: 20px auto;
          width: 175px;
          height: 180px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4 {
          margin: 12px auto;
          font-size: 14px;
          max-width: 70%;
          height: 10%;
          font-weight: normal;
        }

        p.price {
          font-size: 20px;
          font-weight: bold;
          margin: 10px auto;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;
          max-width: 175px;

          &:hover {
            opacity: 0.8;
          }

          &.remove {
            background-color: transparent;
            border: none;
            color: black;
          }
        }
      }
      .pageControl {
        display: block;
        position: absolute;
        bottom: 0;
        translate: 0 40px;
        
          button {
          width: 50px;
          height: 25px;
          color: #ffffff;
          background-color: #000000;
          font-weight: bold;
          border: 1px solid white;
          cursor: pointer; 
  
          &:disabled {
            opacity: 0.5;
              }
        }
      }
    }
  }


</style>
