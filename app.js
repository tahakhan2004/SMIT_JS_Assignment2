// Q1
// let num1 = 8
// function Closure(){
//      return function(num2){
//           console.log(num1 + num2);
//      }
// }
// let calling = Closure()
// calling(10)

// Q2
// function Arraysearch(aray, value) {
//   if (aray.length === 0) {
//     return false;
//   }
//   if (aray[0] === value) {
//     return true;
//   }  
//   return Arraysearch(aray.slice(1), value);
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(Arraysearch(arr, 3));
// console.log(Arraysearch(arr, 6)); 

// Q3
// function createpara(txt){
//      let para = document.createElement("p")
//      let content = document.createTextNode(txt)
//      para.appendChild(content)
//      document.body.appendChild(para)
// }
// createpara("hello")

// Q4
// function unorderlist(txt){
//      let ul = document.createElement("ul")
//      let li = document.createElement("li")
//      let content = document.createTextNode(txt)
//      li.appendChild(content)
//      ul.appendChild(li)
//      document.body.appendChild(ul)
// }
// unorderlist("Only me")

// Q5
// function changeColor(id, color){
//      let p = document.getElementById(id)
//      p.style.backgroundColor = color

// }
// changeColor("my-para", "yellow")

// Q6 
// function savetolocal(key, object){
//      let fobj = JSON.stringify(object)
//      localStorage.setItem(key, fobj)
// }

// savetolocal("data", {
//      name: "taha",
//      age: 18,
//      religion:"Islam",
//      gender: "Male"
// })

// Q7
// function getobject(key){
//   let obj =  localStorage.getItem(key)
//   let fobj =  JSON.parse(obj)
//   return fobj
// }
// let objtoget = getobject("data"); 
// console.log(objtoget);

// Q8
// function saveandgetobj(obj){
//      for(let key in obj){
//           localStorage.setItem(key, JSON.stringify(obj[key]))
//      }
//      let newbobject = {}
//      for (let i = 0 ; i < localStorage.length; i++){
//         let key = localStorage.key(i)
//         newbobject[key] = JSON.parse(localStorage.getItem(key))
//      }
//      return newbobject
// }
// let fobject =  saveandgetobj({
//           name: "Anonymous",
//           age: 11100,
//           religion:"None",
//           gender: "other"
// })
// console.log(fobject);