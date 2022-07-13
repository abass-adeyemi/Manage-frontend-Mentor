const btn = document.getElementById('menu-button');
const newNav = document.getElementById('menu');

btn.addEventListener('click', () => {
	btn.classList.toggle('open');
	newNav.classList.toggle('flex');
	newNav.classList.toggle('hidden');
});
