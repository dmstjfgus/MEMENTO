const signin = document.querySelector('input[type="submit"]');
const idInput = document.querySelector(".id");
const pwdInput = document.querySelector(".pwd");

signin.addEventListener("click", () => {
  if (!idInput.value) {
    alert("아이디를 입력해 주세요.");
    idInput.focus();
    return;
  }
  if (!pwdInput.value) {
    alert("비밀번호를 입력해 주세요.");
    pwdInput.focus();
    return;
  }

  const formData = new FormData(document.querySelector("form"));
  fetch("/MEMENTO_backend/model/register.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      location.href = "/MEMENTO/index.html";
    })
    .catch((err) => {
      console.log(err);
    });
});
