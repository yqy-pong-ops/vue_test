<template>
  <div class="container">
    <Category>
        <template v-slot:header>
            我是头部    
        </template>

        <template v-slot:body>
            <h3>我是body</h3>
            <ul>
                <li v-for="(game) in games" :key="game.id">
                    {{game.name}}
                </li>
            </ul>
        </template>
        <template v-slot:footer>
            我是底部
        </template>

        <template v-slot:persons="{persons} ">
            <h3>我是persons</h3>
            <ul>
                <li v-for="(person) in persons" :key="person.id">
                    {{person.name}}
                </li>
            </ul>
        </template>
    </Category>
    <!-- <Category></Category>
    <Category></Category> -->
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
    name:'App',
    components:{Category,},
    data() {
        return {
            games:[
                {id:'001',name:'原神'},
                {id:'002',name:'原神'},
                {id:'003',name:'原神'},
            ]
        }
    },

}
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>