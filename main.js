const modal = document.getElementById("gameOverModal");
const guessInput = document.getElementById("guessInput");
const scoreBoard = document.getElementById("score");
const movieImage = document.getElementById("movieImage");
const modalContent = document.querySelector(".modal-content");

const movies = [
  {
    name: "Kill it",
    image:
      "https://i0.wp.com/bloganchoi.com/wp-content/uploads/2022/04/kill-it-1.jpg",
  },
  {
    name: "Hậu duệ mặt trời",
    image:
      "https://th.bing.com/th/id/R.2f2b4fe17589ba52e64af6c4622c26fc?rik=syJPdKldPBmSdQ&pid=ImgRaw&r=0",
  },
  {
    name: "Doremon",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.oE9iyaUOMyD1t258ZbdeLAHaEo&pid=Api&P=0&h=220",
  },
  {
    name: "hạ cánh nơi anh",
    image:
      "https://www.elle.vn/wp-content/uploads/2020/02/26/391753/nhung-bai-hoc-tinh-yeu-trong-phim-crash-landing-on-you.jpg",
  },
  {
    name: "shin cậu bé bút chì",
    image:
      "https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-shin-cau-be-but-chi-dep-de-thuong-tinh-nghich.jpg",
  },
  {
    name: "mật danh k2",
    image:
      "https://static2.vieon.vn/vieplay-image/carousel_web_v4_ntc/2021/04/12/ofdpki3k_1920x1080-matdanhk2-carousel_1920_1080.webp",
  },

  {
    name: "Khách sạn ánh trăng",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.KtjneXdgg-IWSn-dcDZvIwHaE8&pid=Api&P=0&h=220",
  },
  {
    name: "Bạn trai tôi là hồ ly",
    image:
      "https://afamilycdn.com/150157425591193600/2021/9/28/ban-trai-toi-la-ho-ly-cua-lee-dong-wook-kim-bum-thong-bao-tam-ngung-phat-song-5ac-5371451-1632811487684635309654.jpg",
  },
  {
    name: "Big mouth",
    image:
      "https://static1.dienanh.net/upload/202209/2f43003f-0451-4e56-a901-bd7b66c61f94.jpg",
  },
  {
    name: "Trùm hương cảng",
    image:
      "https://trainghiemso.vn/wp-content/uploads/2017/10/trum-huong-cang-review-featured.jpg",
  },
  {
    name: "liverpool",
    image:
      "http://getwallpapers.com/wallpaper/full/e/8/b/701507-liverpool-fc-wallpapers-2560x1600-lockscreen.jpg",
  },
  {
    name: "ac milan",
    image: "https://wallpapercave.com/wp/wc1739549.jpg",
  },
  {
    name: "Real mandrid",
    image:
      "https://media1.ledevoir.com/images_galerie/nwd_1250823_980088/image.jpg",
  },
  {
    name: "Man city",
    image:
      "https://cdn.newsbook.com.mt/wp-content/uploads/2023/06/11073512/WhatsApp-Image-2023-06-11-at-07.33.58.jpeg",
  },
  {
    name: "Faptv",
    image:
      "https://media.yeah1.com/files/uploads/editors/69/2022/05/28/wpLeWfwrUAGWy5R1IICaIunlq8LKAHx5Aqc6GtxT.jpg",
  },
  {
    name: "annabelle",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.hoM8c28HbUNdLp_nRFzYpQHaEo&pid=Api&P=0&h=220",
  },
  {
    name: "Bill gates",
    image:
      "https://heavy.com/wp-content/uploads/2018/04/billgates-e1526608219903.jpg?quality=65&strip=all",
  },
  {
    name: "Steve Jobs",
    image:
      "https://static.india.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-18-at-7.48.15-PM.jpeg",
  },
  {
    name: "Ronaldo",
    image:
      "https://www.kreiszeitung.de/bilder/2018/07/10/10022795/1197292765-cristiano-ronaldo-real-madrid.jpg",
  },
  {
    name: "Messi",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Mxl-OlbgXDjQ5LzRxR-TNgHaDt&pid=Api&P=0&h=220",
  },
  {
    name: "Elon musk",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.R-LVdzRecRFhwxZqgoobQwHaE8&pid=Api&P=0&h=220",
  },
  {
    name: "mercedes",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.Px6KYMzP5kYWCUfPy39DcgHaEK&pid=Api&P=0&h=220",
  },
  {
    name: "audi",
    image:
      "https://www.hdwallpapers.in/download/audi_r8_coupe_v10_gt_rwd_2022_car_2_4k_hd_cars-HD.jpg",
  },
  {
    name: "range rover",
    image:
      "https://media.autoexpress.co.uk/image/private/s--CvlTO-6z--/v1563182800/autoexpress/2019/02/01_21.jpg",
  },
  {
    name: "bmw",
    image:
      "https://www.hdcarwallpapers.com/walls/bmw_m2_competition_edition_heritage_2019_5k-HD.jpg",
  },
  {
    name: "Cadillac",
    image:
      "https://moneyinc.com/wp-content/uploads/2019/12/Best-Cadillac-CTS-Models-scaled.jpg",
  },
  {
    name: "rolls Royce",
    image:
      "https://scr.vn/wp-content/uploads/2020/07/Download-h%C3%ACnh-%E1%BA%A3nh-Si%C3%AAu-xe-Roll-Royce-scaled.jpg",
  },
  {
    name: "porsche",
    image:
      "https://i.gaw.to/content/photos/41/69/416992-la-nouvelle-porsche-911-turbo-s-grimpe-a-641-chevaux.jpg",
  },
  {
    name: "Interstellar",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/07916d0a-fd67-43d2-a99f-8dcf71d4ca15",
  },
  {
    name: "Avatar",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/af70749e-d002-43bc-818e-f72f8c20dd63",
  },
  {
    name: "Titanic",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/abb85de4-f016-4912-abe5-8d0a6ec951d5",
  },
  {
    name: "The Matrix",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/13527860-094e-494d-b366-cae122cb9856",
  },
  {
    name: "Joker",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/04b9139a-57c5-4a50-a2b2-d66c6f27c0ba",
  },
  {
    name: "The Godfather",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/015215b8-1a0b-4aa5-80c4-6a603d19f599",
  },
  {
    name: "Forrest Gump",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5c79bac1-a2ff-4b46-8e1d-5e73b34994b1",
  },
  {
    name: "Ice Age",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/2d961d9c-0c9d-46f6-a2ef-7ef04cb387b0",
  },
  {
    name: "Gone Girl",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f542ecd2-70eb-49a9-8c81-b1d6ccc6b1fa",
  },
  {
    name: "The Truman Show",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6e2ee9cd-a95d-4b93-8be1-f87022cfe207",
  },
  {
    name: "La La Land",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/77e07cf8-bc00-4f0c-83c8-b35848a07516",
  },
  {
    name: "Oppenheimer",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1d265010-4da3-4e0a-96bb-d7b703f8189f",
  },
  {
    name: "Toy Story",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a985ab14-1e40-4ede-8138-9894f38428e9",
  },
  {
    name: "Whiplash",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/13924a52-c41b-4156-84e5-9cc145e84b1c",
  },
  {
    name: "A Beautiful Mind",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/438df8df-05cf-4ddf-a77f-1d75b0257959",
  },
  {
    name: "Black Swan",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/0382d213-f62f-44b9-ac58-90f1e498b85a",
  },
  {
    name: "The Intouchables",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6bf93068-9775-43e5-83aa-4f62adcdbf3e",
  },
  {
    name: "Inception",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/18ebca87-f107-4139-b451-84e8aa6de3cb",
  },
  {
    name: "The Shawshank Redemption",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/61300255-9235-4994-8907-34d789562f74",
  },
  {
    name: "Edward Scissorhands",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/28d04861-c9b9-4e42-92ee-ee663873335c",
  },
  {
    name: "Ratatouille",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/ed15ec67-abc2-450b-8839-07ef0f133d54",
  },
  {
    name: "The Father",
    image:
      "https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/404e7eef-85d7-4821-a23e-b7b5c2d60352",
  },
];

