interface Video {
  id: string
  views: number
  title: string
  createdAt: string
  thumbnail: string
  channel: {
    name: string
    avatar: string
  }
}

const video: Video = {
  id: '0',
  views: 1042299,
  createdAt: '2019-09-18T19:00:52Z',
  title: 'Slap House Mix 2020 | Spinnin Bass Boosted...',
  thumbnail:
    'https://i.ytimg.com/vi/Js6p_tkFM7o/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&amp;rs=AOn4CLCP2TecYGZST8cNgZl0KWdNp_8nPg',
  channel: {
    name: "Spinnin' Records",
    avatar:
      'https://yt3.ggpht.com/ytc/AKedOLQXBi2lvEiZsNllWfciqPkYUGibZxGIdsSqn1BIdA=s48-c-k-c0x00ffffff-no-rj'
  }
}

export const videos: Video[] = [video]

export default Video
