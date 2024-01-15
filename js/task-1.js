// const items = document.querySelectorAll('.item')
// console.log(`Number of categories: ${items.length}`);

// items.forEach(function (item) {
//     const x = item.querySelector('h2').textContent;
//     console.log(`Category: ${x}`);
//     const y = item.querySelectorAll('li');
//     console.log(`Elements: ${y.length}`)
// })






const items = document.querySelectorAll(".item");
console.log(items.length);


items.forEach(function (item) {
    const titles = item.querySelector('h2')
    console.log(titles.textContent);
    const list = item.querySelectorAll('li')
    console.log(list.length);
})