let score;
let currentMovieIndex;
let warningShown = false;

function preloadImages() {
  movies.forEach((movie) => {
    const img = new Image();
    img.src = movie.image;
  });
}

function startGame() {
  score = 0;
  updateScore();
  currentMovieIndex = 0;
  getNextMovie();
}

//! Hàm để lấy một bộ phim ngẫu nhiên
function getNextMovie() {
  const currentMovie = movies[currentMovieIndex];
  movieImage.src = currentMovie.image;
}

//! Chức năng kiểm tra dự đoán của người dùng
function checkGuess() {
  const userGuess = guessInput.value.trim().toLowerCase();
  const currentMovie = movies[currentMovieIndex];

  if (userGuess === currentMovie.name.toLowerCase()) {
    movieImage.style.boxShadow = "-1px 1px 25px 14px #52ffa880";
    movieImage.style.outline = "3px solid #52ffa9";

    setTimeout(() => {
      score++;
      updateScore();
      currentMovieIndex++;
      guessInput.value = "";
      resetStyles();
      scoreBoard.classList.add("animation");

      if (score < movies.length) {
        getNextMovie();
      } else {
        showWinGameModal();
      }
    }, 800);
  } else if (userGuess === "") {
    if (!warningShown) {
      showWarningMessage();
      warningShown = true;
    }
  } else {
    movieImage.style.boxShadow = "-1px 1px 25px 16px #a20927";
    movieImage.style.outline = "3px solid #a20927";
    scoreBoard.classList.remove("animation");

    if (!warningShown) {
      currentMovieIndex++;
    }
    showGameOverModal();
  }
}

