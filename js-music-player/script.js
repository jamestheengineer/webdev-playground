const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song titles
const songs = ['hey', 'summer', 'ukelele']

// Keep track of songs
let songIndex = 1

// Initially load song info into DOM
longSong(songs[songIndex])

// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}