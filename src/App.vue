<template>
  <div id="app">
     <navbar></navbar>
      <main role="main">
        <hero></hero>
          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">
                <div class="col-md-9">
                  <inventory></inventory>
                </div>
                <div class="col-md-3 mb-4">
                  <cart></cart>
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

export default {
  components:{
    Navbar,
    Cart,
    Inventory,
    Hero
  }
}
</script>

<style>

</style>