//! Chức năng cập nhật hiển thị điểm
function updateScore() {
  scoreBoard.textContent = `Score: ${score}`;
}

//! Chức năng hiển thị thông báo cảnh báo
function showWarningMessage() {
  modalContent.innerHTML = `
    <p class="message">Please enter a movie name! 👀</p>
    <button class="btn" onclick="closeModal()">Close</button>
  `;

  modal.style.display = "flex";
  document.addEventListener("keyup", closeModalOnEnter);
}

//! Chức năng hiển thị trò chơi kết thúc
function showGameOverModal() {
  modalContent.innerHTML = `
    <p class="message">Game Over! 😔</p>
    <p>Total Score: ${score}</p>
    <button class="btn" onclick="closeModal()">Close</button>
  `;

  modal.style.display = "flex";
  document.addEventListener("keyup", closeModalOnEnter);
}

//! Chức năng hiển thị hộp thoại khi người dùng thắng trò chơi
function showWinGameModal() {
  modalContent.innerHTML = `
    <p class="message">You won the game! 🎉</p>
    <p>Total Score: ${score}</p>
    <button class="btn" onclick="closeModal()">Close</button>
  `;

  modal.style.display = "flex";
  scoreBoard.classList.remove("animation");
  document.addEventListener("keyup", closeModalOnEnter);
}
//! Chức năng đóng hộp thoại khi nhấn phím Enter
function closeModalOnEnter(e) {
  if (e.key === "Enter" && modal.style.display === "flex") {
    modal.style.display = "none";
    modalContent.innerHTML = "";
    guessInput.value = "";
    resetStyles();
    document.removeEventListener("keyup", closeModalOnEnter);

    if (!warningShown) {
      startGame();
    } else {
      warningShown = false;
    }
  }
}

//! Chức năng đóng hộp thoại bằng cách nhấp vào nút "OK"
function closeModal() {
  modal.style.display = "none";
  modalContent.innerHTML = "";
  guessInput.value = "";
  resetStyles();
  document.removeEventListener("keyup", closeModalOnEnter);

  if (!warningShown) {
    startGame();
  } else {
    warningShown = false;
  }
}

//! Trình lắng nghe sự kiện cho phím Enter để tự động kiểm tra dự đoán
document.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && modal.style.display !== "flex") {
    checkGuess();
  }
});

//! Chức năng tập trung vào đầu vào
function focusOnInput() {
  guessInput.focus();
}

//! Chức năng thiết lập lại các kiểu
function resetStyles() {
  movieImage.style.boxShadow = "";
  movieImage.style.outline = "";
}

//! Lấy vị trí con trỏ trong đầu vào
guessInput.addEventListener("keyup", (e) => {
  console.log("Caret at: ", e.target.selectionStart);
});

//! Bắt đầu trò chơi khi trang tải xong
window.onload = startGame;
