<template>
  <template v-for="(product,index) in this.products.products" :key="index">
    <Transition name="fade">
        <div class="individualProductContainer" v-if="displayProduct(product.id)">
            <div class="individualProduct">
                <div class="individualImage">
                    <button @click="prevImg(product.images.length)" class="prev">&#60;</button>
                    <img :src="product.images[this.currentIndex]" class="imgSlider">
                    <button @click="nextImg(product.images.length)" class="next">&#62;</button>
                </div>
                <div class="description">
                    <div class="individualTitle">{{ product.title }} 
                        <div class="individualCategory" @click="categoryLoad(this.categoryLoadUrl, product.category), close()">({{ product.category }})</div>
                    </div>
                    <p class="individualDescription">{{ product.description }}</p>
                    <div class="individualRating">Customer Ratings:&nbsp;<span class="ratingNumber">({{ product.rating }})</span>&nbsp;<div class="ratingImg" :style="{width: (product.rating/5)*100 + 'px'}"><img src="@/img/stars.png"></div></div>
                    <div class="individualAvailable">Available in Stock: {{ product.stock }}</div>
                    <div class="individualPrice">after applying discount of {{ product.discountPercentage }}% <strong>${{ product.price }}</strong></div>
                    <button @click="addToBag(product)" v-if="!isInBag(product.id)">Add to Bag</button>
                    <button class="remove" v-else @click="removeFromBag(product.id)">&#10060;Remove From Bag</button>
                    <div class="close" @click="close()">&#10060;</div>
                </div>
            </div>
        </div>
      </Transition>
    </template>
</template>
  
<script>

import shared from '@/shared'
  
  export default {
    name: 'individualProduct',
  
    data() {
      return {
        popUp: [],
        imagesLength: undefined,
        currentIndex: 0,
        inBag : this.$store.state.inBag,
        categoryLoadUrl: {baseUrl: "https://dummyjson.com/products/category/", category:"", limit: "?limit=9", skipCode:"&skip=", skip: 0},
      }
    },
  
    methods: {

    pushPopUp(product) {
      this.popUp.push(product);
    },

    displayProduct(id) {
      var found = this.popUp.find(function(products){ return products.id == id; });
      return found;
    },

    nextImg(imagesLength) {
      if (this.currentIndex < imagesLength-1){
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },

    prevImg(imagesLength) {
      if (this.currentIndex > 0){
        this.currentIndex--;
      } else {
        this.currentIndex = imagesLength-1;
      }
    },

    close() {
      this.popUp = [];
      this.currentIndex = 0;
    },

    },
  
    computed: {
      products() {
        var products = this.$store.state.allProducts;
        return products;
      }
    },

    created() {
      this.categoryLoad = shared.categoryLoad;
      this.isInBag = shared.isInBag;
      this.addToBag = shared.addToBag;
      this.removeFromBag = shared.removeFromBag;
    }
  }      
   
  

</script>
  
<style lang="scss">
  
        .fade-enter-active,
        .fade-leave-active {
          transition: opacity 0.5s ease;
        }

        .fade-enter-from,
        .fade-leave-to {
          opacity: 0;
        }

        .individualProductContainer{
          z-index: 2;
          position: fixed;
          background-color:rgba(0, 0, 0, 0.5);
          top:0;
          left:0;
          height: 2000px;
          width: 2000px;
          cursor: default;
        }

        .individualProduct {
            position: fixed;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            top:50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            max-height: 80%;
            min-width: 290px;
            padding: 20px;
            font-size: 15px;
            cursor: default;

            @media only screen and (max-width: 640px) {
              padding: 10px;
              font-size: 11px;
            }

            @media only screen and (max-width: 400px) {
              height: 75%;
              min-width: 290px;
            }

            .individualImage {
              display: flex;
              align-items: center;
              max-width: 300px;
              height: 300px;

              img {
                max-height: 100%;
                max-width: 100%;
              }

              button {
                position: absolute;
                cursor: pointer;
                color:#ffffff;
                border-radius: 0px;
                background-color: rgba(0, 0, 0, 0.5);
                border: none;
                height: 50px;
                font-weight: bold;
              }

              button.prev {
                left: 0;
              }

              button.next {
                right: 0;
              }
            }

            .description {
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              text-align: left;

              button {
                max-width: 150px;
                border: none;
                color: #fff;
                background-color: #007bff;
                border-radius: 100px;
                font-weight: 400;
                text-align: center;
                padding: 8px 16px;
                cursor: pointer;

                &:hover {
                  opacity: 0.8;
                }

                &.remove {
                  background-color: transparent;
                  border: none;
                  padding: 8px 8px;
                  color: black;
                }
              }

              .individualTitle{
                font-weight: bold;
                line-height: 40px;

                .individualCategory {
                  font-size: 10px;
                  display : inline-block;

                  &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                  }
                }
              }

              .individualRating {
                display: flex;
                font-size: 12px;
                line-height: 20px;
                /* text-decoration: underline; */

                .ratingNumber{
                  position:static;
                  background-color: #ffffff;
                  color: #000000;
                  font-size: 8px;
                  height: auto;
                  padding: 0;
                }

                .ratingImg {
                  overflow: hidden;
                  display: inline-block;
                }
              }

              .individualPrice{
                display: inline;
                font-size: 10px;
                line-height: 40px;

                & strong {
                  font-size: 20px;
                }
              }

              .close {
                position: absolute;
                top:5px;
                right: 5px;
                cursor: pointer;
                z-index: 2;
              }
            }
        }

</style>