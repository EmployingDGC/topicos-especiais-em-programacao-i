<template>
    <div class="main">
        <Intrigar :logged_user="get_logged_user()" />
        <div>
            <Post
                v-for="p in posts"
                :key="p.id"
                :user="get_user(p.user_id)"
                :post="p"
            />
        </div>
    </div>
</template>

<script>
import Intrigar from "./Intrigar.vue"
import Post from "./Post.vue"

import onAddPost from "../events/onAddPost"

export default {
    name: "Main",
    props: ["users"],
    components: {
        Intrigar,
        Post
    },
    watch: {
        // posts() {
            
        // }
    },
    data() {
        return {
            posts: [
                {id: 1, user_id: 3, content: "Partiu Programar #VueJS", qtt_like: 5, qtt_reintrig: 0},
                {id: 2, user_id: 6, content: "Partiu Programar #VueJS", qtt_like: 10, qtt_reintrig: 3},
                {id: 3, user_id: 5, content: "Partiu Programar #VueJS", qtt_like: 15, qtt_reintrig: 1},
            ]
        }
    },
    methods: {
        get_next_post_id() {
            const list_id = []

            for (let i = 0; i < this.posts.length; i += 1) {
                const post = this.posts[i]

                list_id.push(post.id)
            }

            return Math.max(list_id) + 1
        },
        get_logged_user() {
            for (let i = 0; i < this.users.length; i += 1) {
                const user = this.users[i]
                
                if (user.logged) {
                    return user
                }
            }

            return null
        },
        get_user(id) {
            for (let i = 0; i < this.users.length; i += 1) {
                const user = this.users[i]
                
                if (user.id == id) {
                    return user
                }
            }

            return null
        }
    },
    created() {
        onAddPost.$on("add-post", (post) => {
            const id = this.get_next_post_id()

            this.posts.push({id, ...post})
        })
    },
    destroyed() {
        onAddPost.$off("add-post")
    }
}
</script>

<style scoped>
    .main {
        width: 600px;
        padding: 5px;
    }
</style>
