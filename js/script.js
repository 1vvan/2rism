
// Burger Menu
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
    })
})

// Spoiler Footer
document.querySelectorAll('.down-info__title').forEach((el) => {
    el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll('.down-info__links').forEach((el) => el.style.maxHeight = null)
        }
        else {
            document.querySelectorAll('.down-info__links').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})