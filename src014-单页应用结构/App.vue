<template>
    <div>
        <Test>
            <!-- 向子组件传入元素 -->
            <a href="#">Your profile</a>
        </Test>
        <br />
        <hr />
        <br />
        <Test2>
            <template v-slot:header="">
                <h1>Here might be a page title</h1>
            </template>

            <!-- <template v-slot:main>
                <h1>这里是main</h1>
            </template> -->

            <!-- 带有v-slot的template外的内容将被传递给default插槽 -->
            <h1>这里是main</h1>
            <p>A paragraph for the main content.</p>
            <p>Another paragraph.</p>

            <template v-slot:footer="">
                <h1>这里是footer</h1>
            </template>
        </Test2>
        <br>
        <hr>
        <br>
        <Test3>
            <template v-slot="{user} ">
                {{user.name}}
            </template>

            <template v-slot:other="{user} ">
                {{user.age}}
                
            </template>
        </Test3>
    </div>
</template>

<script>
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";
import Test3 from './components/Test3.vue';

export default {
    name: "App",
    components: { Test, Test2, Test3 },
};
</script>

<style>
</style>