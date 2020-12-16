<template>
    <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded':newTwootCharacterCount > 180}">
        <label for="newTwoot"><strong>New Twoot </strong>({{newTwootCharacterCount}}/180)</label>
        <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"></textarea>
        
        <div class="user-profile__create-twoot-type ">
            <label for="newTwootType">
                <strong>Type:</strong>
            </label>
            <select id="newTwootType" v-model="state.selectedTwootType">
                <option :value="option.value" v-for="(option,index) in state.twootTypes" :key="index">
                    {{option.name}}
                </option>
            </select>
        </div>
        <button>
            Twoot!
        </button>
    </form>
</template>

<script>
import {reactive,computed} from 'vue'
export default {
    name:"CreateTwootPanel",
    setup(props,ctx) {
        const state = reactive({
            newTwootContent:'',
            selectedTwootType:'draft',
            twootTypes:[
                {value:'draft',name:'Draft'},
                {value:'instant',name:'Instant Twoot'},
            ],
        })

        const newTwootCharacterCount = computed(()=> state.newTwootContent.length)

        function createNewTwoot() {
            if(state.newTwootContent && state.selectedTwootType !== 'draft') {
                
                ctx.emit('add-twoot',state.newTwootContent);
                state.newTwootContent = '';
            }
        }

        return {
            state,newTwootCharacterCount,createNewTwoot
        }
    },


    
}
</script>

<style lang="scss" scoped>
.user-profile__create-twoot {
    margin-top: 20px;
    margin-right: 50px;
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    text-align: left;

    textarea {
        border: solid 1px #dfe3e8;
        border-radius: 5px;
        margin: 20px 0;
        width: 100%;
        
    }

    .create-twoot-panel__submit {
        display: flex;
        justify-content: space-between;

        .create-twoot-type {
            padding:10px 0;
            margin-right: auto;
        }

    }
    button {
        padding: 5px 20px;
        margin: auto 0;
        border-radius: 5px;
        border: none;
        background-color: deeppink;
        color: white;
        font-weight: bold;
        cursor:pointer;
    }

    
    &.--exceeded {
        color:red;
        border-color:red;

        button {

            background-color: red;
            border:red;
            color:white;
            pointer-events: none;
        }

    }
}
#newTwootType {
    border-radius: 3px;
    margin-left: 20px;
}
// .user-profile__create-twoot {
//     display: flex;
//     flex-direction: column;
//     margin-right: 50px;
//     padding: 20px;
//     border-radius: 5px;

//     textarea {
//         border-radius: 5px;
//         border:solid 1px 
//     }
    
// }

</style>