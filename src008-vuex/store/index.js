import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    // ...
    actions:{
        addOdd(context, val){
            if(context.state.count%2){
                context.commit('increment',val);
            }
        },
        addWait(context, val){
            setTimeout(() => {
                context.commit('increment',val);
            }, 500);
        }
    },
    mutations:{
        increment(state,val){
            state.count+=val;
        },
        decrement(state, val){
            state.count-=val;
        },
        addPerson(state, personObj){
            state.personList.unshift(personObj);
        }
    },
    state:{
        count:0,
        school:'尚硅谷',
        subject:'计算机',
        personList:[]
    },
    getters:{
        bigSum(state){
            return state.count*10;
        }
    }
})

export default store;