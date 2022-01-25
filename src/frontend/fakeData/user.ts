interface User {
  avatar: string
  subscriptions: [
    {
      logo: string
      name: string
    }
  ]
}

export const user = {
  avatar:
    'https://yt3.ggpht.com/52bJiKEiq5DSQ4ZRg41TCFB4FAkFL0q2GKCqFlsuP4ssKQhcYnsGmEow7YWWoj5cf1VI2HqsJHY=s88-c-k-c0x00ffffff-no-rj-mo',
  subscriptions: [
    {
      logo: 'https://yt3.ggpht.com/ytc/AKedOLQXBi2lvEiZsNllWfciqPkYUGibZxGIdsSqn1BIdA=s88-c-k-c0x00ffffff-no-rj',
      name: 'Spinning Records'
    }
  ]
}

export default User
