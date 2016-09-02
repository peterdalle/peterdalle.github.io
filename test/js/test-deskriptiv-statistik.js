var quizJSON = {
	"info": {
		"name":    "Deskriptiv statistik",
		"main":    "<p>Testa dina kunskaper i grundläggande deskriptiv statistik.</p>",
		"results": "<h5>Bra jobbat!</h5><p>Att testa sina kunskaper ökar inlärningen väsentligt. Fortsätt med det!</p>",
		"level1":  "Nybörjare",
		"level2":  "Nybörjare",
		"level3":  "Medel",
		"level4":  "Medel",
		"level5":  "Expert"
	},
	"questions": [
		{ // Question 1 - Multiple Choice, Single True Answer
			"q": "Vad är ett centralmått?",
			"a": [
				{"option": "XXX?",      "correct": false},
				{"option": "XX",     "correct": false},
				{"option": "Ett mått som visar mittpunkten hos en variabels värden",      "correct": true},
				{"option": "Ett vanligt (centralt) mått inom statistiken",     "correct": false}
			],
			"correct": "<p><span>Rätt!</span> Centralmått visar mittpunktne hos en variabel. Exempel på centralmått är medelvärde och median (mittersta värdet)</p>",
			"incorrect": "<p><span>Fel.</span> Centralmått visar mittpunktne hos en variabel. Exempel på centralmått är medelvärde och median (mittersta värdet).</p>"
		},
		{ // Question 2 - Multiple Choice, Multiple True Answers, Select Any
			"q": "Which of the following best represents your preferred breakfast?",
			"a": [
				{"option": "Bacon and eggs",               "correct": false},
				{"option": "Fruit, oatmeal, and yogurt",   "correct": true},
				{"option": "Leftover pizza",               "correct": false},
				{"option": "Eggs, fruit, toast, and milk", "correct": true}
			],
			"select_any": true,
			"correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
			"incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>"
		},
		{ // Question 3 - Multiple Choice, Multiple True Answers, Select All
			"q": "Where are you right now? Select ALL that apply.",
			"a": [
				{"option": "Planet Earth",           "correct": true},
				{"option": "Pluto",                  "correct": false},
				{"option": "At a computing device",  "correct": true},
				{"option": "The Milky Way",          "correct": true}
			],
			"correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
			"incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>"
		},
		{ // Question 4
			"q": "How many inches of rain does Michigan get on average per year?",
			"a": [
				{"option": "149",    "correct": false},
				{"option": "32",     "correct": true},
				{"option": "3",      "correct": false},
				{"option": "1291",   "correct": false}
			],
			"correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
			"incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>"
		},
		{ // Question 5
			"q": "Is Earth bigger than a basketball?",
			"a": [
				{"option": "Yes",    "correct": true},
				{"option": "No",     "correct": false}
			],
			"correct": "<p><span>Good Job!</span> You must be very observant!</p>",
			"incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>"
		}
	]
};