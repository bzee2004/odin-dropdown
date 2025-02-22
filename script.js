const dropdownMenu = document.querySelectorAll('.dropdown-box');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownMenu.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
    dropdownContent.style.display !== 'block' ? dropdownContent.style.display = 'block' : dropdownContent.style.display = 'none';
    dropdownContent.style.opacity = 1;
    })
});
