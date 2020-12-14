<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
            <div class="user-profile__user-panel">
                <h1 class="user-profile__username">@{{state.user.username}}</h1>
                <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
                    Admin
                </div>
                <div class="user-profile__follower-count">
                    <strong>Followers : </strong> {{state.followers}}
                </div>
            </div>
            <CreateTwootPanel @add-twoot="addTwoot" />
        </div>
        
        
        <div class="user-profile__twoots-wraper">
            
            <TwootItem 
                v-for="twoot in state.user.twoots" 
                :key="twoot.id" 
                :username="state.user.username" 
                :twoot="twoot" 
                
            />
        </div>
    </div>
</template>

<script>
import TwootItem from './TwootItem';
import CreateTwootPanel from './CreateTwootPanel'
import {reactive} from 'vue'

export default {
    name:"UserProfile",
    components:{TwootItem,CreateTwootPanel},
    setup() {
        const state = reactive({
            followers:0,
            user:{
                id:1,
                username:'_MitchelRomney',
                firstName:'Mitchel',
                lastName:'Romney',
                email:'mitchellromney@theearthissquare.com',
                isAdmin:true,
                twoots:[
                    {id:1,content:'Twooter is Awesome !'},
                    {id:2,content:'Dont forget subscribe to the Twooter'}
                ]
            }
        })

        function addTwoot(twoot) {
            state.user.twoots.unshift({id: state.user.twoots.length+1,content: twoot})
        }
        return {
            state,addTwoot
        }
    },

    
}
</script>

<style lang="scss" scoped>

.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;

    .user-profile__follower-count {
        text-align: left;
        padding-top:10px ;
    }
    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border:1px solid #dfe3e8;

        h1 {
            margin: 0;
        }

    }
    .user-profile__admin-badge {
        background:rebeccapurple;
        color: white;
        border-radius: 5px;
        margin-right: auto;
        padding:0 10px;
        font-weight: bold;

    }
    .user-profile__twoots-wrapper {
        display: grid;
        grid-gap:10px ;
        margin-bottom: auto;
    }

}


</style>