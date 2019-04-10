<template>
  <div id="app">
    <!-- <router-link :to="{path:'/'}">Home</router-link>
    <router-link :to="{path:'/test/1'}">Test 1</router-link>
    <router-link :to="{path:'/test/2'}">Test 2</router-link>
    <router-link :to="{path:'/test/3'}">Test 3</router-link>
    
    <router-view></router-view>-->
    <navbar @search="search"></navbar>
    <main role="main">
      <hero></hero>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <router-view></router-view>
              <!-- <inventory @newItemAdded="addCartItem" :items= "items"></inventory> -->
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
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Hero from "./components/Hero";

export default {
        components: {
            Navbar,
            Cart,
            Hero
        },
        data() {
            return {
                items: [],
                cart: []
            };
        },
        mounted() {
            this.items = data;
        },
        methods: {
            search(keyword) {
                this.items = data.filter(item => {
                    return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
                });
            },
            addCartItem(item) {
            this.cart.push(item);
            }
        }
};
</script>

<style>
</style>
