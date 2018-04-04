import {
  GET_CHANNELS,
  SET_MESSAGES
} from './mutation-types'

const get_message_path = cname => 'https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels/' + cname + '/messages'

async function fetch_get_messages (cname) {
  const response = await fetch(get_message_path(cname))
  const json = await response.json()
  return json.messages
}

export default {
  // [SET_MESSAGE] ({commit}, message) {
  //   commit(SET_MESSAGE, message)
  // },
  [GET_CHANNELS] ({commit}) {
    // fetch('https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels').then((response) => {
    //   return response.json()
    // }).then((json) => {
    //   commit(GET_CHANNELS, json.channels)
    // })
    async function fetch_api(){
      const response = await fetch('https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels')
      const json = await response.json()
      commit(GET_CHANNELS, json.channels)
    }
    fetch_api()
  },
  async GET_MESSAGES ({commit}, cname) {
    const messages = await fetch_get_messages(cname)
    commit(SET_MESSAGES, messages)
  },
  async POST_MESSAGES ({commit}, {cname, message}) {
    const response = await fetch(get_message_path(cname), {
      method: 'POST',
      body: JSON.stringify({
        'body': message
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    if(json.result === 'ok') {
      const messages = await fetch_get_messages(cname)
      commit(SET_MESSAGES, messages)
    }
  }
}
