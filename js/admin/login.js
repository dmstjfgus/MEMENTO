window.addEventListener("load", function () {
  async function checkSign() {
    const userIcon = document.querySelectorAll(".user");
    // console.log(userIcon); // 2개 배열  요소
    const loginIcon = document.querySelectorAll(".user-login");
    const logoutIcon = document.querySelectorAll(".user-logout");

    this.fetch("/MEMENTO_backend/etc/check_sign.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.userid === "guest") {
          // 로그인 하지 않았을 때
          loginIcon.forEach((item) => {
            item.style.display = "block";
          });
          logoutIcon.forEach((item) => {
            item.style.display = "none";
          });
          loginIcon.forEach((item) => {
            item.innerHTML = `<i class="ri-user-smile-line user-login"></i>`;
          });
        } else {
          userIcon.forEach((item) => {
            item.innerHTML = `<li class="signout"><span>${data.userid}</span>&nbsp;| <a href="#">Logout</a></li>`;
          });
          loginIcon.forEach((item) => {
            item.style.display = "none";
          });
          logoutIcon.forEach((item) => {
            item.style.display = "flex";
          });
          logoutIcon.forEach((item) => {
            item.innerHTML = `<i class="ri-user-smile-fill user-logout"></i>`;
          });
        }

        const signoutBtn = document.querySelectorAll(".signout a");

        if (signoutBtn) {
          signoutBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
              e.preventDefault();
              this.fetch("/MEMENTO_backend/model/register.php?q=signout")
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  this.alert("로그아웃 되었습니다.!!");
                  this.location.reload();
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  setTimeout(function () {
    checkSign();
  }, 300);
});

// window.addEventListener("load", function () {
//   async function checkSign() {
//     const userIcon = document.querySelectorAll(".user");
//     const adminIcon = document.querySelectorAll(".user-login");

//     setTimeout(function () {
//       checkSign();
//     }, 300);
//   }
// });
