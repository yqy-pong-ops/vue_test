<template>
    <div>
        <ul>
            <MyItem v-for="todo in todos" :key="todo.id" :todo="todo" :deleteItem="deleteItem"></MyItem>
        </ul>
    </div>
</template>
<script>
import MyItem from './MyItem.vue';
export default {
    name:'MyList',
    components:{
        MyItem,
    },
    props:['todos','deleteItem']
}
</script>
<style>
    
</style>