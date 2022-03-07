import axios from 'axios';

import { nanoid } from 'nanoid';

export default{
    namespaced: true,
    actions:{
        addFromServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get')
            .then(res => {
                context.dispatch('addPerson',res.data);
            })
            .catch(err => {
                console.error(err); 
            })
        },
        addPerson(context,name){
            const personObj={
                id:nanoid(),
                name: name,
            };
            context.commit('addPerson',personObj);
        }
    },
    mutations:{
        addPerson(state, personObj){
            state.personList.unshift(personObj);
        }
    },
    state:{
        personList:[]
    }
}