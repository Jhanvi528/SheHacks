import React from 'react'
function Youtube () {
  return (
    <div id='tutorials-section'>
      <div className='yt-video-main'>
        <h4
          style={{
            color: 'white',
            textAlign: 'left',
            marginLeft: '6%',
            paddingBottom: '2%'
          }}
        >
          Some Videos By Our Artisans:
        </h4>
        <div className='yt-tutorial'>
          <div className='yt-video'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/9VLGPg0IxzM'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
          <div className='yt-video'>
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/dF2xGOlrOuY'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Youtube
