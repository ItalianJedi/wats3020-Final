
var musicQuiz = {
	title: "The (not-so) Ultimate Music Quiz!",
	q1: {
		text: `What genre of music are you into?`,
		choices: [
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
	chillwave: {
		text: `Chillwave? Great choice! How do you want to chill?`
		choices: [
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
		choices: [
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
		choices: [
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