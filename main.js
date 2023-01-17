const smallBox = document.querySelectorAll(".small-box")
const body = document.body;
const accordion = document.querySelector(".ac-wrap");

// 참조 : file:///C:/Users/User/AppData/Local/Temp/BNZ.63a28e07191582/index.html 

smallBox.forEach((box) => {
    box.addEventListener("click", () => {
      closeAll(box);
      box.classList.toggle("active");
    });
  });

  const closeAll = (item) => {
    smallBox.forEach((box) => {
      if (item !== box) {
        box.classList.remove("active");
      }
    });
  };

  body.addEventListener("click", (e) => {
    if (!accordion.contains(e.target)) {
      smallBox.forEach((header) => {
        box.classList.remove("active");
      });
    }
  });