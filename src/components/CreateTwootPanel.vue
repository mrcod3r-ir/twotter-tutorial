<template>
    <form class="user-profile__create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded':newTwootCharacterCount > 180}">
        <label for="newTwoot"><strong>New Twoot </strong>({{newTwootCharacterCount}}/180)</label>
        <textarea id="newTwoot" rows="4" v-model="newTwootContent"></textarea>
        
        <div class="user-profile__create-twoot-type ">
            <label for="newTwootType">
                <strong>Type:</strong>
            </label>
            <select id="newTwootType" v-model="selectedTwootType">
                <option :value="option.value" v-for="(option,index) in twootTypes" :key="index">
                    {{option.name}}
                </option>
            </select>
        </div>
        <button>
            Twoot!
        </button>
        <br>
        newTwootContent : {{newTwootContent}}
        <br>
        selectedTwootType : {{selectedTwootType }}
        <br>
        user {{user }}
    </form>
</template>

<script>
export default {
    name:"CreateTwootPanel",
    data() {
        return {
            newTwootContent:'',
            selectedTwootType:'draft',
            twootTypes:[
                {value:'draft',name:'Draft'},
                {value:'instant',name:'Instant Twoot'},
            ],
            
        }
    },
    computed:{
        newTwootCharacterCount(){
            return this.newTwootContent.length;
        }
    },
    methods: {
        createNewTwoot() {
            if(this.newTwootContent && this.selectedTwootType !== 'draft') {
                
                this.$emit('add-twoot',this.newTwootContent)
                this.newTwootContent = ''
            }
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