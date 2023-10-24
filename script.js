import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDEq1NnH-kBigwoQTNhVXLYWnlJpp1iOpU",
  authDomain: "myprojects-ebee6.firebaseapp.com",
  databaseURL: "https://myprojects-ebee6-default-rtdb.firebaseio.com",
  projectId: "myprojects-ebee6",
  storageBucket: "myprojects-ebee6.appspot.com",
  messagingSenderId: "791094965891",
  appId: "1:791094965891:web:20d71b306f90979b018db6",
};
//
const app = initializeApp(firebaseConfig);

// get ref to database
const db = getDatabase(app);

// Main
let container = document.querySelector(".container");
let input1 = "";
let input2 = "";
let rs = "";
let arr = ["F", "L", "A", "M", "E", "S"];
let btn = document.querySelector(".btn");
// let startagain = document.querySelector(".restart");
let start = function () {
  input1 = "";
  input2 = "";
  arr = ["F", "L", "A", "M", "E", "S"];
  container.innerHTML = `<div class="title">
<h1>FLAMES💞</h1>
</div>
<div class="inputcontainer">
<input type="text" placeholder="Person 1" class="p1" value=""/>
<input type="text" placeholder="Person 2" class="p2" value=""/>
</div>
<div class="submit-btn">
<button class="btn match" ">Check Now</button>
</div>`;
  input1 = document.querySelector(".p1");
  input2 = document.querySelector(".p2");
  input1.focus();
};

setTimeout(() => (container.innerHTML = `<h1>Let's Begin</h1>`), 0);

setTimeout(() => (container.innerHTML = `<h1>Find Your Match</h1>`), 1500);

setTimeout(start, 2500);
// start();

let check = function () {
  let p1 = input1.value;
  let p2 = input2.value;
  p1.toLowerCase();
  p2.toLowerCase();
  if (!(p1 != "" && p2 != "")) alert("Field is empty...!");
  else if (p1 === p2) {
    alert("Both names are same...! Give different person names");
    input1.value = "";
    input2.value = "";
  } else {
    let s1 = p1.split("");
    let s2 = p2.split("");
    for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {
        if (s1[i] === s2[j]) {
          s1[i] = " ";
          s2[j] = " ";
          break;
        }
      }
    }
    let c = 0;
    let cnt = 0;
    s1.forEach((e) => {
      if (e !== " ") cnt++;
    });
    s2.forEach((e) => {
      if (e !== " ") cnt++;
    });
    console.log(s1, s2, cnt);

    let arrsize = 6;
    let findmatch = function (ct) {
      let t = ct;
      console.log(ct);
      let index = 0;
      let cnt = 0;
      // flindex = t - 1;
      while (arrsize != 1) {
        if (arr[index] != " ") {
          cnt++;
          if (cnt != t) index++;
        } else {
          index++;
        }
        if (index == 6) index = 0;
        if (cnt == t) {
          arr[index] = " ";
          arrsize--;
          cnt = 0;
        }
      }
    };
    findmatch(cnt);
    console.log(arr);

    let result = function (r) {
      rs = r;
      container.innerHTML = `<div class="imagecon"><img src="img/each/${r}.png" alt="" /></div>
  <div class="submit-btn">
    <button class="btn restart" >Try Another</button>
  </div>`;
    };

    arr.forEach((e) => {
      if (e != " ") result(e);
    });
  }
  let x = Math.floor(Math.random() * 10000 + 1001);
  set(
    ref(
      db,
      "user/" + s1[0] + s1[s1.length - 1] + s2[0] + s2[s2.length - 1] + x
    ),
    {
      Person_1: input1.value,
      Person_2: input2.value,
      Result: rs,
    }
  );
};

document.addEventListener("click", function (event) {
  // Check if the clicked element has the specific class

  if (event.target.classList.contains("match")) {
    check();
  }
  if (event.target.classList.contains("restart")) {
    start();
  }
});
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") check();
});
