<template>
    <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed bg-secondary text-white">
            <div>
            <span class="my-0">Product name</span>
            </div>
            <span class="my-0">Price</span>
        </li>
        <li v-for="(item, index) in items" :key="index" class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
            <h6 class="my-0">{{item.title}}</h6>
            <button class="btn btn-xs btn-danger" @click="removeItem(index)">--</button>
            </div>
            <span class="text-muted">${{item.price}}</span>
        </li>
        
        <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${{total}}</strong>
        </li>
        <li v-if="items.length >0" class="list-group-item d-flex justify-content-between">
            <button @click="checkout" class="btn btn-block btn-success" >Checkout</button>
        </li>

    </ul>             
</template>

<script>
export default {
    computed: {
      items(){
        return this.$store.getters.getCart
      },
          total() {
            var total = 0
            this.items.forEach(item => {
              total += parseFloat(item.price)
            })
            return total.toFixed(2)
          }
        },
        methods:{
            removeItem(index){
            this.$store.dispatch('removeItem', index)
          },
          checkout(){
            if(confirm('Are you sure to Checkout?')){
              this.$store.dispatch('clearCart')
            }
          }
        }
}
</script>

<style>

</style>
