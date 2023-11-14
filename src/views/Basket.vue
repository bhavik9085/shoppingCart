<template>
  <div class="basket">
    <div class="empty" v-if="this.inBag.length < 1">
      <img src="@/img/download.svg" style="height:200px">
      <h3>Please add Something In the Bag</h3>
    </div>
    <div class="items" v-else>

      <div class="item" v-for="(product, index) in inBag" :key="index">
        <div class="remove" @click="removeFromBag(product.id)">Remove item</div>
        <div class="photo"><img :src="product.thumbnail" alt=""></div>
        <div class="description">{{ product.description }}</div>
        <div class="price">
          <span class="quantity-area">
            <button :disabled="product.quantity <= 1" @click="product.quantity--; this.$store.dispatch('inBagAction', this.inBag);">-</button>
            <span class="quantity">{{product.quantity}}</span>
            <button @click="product.quantity++; this.$store.dispatch('inBagAction', this.inBag);">+</button>
          </span>
          <span class="amount">US$ {{(product.price * product.quantity).toFixed(2)}}</span>
        </div>
      </div>

      <div class="grand-total"> Grand Total: US$ {{grandTotal()}}</div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Basket',

  data() {
    return {
      inBag : this.$store.state.inBag
    }
  },

  methods: {
    removeFromBag (id){
      if(confirm("You are about to remove this item from the bag!!!")){
        this.inBag = this.inBag.filter(function(products){return products.id != id;});
        this.$store.dispatch('inBagAction', this.inBag);
      }
    },

    grandTotal() {
      var total=0;
      for (var a=0; a<this.inBag.length; a++){
        total += this.inBag[a].quantity * this.inBag[a].price;
      }
      return total.toFixed(2);
    }
  },

  computed: {
    
  }
 
}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {
            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 100px;
          max-height: 100px;
        }
      }

      .description {
        padding-left: 10px;
        box-sizing: border-box;
        max-width: 50%;

        @media only screen and (max-width: 640px){
          font-size: 12px;
        }

      }

      .price {
        .amount {
          font-size: 16px;          
          display: block;
          margin-top: 10px; 

          @media only screen and (max-width: 640px){
            font-size: 12px;
          }
        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;

          @media only screen and (max-width: 640px){
          font-size: 18px;
        }
      }

  }

}

</style>
