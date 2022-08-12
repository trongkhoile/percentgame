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
var insBtn = document.getElementsByClassName("bt");
for (var i = 0; i < insBtn.length; i++) {
  insBtn[i].addEventListener("click", function () {
    var key = this.innerHTML.split("")[0];
    var nguoichoi = localStorage.Nguoichoi1;
    update(ref(db, "Nguoichoi/" + nguoichoi), {
      Cau6: key,
    })
      .then(() => {
        window.location = "cau7.html";
      })
      .catch((error) => {
        alert("unsuccessful, error: " + error);
      });
  });
}
