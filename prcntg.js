let outer = document.querySelector('.outer');
let inner = document.querySelector('.inner');
let percentage = document.querySelector('span');
let count = 0;
inner.addEventListener('click', () => {
    let loading = setInterval(animate, 100);

    function animate() {
        if (count == 100) {
            outer.classList.remove("active-loader");
            outer.classList.add("active-loader-2");
            clearInterval();
        } else {
            count = count + 1;
            percent.textContent = count + '%';
            outer.classList.add("active-loader");
        }
    }
});