// Import whole DB
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
    videoPreview.classList.add('video-preview', 'pointer')
    videoPreview.innerHTML = `
       <div class="thumbnail-container">
       <img class="thumbnail" src="${(thumbnail != "N/A") ? thumbnail : "image_not_found.png"}">
       <div class="video-time">${duration}</div>
     </div>
     <div class="video-info-grid | grid">
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

const searchBar = document.getElementById('search-bar')
const searchButton = document.getElementById('search-button')
const resultGrid = document.createElement('section');
resultGrid.classList.add('result-grid', 'flex-column-center')

searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  videoGrid.innerHTML = "";
  resultGrid.innerHTML = "";
  //   console.log('click')
  // Click Button
  // Redirect to function OR redirect to link?
  // Link has to be built by a router
  // Make a form post 
  // express route accept post and 
  // path is the search inofrmation as req.params
  // use express url encoding middleware
  // pass back search 
  // serve asssets 
  let searchInput = (searchBar.value).trim();
  const URL = `http://localhost:3003/videos/search`;
  const searchResult = await fetch(`${URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: searchInput
    })
  })
  const results = await searchResult.json();
  resultsPage(results)
})

const main = document.querySelector('main')

async function resultsPage(results) {
  results.forEach(result => {
    const { thumbnail, duration, authorPicture, title, author, stats } = result

    let resultPreview = document.createElement('div')
    resultPreview.classList.add('result-preview', 'pointer', 'flex')
    resultPreview.innerHTML = `
       <div class="result-thumbnail-container">
       <img class="thumbnail" src="${(thumbnail != "N/A") ? thumbnail : "image_not_found.png"}">
       <div class="result-time">${duration}</div>
     </div>
     <div class="result-info-grid | grid">
       <div class="channel-picture">
         <img class="profile-picture" src="${(authorPicture != "N/A") ? authorPicture : "image_not_found.png"}">
       </div>
       <div class="result-info">
         <p class="result-title | fw-semi-bold fs-500">
           ${title}
         </p>
         <p class="result-stats">
           ${stats}
         </p>
         <p class="result-author">
           ${author}
         </p>
       </div>
     </div>
    `;
    resultGrid.appendChild(resultPreview)
  })
  main.append(resultGrid)
}

