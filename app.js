//document
// const allButton = document.getElementsByClassName('button-test');
// //console.log(allButton[0]);

// const primeButton = document.getElementById('prime');
// //console.log(prime);

// for (const button of allButton) {
//     button.addEventListener('click', function (e) {
//         //console.log(e.target.parentNode)
//         if (e.target.id == 'prime') {
//             document.getElementById('title').style.color = "blue";
//         }
//         else {
//             document.getElementById('title').style.color = "green";
//         }
//     })
// }


let count = 0;
// document.getElementById('add').addEventListener('click'function (e) {
// count++;
// document.getElementById('count').innerText = count;
//     control('count');
// });

function add(e) {
    count++;
    // document.getElementById('count').innerText = count;
    control('count');
}

function minus() {
    count--;
    control('count');
}

// document.getElementById('minus').addEventListener('click', function (e) {
//     count--;
//     // document.getElementById('count').innerText = count;
//     control('count');
// });

function control(id) {
    document.getElementById(id).innerText = count;
}

