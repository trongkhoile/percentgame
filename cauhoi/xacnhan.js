import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
const db = getDatabase();
var nguoichoi1 = [];
var nguoichoi2 = [];
var insBtn = document.getElementById("but");
var insBtn1 = document.getElementById("but1");
var phantramhopnhau = 0;
const dbref = ref(db);
get(child(dbref, "Nguoichoi/" + String(localStorage.Nguoichoi2) + "/" + "Cau8"))
  .then((snapshot) => {
    console.log(snapshot.val());
    if (snapshot.exists() && snapshot.val() != "null") {
      for (var i = 1; i < 9; i++) {
        get(
          child(
            dbref,
            "Nguoichoi/" + localStorage.Nguoichoi1 + "/" + "Cau" + String(i)
          )
        )
          .then((snapshot) => {
            if (snapshot.exists()) {
              nguoichoi1.push(snapshot.val());
              localStorage.setItem("Mang1", JSON.stringify(nguoichoi1));
            } else {
            }
          })
          .catch((error) => {});
      }
      for (var i = 1; i < 9; i++) {
        get(
          child(
            dbref,
            "Nguoichoi/" + localStorage.Nguoichoi2 + "/" + "Cau" + String(i)
          )
        )
          .then((snapshot) => {
            if (snapshot.exists()) {
              nguoichoi2.push(snapshot.val());
              localStorage.setItem("Mang2", JSON.stringify(nguoichoi2));
            } else {
            }
          })
          .catch((error) => {});
      }
      var m1 = JSON.parse(localStorage.getItem("Mang1"));
      var m2 = JSON.parse(localStorage.getItem("Mang2"));
      for (var i = 0; i < 8; i += 1) {
        if (m1[i] == m2[i]) {
          console.log(i);
          phantramhopnhau += 12.5;
          console.log(m1[i]);
          console.log(m2[i]);
        }
      }
    } else {
    }
  })
  .catch((error) => {});
function get1() {
  var phantramhopnhau = 0;
  get(
    child(dbref, "Nguoichoi/" + String(localStorage.Nguoichoi2) + "/" + "Cau8")
  )
    .then((snapshot) => {
      console.log(snapshot.val());
      console.log(localStorage.Nguoichoi2);
      if (
        snapshot.exists() &&
        snapshot.val() != "null" &&
        snapshot.val() != none
      ) {
        for (var i = 1; i < 9; i++) {
          get(
            child(
              dbref,
              "Nguoichoi/" + localStorage.Nguoichoi1 + "/" + "Cau" + String(i)
            )
          )
            .then((snapshot) => {
              if (snapshot.exists()) {
                nguoichoi1.push(snapshot.val());
                localStorage.setItem("Mang1", JSON.stringify(nguoichoi1));
              } else {
              }
            })
            .catch((error) => {});
        }
        for (var i = 1; i < 9; i++) {
          get(
            child(
              dbref,
              "Nguoichoi/" + localStorage.Nguoichoi2 + "/" + "Cau" + String(i)
            )
          )
            .then((snapshot) => {
              if (snapshot.exists()) {
                nguoichoi2.push(snapshot.val());
                localStorage.setItem("Mang2", JSON.stringify(nguoichoi2));
              } else {
              }
            })
            .catch((error) => {});
        }
        var m1 = JSON.parse(localStorage.getItem("Mang1"));
        var m2 = JSON.parse(localStorage.getItem("Mang2"));
        for (var i = 0; i < 8; i += 1) {
          if (m1[i] == m2[i]) {
            console.log(i);
            phantramhopnhau += 12.5;
            console.log(m1[i]);
            console.log(m2[i]);
          }
        }
        $(".text").text(
          "????? h???p nhau c???a c??c b???n l?? " + String(phantramhopnhau) + "%"
        );
        if (phantramhopnhau >= 70) {
          $("#cm").text("C??c b???n sinh ra l?? ????? d??nh cho nhau ???? :3");
        } else if (phantramhopnhau < 70 && phantramhopnhau >= 50) {
          $("#cm").text("C??c b???n c??ng kh?? l?? h???p nhau ???? :3");
        } else if (phantramhopnhau < 50) {
          $("#cm").text("C??ng h???p nhau ph???t m?? :3");
        }
      } else {
        $(".text").text(
          "?????i ph????ng ch??a ho??n th??nh tr?? ch??i vui l??ng ???n load l???i trang"
        );
        $("#but").text("Load l???i");
      }
    })
    .catch((error) => {
      alert("unsuccessful, error: " + error);
    });
}
function load1() {
  remove(ref(db, "Nguoichoi/" + localStorage.Nguoichoi1))
    .then(() => {})
    .catch((error) => {});
  window.location = "index.html";
}
insBtn.addEventListener("click", get1);
insBtn1.addEventListener("click", load1);
