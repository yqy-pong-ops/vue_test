<template>
    <div>
        <p>
            <slot v-bind:user="user"></slot>
        </p>
        <!-- 默认插槽 -->

        <!-- 其他插槽 -->
        <p>
            <slot name="other" v-bind:user="user"></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: "Test3",
    data() {
        return {
            user: {
                name: "张三",
                age: 18,
            },
        };
    },
};
</script>

<style>
</style>