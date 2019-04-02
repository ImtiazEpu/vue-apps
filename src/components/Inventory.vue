<template>
    <div class="row">
        <div v-for="(item, index) in items" :key="index" class="card mb-3 ml-3 shadow-sm" style="width:16rem">
            <img :src="item.photo">
            <div class="card-body">
                <p class="card-text">{{item.title}}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button @click="addToCart(item)" class="btn btn-sm btn-outline-secondary">Add to Cart</button>
                    </div>
                    <strong class="text-muted">${{item.price}}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['items'],
        methods:{
            addToCart(item){
                this.$emit('newItemAdded', item)
            }
        }
    }
</script>

<style>

</style>
