<template>
  <div>
      <!-- 子组件中放置三个具名插槽 -->

      <header>
          <slot name="header"></slot>
      </header>

      <main>
          <!-- 不具名的插槽有一个默认的名字default -->
          <slot></slot>
      </main>

      <footer>
          <slot name="footer"></slot>
      </footer>
  </div>
</template>

<script>
export default {
    name:'Test2',
}
</script>

<style>

</style>