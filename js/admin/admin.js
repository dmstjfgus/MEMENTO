// jQuery logic
$(function () {
  $(".upload-hidden").on("change", function () {
    // on은 자바스크립트의 addEventLisner 역할을 한다.
    let filename;
    if (window.FileReader) {
      //   console.log($(this));
      filename = $(this)[0].files[0].name;
    }
    // console.log($(this));
    $(this).siblings().val(filename);
  });
  $("#main-image").on("change", imgfileSelect);
});

// imgfileSelect function here...
const imgfileSelect = (event) => {
  const input = event.target; // 변화된 입력창 타겟 저장
  const reader = new FileReader(); // fileReader 기능 저장

  reader.onload = function () {
    const dataURL = reader.result; // base64로 인코딩된 값
    const output = document.querySelector("#img");
    output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]); // 파일  입력이 저장된 객체의 files배열에 fileReader 기능 실행
};

// tabs code
const btns = document.querySelectorAll(".admin-btns button");
const panels = document.querySelectorAll(".admin-panels .panel");

btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });
    panels.forEach((panel) => {
      panel.style.display = "none";
    });
    btns[idx].classList.add("active");
    panels[idx].style.display = "flex";
  });
});
