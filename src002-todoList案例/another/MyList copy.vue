<template>
    <div>
        <ul>
            <MyItem v-for="todo in todos" :key="todo.id" :todo="todo" :toggleDone="toggleDone"></MyItem>
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
    props:['todos','toggleDone']
}
</script>
<style>
    
</style>