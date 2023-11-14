<template>
    <aside v-if="this.categories">
      <div class="menu" @click="showMenu()">&nbsp;&nbsp;&nbsp;&#62;</div>
      <h3>Categories:</h3>
      <div class="table">
      <ul v-for="(category, index) in this.categories" :key="index" :class="{selected: isSelected(category)}">
          <li
          @mouseover="this.showPush(category)" 
          @mouseleave="this.hide()"
          @click="categoryLoad(categoryLoadUrl, category), showMenu()"
          >{{ category }}
            <Transition name="width"><div class="underline" v-if="showUndeline(category)"></div></Transition>
          </li>
      </ul>
    </div>
  </aside>
  </template>
  
  <script>

  import shared from '@/shared'
  
  export default {
    name: 'Aside',
  
    data() {
      return {
        show: undefined,
        categoryLoadUrl: {baseUrl: "https://dummyjson.com/products/category/", category:"", limit: "?limit=9", skipCode:"&skip=", skip: 0},
        position: "left",
        selectedCategory: undefined
      }
    },
  
    methods: {
      showPush(category) {
        this.show = category;
      },

      hide() {
        this.show = undefined;
      },

      showUndeline(category) {
        if (this.show == category) {
          if (this.currUrl.category == category){
            return false;
          } else {
            return true;
          }
        }
      },

      showMenu() {
        var aside = document.getElementsByTagName("aside");
        var menu = document.getElementsByClassName("menu");
        if (window.innerWidth <= 640){
          if (this.position == "left"){
            aside[0].style.left = "0";
            menu[0].innerHTML = "&nbsp;&nbsp;&nbsp;&#60;";
            this.position = "right"
          } else {
            aside[0].style.left = "-160px";
            menu[0].innerHTML = "&nbsp;&nbsp;&nbsp;&#62;";
            this.position = "left";
          }
        }
      },

      isSelected(category){
        if(category == this.currUrl.category){
          return true;
        }
      }
    },

    mounted() {
      this.categoryLoad = shared.categoryLoad;
      this.$store.dispatch('loadCategoriesAction');
    },
  
    computed: {
      categories() {
          var categories = this.$store.state.categories;
          return categories;
      },

      currUrl() {
        var currUrl = this.$store.state.currUrl;
        return currUrl;
      }
    }
   
  }
  </script>
  
  <style lang="scss">
  
  aside {
    z-index: 1;
    display: inline-block;
    min-width: 150px;
    text-align: left;
    position: relative;
    translate: 0px 0px;

    @media only screen and (max-width: 640px){
      position: absolute;
      left: -160px;
      transition-duration: 0.3s;
    }

    h3{
      background-color: #ffffff;
    }
    
    .menu{
      z-index: 1;
      background-color: #ffffff;
      align-items: center;
      position:absolute;
      right: -25px;
      top: -15px;
      font-weight: bold;
      height: 50px;
      width: 30px;
      cursor: pointer;
      box-shadow: 3px 3px 6px -3px rgba(0,0,0,0.7);
      transition-duration: 0.5s;
      display: none;

      @media only screen and (max-width: 640px){
        display: flex;
      }
    }

    h3{
      margin: 0 0 10px 5px;
      text-decoration: underline;
      }

      .table{
        background-color: #ffffff;
      }

        ul {
        z-index: 1;
        list-style-type: none;
        text-align: left;
        padding-inline-start: 0px;
        margin: 0;
        box-shadow: 2px 2px 6px -3px rgb(0,0,0);
        cursor: pointer;
        padding: 5px;

        &:hover{
          color: #007bff;
        }

        &.selected {
          translate: 5px;
          box-shadow: 5px 5px 7px -3px rgba(0,0,0,0.7);
          padding-left: 10px;
        }

        &.selected:hover {
          color: #000000;
          cursor: default;
        }

            .width-enter-active {
              animation: bounce-in 0.3s;
            }
            .width-leave-active {
              animation: bounce-in 0.3s reverse;
            }
            @keyframes bounce-in {
              0% {width: 0;}
              12% {width: 12%;}
              25% {width: 25%;}
              50% {width: 50%;}
              75% {width: 75%;}
              87% {width: 87%;}
              100% {width: 100%;}
            }

            .underline{
                background-color: black;
                height: 2px;
                width: 100%;
                }
        }
    }
  </style>