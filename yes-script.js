let musicPlaying = false

window.addEventListener('load', () => {
  launchConfetti()

  const music = document.getElementById('bg-music')
  music.volume = 0.3
  music.play().catch(() => {})
  musicPlaying = true
  document.getElementById('music-toggle').textContent = '🔊'
})

function launchConfetti() {
  const colors = ['#2E86AB', '#F4A261', '#E9C46A', '#264653', '#6B8A99', '#fff', '#A8DADC']
  const duration = 6000
  const end = Date.now() + duration

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { x: 0.5, y: 0.3 },
    colors
  })

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval)
      return
    }

    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors
    })

    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors
    })
  }, 300)
}

function toggleMusic() {
  const music = document.getElementById('bg-music')
  if (musicPlaying) {
    music.pause()
    musicPlaying = false
    document.getElementById('music-toggle').textContent = '🔇'
  } else {
    music.play()
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
  }
}
