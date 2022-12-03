<template>
    <div class="main">
        <Intrigar :logged_user="get_logged_user()" />
        <div class="container-posts">
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
import onDelPost from "../events/onDelPost"

export default {
    name: "Main",
    props: ["users"],
    components: {
        Intrigar,
        Post
    },
    data() {
        return {
            posts: [
                {id: 1, user_id: 3, content: "Partiu Programar #VueJS", qtt_like: 5, qtt_reintrig: 0, date: new Date("2022-01-01 17:55:13")},
                {id: 2, user_id: 6, content: "Partiu Programar #VueJS", qtt_like: 10, qtt_reintrig: 3, date: new Date("2022-02-02 19:23:27")},
                {id: 3, user_id: 5, content: "Partiu Programar #VueJS", qtt_like: 15, qtt_reintrig: 1, date: new Date("2022-03-03 10:15:33")},
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

            return Math.max(...list_id) + 1
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

        onDelPost.$on("del-post", (post) => {
            const user_id = this.get_logged_user().id

            if (user_id != post.user_id) {
                return
            }

            for (let i = 0; i < this.posts.length; i += 1) {
                const p = this.posts[i]
                
                if (p.id == post.id) {
                    this.posts.splice(i, 1)
                    return
                }
            }
        })
    },
    destroyed() {
        onAddPost.$off("add-post")
        onDelPost.$off("del-post")
    }
}
</script>

<style scoped>
    .main {
        width: 600px;
        padding: 5px;
    }

    .container-posts {
        margin-top: 10px;
    }
</style>
