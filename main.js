import './styles/consumed.scss'

window.addEventListener('DOMContentLoaded', (e) => {
    setSongListColumn()
    setBackHomeButton()
})

function setBackHomeButton() {
    const backHomeButton = document.querySelector("#backtohome")
    const mainElem = document.querySelector('main')

    backHomeButton.addEventListener('click', (e) => {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
        
        window.addEventListener('scroll', function scrolledToTop() {
            // Reset back to the main view once scrolled to the top
            // Note that this effect will take place even when the 
            // back button is not pressed, if it was pressed once before
            // Removing the event listener is kind of a mess
            // Just consider this a quirky thing
            if (window.scrollY === 0) {
                mainElem.classList.add('main-view')
                resetAllArticles()            

            }
        })
        
    })   
}

function resetAllArticles() {
    const trackArticles = document.querySelectorAll('.song-info')
    for (let trackArticle of trackArticles) {
        hideTrackArticle(trackArticle)
    }
}

function setSongListColumn() {
    const songList = document.querySelector("#song-list")
    const songs = songList.children
    const secondhalf = Math.floor(songs.length / 2)
    // with index starting from 0, the above will result in
    // index of the first song of the second half

    for (let i = 0; i < songs.length; i++) {

        // Set column location
        // first half on the left, second half on the right
        if (i < secondhalf) {
            songs[i].classList.add('left-side')
        }

        else {
            console.log(songs[i])
            songs[i].classList.add('right-side')
        }

        songs[i].addEventListener('click', () => viewSong(i))
    }
}


function viewSong(songIndex) {
    const mainElem = document.querySelector('main')
    const allSongArticles = document.querySelectorAll('.song-info')
    console.log(allSongArticles)

    mainElem.classList.remove('main-view')

    for (let i = 0; i < allSongArticles.length; i++) {
        if (i === songIndex) {
            //allSongArticles[i].classList.add('visible')
            showTrackArticle(allSongArticles[i])
        }
     
        else {
            hideTrackArticle(allSongArticles[i])
            //allSongArticles[i].classList.remove('visible')
        }       
    }
}

function showTrackArticle(trackElem) {
    trackElem.style.display = "block"
    setTimeout(() => trackElem.classList.add('visible'), 10)
}

function hideTrackArticle(trackElem) {
    trackElem.classList.remove('visible')
    trackElem.style.display = ""
}