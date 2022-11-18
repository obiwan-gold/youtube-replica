
async function grabData() {
  const res = await fetch('http://localhost:3003/videos')
  // console.table(res)
  const data = await res.json();
  // if (data.Response == "True") 
  // console.table(data)
  createVideoPreview(data);
  // console.log(`something is working`)
}
grabData()

const videoGrid = document.querySelector('.video-grid')

function createVideoPreview(videos) {
  videos.forEach(video => {
    const { thumbnail, duration, authorPicture, title, author, stats } = video

    let videoPreview = document.createElement('div')
    videoPreview.classList.add('video-preview')
    videoPreview.innerHTML = `
       <div class="thumbnail-container">
       <img class="thumbnail" src="${(thumbnail != "N/A") ? thumbnail : "image_not_found.png"}">
       <div class="video-time">${duration}</div>
     </div>
     <div class="video-info-grid">
       <div class="channel-picture">
         <img class="profile-picture" src="${(authorPicture != "N/A") ? authorPicture : "image_not_found.png"}">
       </div>
       <div class="video-info">
         <p class="video-title">
           ${title}
         </p>
         <p class="video-author">
           ${author}
         </p>
         <p class="video-stats">
           ${stats}
         </p>
       </div>
     </div>
    
    `;
    videoGrid.appendChild(videoPreview)
  })
}


