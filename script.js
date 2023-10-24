let container = document.querySelector(".container");
let input1 = "";
let input2 = "";
let arr = ["F", "L", "A", "M", "E", "S"];
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
<button class="btn" onclick="check()">Check Now</button>
</div>`;
  input1 = document.querySelector(".p1");
  input2 = document.querySelector(".p2");
  input1.focus();
};
start();
let check = function () {
  let p1 = input1.value;
  let p2 = input2.value;
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
      container.innerHTML = `<div class="imagecon"><img src="img/each/${r}.png" alt="" /></div>
  <div class="submit-btn">
    <button class="btn" onclick="start()">Try Another</button>
  </div>`;
    };

    arr.forEach((e) => {
      if (e != " ") result(e);
    });
  }
};

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") check();
});
