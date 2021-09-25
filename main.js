// function resp() {
//     let xhr = new XMLHttpRequest();
//     let reqUrl = "https://jsonplaceholder.typicode.com/users";
//     xhr.open('GET', reqUrl);
//     xhr.onload = () => {
//         let users = JSON.parse(xhr.response);
//         users.map((user) => {

//         });
//     };
//     xhr.send();
// }

// console.log(resp());

//  name: "Patricia Lebsack",

// let xhr = new XMLHttpRequest();
// let reqUrl = "https://jsonplaceholder.typicode.com/users";

// function getUrl(metod, url) {
//     let usersEmail;
//     xhr.open(metod, url);
//     xhr.onload = () => {
//         let users = JSON.parse(xhr.response);
//         usersEmail = users.forEach(el => {
//             if (el.name === "Patricia Lebsack") {
//                 return el
//             }
//         });


//     };
//     xhr.send()
//     return usersEmail;
// };
// console.log(getUrl('GET', reqUrl));


// function request(url, method) {
//     let resp;
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onload = () => {
//         let users = JSON.parse(xhr.response);
//         resp = users
//             // console.log(resp);
//     }
//     xhr.send()
//     return resp;
// }
// console.log(request(reqUrl, 'GET'));


// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr[-1] = "yo wazzzup";
// console.log(arr.length); // > 8
// console.log(arr[arr.indexOf(99)]);

// console.log(1);
// let prom = new Promise((res, rej) => {
//     console.log(2);
//     res(12)
// })
// console.log(3);
// prom.then(res => {
//     console.log(res);
// })
// console.log(4);
// prom.finally(() => {
//     console.log(13);
// })
// console.log(5);
const http = require("fs");
process.nextTick(() => {
    console.log(1);
})

http.readFile(__filename, () => {
    setTimeout(() => {
        console.log(3);
    }, 0)
    setImmediate(() => {
        console.log(2);
    })


})
setImmediate(() => {
    console.log(22);
})
setTimeout(() => {
    console.log(33);
}, 0)