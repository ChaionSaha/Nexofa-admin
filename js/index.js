'use strict';

const addTopicSidebar = document.querySelector('#addTopicSidebar');
const addTopicOpen = document.querySelector('.addTopicOpen');
const addTopicClose = document.querySelector('.addTopicClose');

addTopicOpen.addEventListener('click', (e) => {
	e.preventDefault();
	addTopicSidebar.classList.remove('translate-x-[100%]');
});

addTopicClose.addEventListener('click', (e) => {
	e.preventDefault();
	addTopicSidebar.classList.add('translate-x-[100%]');
});
