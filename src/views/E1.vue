<!--
 * @Author: Axiuxiu
 * @Date: 2022-03-01 10:57:39
 * @LastEditTime: 2022-03-01 11:42:21
 * @Description: dataset.source的对象数组格式
-->

<template>
    <div id="main"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
    name: "E1",
    mounted() {
        const inst = echarts.init(document.getElementById("main"));
        inst.setOption({
            title: {
                text: "对象数组",
            },
            legend: {},
            tooltip: {},
            dataset: {
                // dimensions:['product','count','score'],
                source: [
                    { product: "Matcha Latte", count: 823, score: 95.8 },
                    { product: "Milk Tea", count: 235, score: 81.4 },
                    { product: "Cheese Cocoa", count: 1042, score: 91.2 },
                    { product: "Walnut Brownie", count: 988, score: 76.9 },
                ],
            },
            xAxis: {
                type:'category',
            },
            yAxis: {},
            series: [
                { type:'bar' },
                { type:'bar' },
            ]
        });
    },
};
</script>

<style scoped>
#main {
    width: 600px;
    height: 400px;
}
</style>
