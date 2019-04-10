<template>
    <div v-if="!loading" class="row">
        <div v-for="(item, index) in items" :key="index" class="card mb-3 ml-3 shadow-sm" style="width:16rem">
            <router-link tag="div" :to="{ path:'/item/'+item.id}">
                <img :src="item.photo">
            </router-link>
            <div class="card-body">
                <router-link tag="div" :to="{ path:'/item/'+item.id}">
                    <p class="card-text">{{item.title}}</p>
                </router-link>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button @click="addToCart(item)" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                    </div>
                    <strong class="text-muted">${{item.price}}</strong>
                </div>
            </div>
        </div>
    </div>
    <h3 v-else>Loading ...</h3>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                loading:true,
                items: []
            }
        },
        mounted(){
            this.fetchInventory()
        },
        methods:{
            addToCart(item){
                this.$store.commit('addToCart',item)
            },
            fetchInventory(){
                var self = this
                axios.get('http://localhost:3000/items').then(response =>{
                        self.items = response.data
                        self.loading =false                          
                    //console.log(response)    
                })
            }
        }
    }
</script>

<style>

</style>
