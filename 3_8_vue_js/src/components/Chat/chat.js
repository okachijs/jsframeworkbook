import { mapGetters, mapActions } from 'vuex'
import {
  GET_CHANNELS,
  // SET_MESSAGE
} from '../../store/mutation-types'
import MessageList from '../MessageList'

export default {
  name: 'chat',
  mounted(){
    this.GET_CHANNELS()
    this.GET_MESSAGES(this.$route.params.cname)
  },
  components: {
    'message-list': MessageList
  },
  computed: {
    ...mapGetters([
      'messages',
      'channels'
    ]),
  },
  beforeRouteUpdate(to, from, next) {
    this.GET_MESSAGES(to.params.cname)
    next()
  },
  methods: {
    ...mapActions([
      // SET_MESSAGE,
      GET_CHANNELS,
      "GET_MESSAGES",
      "POST_MESSAGES"
    ]),
    send_message(){
      // this.SET_MESSAGE(this.message)
      this.POST_MESSAGES({"cname": this.$route.params.cname, "message": this.message})
      this.message = ""
    }
  },
  data() {
    return {
      message: ""
    }
  }
}
