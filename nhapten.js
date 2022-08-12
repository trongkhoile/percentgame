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
var insBtn = document.getElementById("bam");
var namebox = document.getElementById("ten1");
var namebox1 = document.getElementById("ten2");
function insertData() {
  function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  }
  var k = removeAccents(namebox.value.toLowerCase());
  var k1 = k.replace(/\s/g, "");
  var z = removeAccents(namebox1.value.toLowerCase());
  var z1 = z.replace(/\s/g, "");
  console.log(k1);
  set(ref(db, "Nguoichoi/" + k1), {
    Cau1: "none",
    Cau2: "none",
    Cau3: "none",
    Cau4: "none",
    Cau5: "none",
    Cau6: "none",
    Cau7: "none",
    Cau8: "none",
  })
    .then(() => {
      localStorage.setItem("Nguoichoi1", k1);
      localStorage.setItem("Nguoichoi2", z1);
      window.location = "./cauhoi/cau1.html";
    })
    .catch((error) => {
      alert("unsuccessful, error: " + error);
    });
}

insBtn.addEventListener("click", insertData);
