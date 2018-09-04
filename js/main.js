let musicArray = [];
let currentMood = null;
let moodQ = document.querySelector('#moodQuestion');
let moodsUL = document.querySelector('#music');



// function for the current question
function yourMood(slug){
	currentMood = musicQuiz[slug];
	return currentMood;
}
// function for an array of choice
function recordChoice(slug){
	musicArray.push(slug);
}

// function for next question
function nextQuestion(slug){
	recordChoice(slug);
	currentMood = yourMood(slug);
	updatePage(currentMood);
}

// TODO: create a function that will update the questions from the slug
function updatePage(page) {
	moodQ.innerHTML = page.text;
	// Creating a new Array based on moods
	moodsUL.innerHTML = '';
		for (mood of page.moods){
			let newLI = document.createElement('li');
			newLI.innerHTML = mood.text;
			newLI.setAttribute('data-slug', mood.link);
			moodsUL.appendChild(newLI);
	}
	addEventListeners();
}

// TODO: create an event listener that will hear the click of the button
function addEventListeners(){
	let moods = document.querySelectorAll('#music li');
	for (mood of moods){
		mood.addEventListener('click', function(e){
			newQuestion(e.target.dataset.slug);
		})
	}
}

// data object for current moods and recommendation
// When asked "What are you in the mood for?" you are given three options to select.
var musicQuiz = {
	q1: {
		text: `What are you in the mood for?`,
		moods: [
			{
				text: `Chillwave`,
				link: 'chillwave'
			}, {
				text: `Rock`,
				link: 'rock'
			}, {
				text: `Hip Hop`,
				link: 'hipHop'
			}
		]
	},
	// When selecting "Chillwave" you are given option
	chillwave: {
		text: `Chillwave? Great choice! How do you want to chill?`
		moods: [
			{
				text: `Drive through Portland`,
				link: 'c1'
			}, {
				text: `Drink martinis and look at art`,
				link: 'c2'
			}, {
				text: `Meditate`,
				link: 'c3'
			}
		]
	},
	rock: {
		text: `Rock? Oh, this is a broad genre!`
		moods: [
			{
				text: `Drinking beer by the river`,
				link: 'r1'
			}, {
				text: `Rocking hard and breaking stuff!`
				link: 'r2'
			}, {
				text: `I want to pretend to be original.`
				link: 'r3'
			}
		]
	},
	hipHop: {
		text: `Hip Hop. You must like good beats!`
		moods: [
			{
				text: `Gimmie some classic hip hop`,
				link: 'h1'
			}, {
				text: `Hip Hop Soul`
				link: 'h2'
			}, {
				text: `I want to be a gangster`
				link: 'h3'
			}
		]
	}
}


// This is supposed to be where quiz starts
currentMood = musicQuiz.q1;
updatePage('currentMood');