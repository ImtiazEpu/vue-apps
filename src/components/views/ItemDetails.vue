<template>
        <main role="main">
        <div v-if="item" class="container">
            <section class="jumbotron text-center py-2">
                <div class="container ">
                    <h4 class="jumbotron-heading">Product Details</h4>
                </div>
            </section>
            <div class="album py-3 bg-light">
                <div class="container">
                    <div class="row m-0">
                        <div class="col-lg-5 left-side-product-box pb-3">
                            <img :src="item.photo" class="border p-3">
                        </div>
                        <div class="col-lg-7">
                            <div class="right-side-pro-detail border p-3 m-0">
                                <div class="row">
                                    <div class="col-lg-12">
                                        
                                        <p class="m-0 p-0">{{item.title}}</p>
                                    </div>
                                    <div class="col-lg-12">
                                        <p class="m-0 p-0 price-pro">${{item.price}}</p>
                                        <hr class="p-0 m-0">
                                    </div>
                                    <div class="col-lg-12 pt-2">
                                        <h5>Product Detail</h5>
                                        <span>{{item.description}}</span>
                                        <hr class="m-0 pt-2 mt-2">
                                    </div>
                                
                                    <div class="col-lg-12 mt-3">
                                        <div class="row">
                                            <div class="col-lg-12 pb-2">
                                                <a href="#" class="btn btn-danger btn-block">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h4 v-else>Loading...</h4>
    </main>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            item:null
        }
    },
    mounted(){
        this.fetchItem()
    },
    methods:{
        fetchItem(){
            var self = this
            axios.get('http://localhost:3000/item/'+this.$route.params.id).then(response =>{
                self.item = response.data
            })
        }
    }
}
</script>

<style>

</style>
