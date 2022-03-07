export const listenerOff = {
    beforeDestroy() {
        this.$off();
    },
};
