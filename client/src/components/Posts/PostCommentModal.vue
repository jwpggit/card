<template>
  <div class="modal comments-modal">
    <div class="modal-background" @click="$emit('commentsModal')"></div>
    <div class="modal-content">
      <!-- Any other Bulma elements you want -->
      <div class="card">
        <div class="card-content">
          <form class="media" @submit="handleSubmit">
            <div class="media-left">
            </div>
            <div class="field my-textarea">
              <div class="control"> 
                <textarea name="writer" placeholder="writer"></textarea>
                <textarea name="content" placeholder="content"></textarea>
              </div>
            </div>
            <button class="button">Send</button>
          </form>
          <Comment
            v-for="comment in oderComments"
            :key="comment.id"
            :comment="comment"
          />
        </div>
      </div>
      <!-- Any other Bulma elements you want -->
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('commentsModal')"
    ></button>
  </div>
</template>

<script>
import { addComment } from '@/services/posts'
import Comment from '@/comoinents/Posts/PostComment.vue'

export default {
  inject: ['GStore'],
  props: {
    post: {
      type: Object,
    },
  },
  components: { Comment },
  data() {
    return {
      postArr: this.post,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const postId = this.postArr.id
      const content = e.target.content.value
      addComment(postId, { content }).then((res) => {
        e.target.reset()
        this.postArr = res
      })
    },
  },
  components: { Comment },
  computed: {
    oderComments() {
      return this.postArr.comments.reverse()
    },
  },
}
</script>

<style scoped>
.my-textarea {
  width: 100%;
  margin: 0 10px;
}
.user-image {
  width: 48px;
  height: 48px;
  border-radius: 100vmax;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
