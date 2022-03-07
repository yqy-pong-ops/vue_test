<template>
    <div>
        <!-- <h1>你好啊</h1> -->
        <!-- 组件内放置插槽用于存放传入的元素 -->
        <h2>
            <!-- 此插槽是默认插槽 -->
            <slot></slot>
        </h2>
    </div>
</template>

<script>
export default {
    name: "Test",
};
</script>

<style>
</style>