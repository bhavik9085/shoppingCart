export default {

    categoryLoad(categgoryLoadUrl, category){
        categgoryLoadUrl.category = category;
        this.$store.dispatch('loadProductsAction', categgoryLoadUrl);
      },

    isInBag(id){
        var inBag = this.$store.state.inBag;
        var found = inBag.find(function(products){ return products.id == id; });
        return found;
    },

    addToBag(product){
        product.quantity = 1;
        var inBag = this.$store.state.inBag;
        inBag.push(product);
        this.$store.dispatch('inBagAction', inBag);
    },
  
    removeFromBag(id){
        if(confirm("You are about to remove this item from the bag!!!")){
            var inBag = this.$store.state.inBag;
            inBag = inBag.filter(function(products){return products.id != id;});
            this.$store.dispatch('inBagAction', inBag);
        }
    }

  }