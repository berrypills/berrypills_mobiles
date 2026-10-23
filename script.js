document.addEventListener('DOMContentLoaded', function () {

    var chips = document.querySelectorAll('.filters__chip');

    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            chips.forEach(function (c) {
                c.classList.remove('filters__chip--active');
            });
            chip.classList.add('filters__chip--active');
        });
    });

});