<template>
  <div id="app">
     <navbar @search="search"></navbar>
      <main role="main">
        <hero></hero>
          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">
                <div class="col-md-9">
                  <inventory @newItemAdded="addCartItem" :items= "items"></inventory>
                </div>
                <div class="col-md-3 mb-4">
                  <cart :items="cart"></cart>
                </div>
              </div>
            </div>
          </div>
      </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Inventory from './components/Inventory'
import Hero from './components/Hero'
import data from './data.js'

export default {
  components:{
    Navbar,
    Cart,
    Inventory,
    Hero
  },
  data(){
    return{
      items:[],
      cart:[]
    }
  },
  mounted(){
    this.items = data
  },
  methods:{
    search(keyword){
     this.items= data.filter(item=>{
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !==-1
      })
      
    },
    addCartItem(item){
      this.cart.push(item)
    }
  }
}
</script>

<style>

</style>
