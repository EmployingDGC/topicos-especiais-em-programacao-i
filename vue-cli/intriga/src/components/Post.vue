<template>
    <div class="post">
        <span
            class="trash-can"
            @click="del_post"
        ><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"/></svg></span>
        <User :user="user" :enabled_infos="true" />
        <p>{{ post.content }}</p>
        <span class="date">Postado em {{ _format_date(post.date) }}</span>
        <div class="interact">
            <a href="#">
                <span><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg></span>
                <span>{{ 0 }}</span>
            </a>
            <a href="#">
                <span><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg></span>
                <span>{{ post.qtt_reintrig }}</span>
            </a>
            <a href="#">
                <span><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg></span>
                <span>{{ post.qtt_like }}</span>
            </a>
            <a href="#">
                <span><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg></span>
                <span></span>
            </a>
        </div>
    </div>
</template>

<script>
import User from "./User.vue"

import { format_date } from "../utils/date"
import onDelPost from "../events/onDelPost"

export default {
    name: "Post",
    props: ["user", "post"],
    components: {
        User
    },
    data() {
        return {
            
        }
    },
    methods: {
        _format_date(date) {
            return format_date(date)
        },
        del_post() {
            onDelPost.$emit("del-post", this.post)
        }
    }
}
</script>

<style scoped>
    .post {
        padding: 16px;
        cursor: pointer;
        position: relative;
    }

    .post:hover {
        background-color: var(--color-background-button-hover-white);
    }

    .interact {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 10px;
    }

    .interact a {
        display: flex;
        align-items: center;
    }

    .interact a span:first-child {
        margin-right: 5px;
    }

    svg {
        fill: var(--color-text-gray);
        width: 14px;
        height: 14px;
    }

    p {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .date {
        font-size: .8rem;
    }

    .trash-can {
        position: absolute;
        right: 5px;
        top: 5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .trash-can:hover {
        background-color: var(--color-background-button-hover-white);
    }

    .trash-can:hover svg {
        fill: red;
    }

    .trash-can svg {
        fill: var(--color-text-gray);
    }
</style>
