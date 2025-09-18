const song = document.getElementById("song");
const progress = document.getElementById("progress");
let ytPlayer = null;
let currentMode = "local"; // "local" | "youtube"

// Hàm reset youtube khi chuyển bài local
function stopYouTubeIfPlaying() {
  if (ytPlayer) {
    ytPlayer.stopVideo();
    ytPlayer.destroy();
    ytPlayer = null;
  }
  currentMode = "local";
  document.getElementById("ctrlIcon").className = "fa-solid fa-pause";
}

// ----------- Các bài local -----------
function pictureChange1() {
  stopYouTubeIfPlaying();
  document.getElementById('theImage').src = "https://i.pinimg.com/564x/7b/44/e8/7b44e8a0be6fb1a0c4ce3647f6d43f68.jpg";
  document.getElementById('head_title').textContent = 'Merry Go Out';
  document.getElementById('author').textContent = 'Gibli Sudio';
  document.getElementById('song-audio').src = "Merry Go Out of Life.mp3";
  song.load();
  song.play();
}

function pictureChange2() {
  stopYouTubeIfPlaying();
  document.getElementById('theImage').src = "https://gocdoday.com/wp-content/uploads/2022/11/qmg-1162-edit-3248.jpg";
  document.getElementById('head_title').textContent = 'Dự Báo Thời Tiết';
  document.getElementById('author').textContent = 'Grey D';
  document.getElementById('song-audio').src = "Grey D.mp3";
  song.load();
  song.play();
}

function pictureChange3() {
  stopYouTubeIfPlaying();
  document.getElementById('theImage').src = "https://c-cl.cdn.smule.com/rs-s80/arr/d6/07/70fc8d7b-9512-443f-974a-25b9bfdf06af.jpg";
  document.getElementById('head_title').textContent = 'Old Money';
  document.getElementById('author').textContent = 'Lana Del Ray';
  document.getElementById('song-audio').src = "Old Money.mp3";
  song.load();
  song.play();
}

function pictureChange4() {
  stopYouTubeIfPlaying();
  document.getElementById('theImage').src = "https://i.ytimg.com/vi/WRCoRYtiDDQ/mqdefault.jpg";
  document.getElementById('head_title').textContent = 'Call Me';
  document.getElementById('author').textContent = 'Wren Evans';
  document.getElementById('song-audio').src = "Call Me.mp3";
  song.load();
  song.play();
}

function pictureChange5() {
  stopYouTubeIfPlaying();
  document.getElementById('theImage').src = "https://i.pinimg.com/564x/a1/ef/03/a1ef0346f5ae9c6ca40c443b945e9ebd.jpg";
  document.getElementById('head_title').textContent = 'Always With Me';
  document.getElementById('author').textContent = 'Gibli Studio';
  document.getElementById('song-audio').src = "Always With Me.mp3";
  song.load();
  song.play();
}

function pictureChange6() {
  stopYouTubeIfPlaying();
  document.getElementById('theImage').src = "https://i.pinimg.com/564x/f0/8e/8c/f08e8c31588cdbc2dd3b4211ff24b540.jpg";
  document.getElementById('head_title').textContent = 'Vết Mưa';
  document.getElementById('author').textContent = 'Vũ Cát Tường';
  document.getElementById('song-audio').src = "Vết Mưa.mp3";
  song.load();
  song.play();
}

function pictureChange7() {
  stopYouTubeIfPlaying();
  document.getElementById('theImage').src = "https://i.pinimg.com/564x/1f/8b/b2/1f8bb20fb049fc7a5aff34e21b3388c1.jpg";
  document.getElementById('head_title').textContent = '23:40';
  document.getElementById('author').textContent = 'Hào';
  document.getElementById('song-audio').src = "23h40.mp3";
  song.load();
  song.play();
}

// ----------- Progress update -----------
song.ontimeupdate = function () {
  if (currentMode === "local") {
    progress.value = (song.currentTime / song.duration) * 100 || 0;
  }
};
progress.oninput = function () {
  if (currentMode === "local") {
    song.currentTime = (progress.value / 100) * song.duration;
  } else if (currentMode === "youtube" && ytPlayer) {
    const dur = ytPlayer.getDuration();
    ytPlayer.seekTo((progress.value / 100) * dur, true);
  }
};

// ----------- Popup YouTube -----------
function add_ytb() {
  const popup = document.getElementById("yt-popup");
  popup.style.display = "flex";
  popup.style.transform = "translateX(100px)";
  popup.style.opacity = "0";
  popup.style.transition = "transform 0.3s ease, opacity 0.3s ease";
  setTimeout(() => {
    popup.style.transform = "translateX(0)";
    popup.style.opacity = "1";
  }, 10);
}
function closePopup() {
  const popup = document.getElementById("yt-popup");
  popup.style.transform = "translateX(100px)";
  popup.style.opacity = "0";
  popup.style.transition = "transform 0.3s ease, opacity 0.3s ease";
  setTimeout(() => {
    popup.style.display = "none";
    popup.style.transform = "translateX(0)";
    popup.style.opacity = "1";
  }, 300);
}

// Lấy videoId từ link
function extractYouTubeID(url) {
  const patterns = [
    /[?&]v=([\w-]{11})/,       // youtube.com/watch?v=xxxx
    /youtu\.be\/([\w-]{11})/,  // youtu.be/xxxx
    /embed\/([\w-]{11})/       // youtube.com/embed/xxxx
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

// Load YouTube video
function loadYouTube() {
  const url = document.getElementById("yt-link").value;
  const videoId = extractYouTubeID(url);
  if (!videoId) { alert("Link không hợp lệ"); return; }

  // stop local
  song.pause();

  if (ytPlayer) ytPlayer.destroy();

  ytPlayer = new YT.Player("yt-player-container", {
    height: "1", width: "1",
    videoId: videoId,
    playerVars: { autoplay: 1 },
    events: {
      onReady: () => {
        currentMode = "youtube";
        ytPlayer.playVideo();
        document.getElementById("ctrlIcon").className = "fa-solid fa-pause";
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) {
          document.getElementById("ctrlIcon").className = "fa-solid fa-play";
        }
      }
    }
  });

  closePopup();
}

// ----------- Play/Pause chung -----------
function playPause() {
  if (currentMode === "local") {
    if (song.paused) {
      song.play();
      document.getElementById("ctrlIcon").className = "fa-solid fa-pause";
    } else {
      song.pause();
      document.getElementById("ctrlIcon").className = "fa-solid fa-play";
    }
  } else if (currentMode === "youtube" && ytPlayer) {
    const state = ytPlayer.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
      ytPlayer.pauseVideo();
      document.getElementById("ctrlIcon").className = "fa-solid fa-play";
    } else {
      ytPlayer.playVideo();
      document.getElementById("ctrlIcon").className = "fa-solid fa-pause";
    }
  }
}

// ----------- Load YouTube API -----------
(function () {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);
})();
