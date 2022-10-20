let gameMode: string
let backgroundRGB = [249, 249, 249]

let round = 1
let playerWins = 0
let compWins = 0
let loseStreak = 0

let playerOption: string
let compOption: string

let initDate = Date.now()

const play = document.getElementById("play")
const results = document.getElementById("results")
const roundText = document.getElementById("round")
const resultText = document.getElementById("result")

const streakWholeText = document.getElementById("streakText")
const streakCountText = document.getElementById("streak")

const playerWinRate = document.getElementById("playerWinRate")
const compWinRate = document.getElementById("compWinRate")
const tieRate = document.getElementById("tieRate")

const playerImg = document.getElementById("playerOption") as HTMLImageElement
const compImg = document.getElementById("compOption") as HTMLImageElement

// logic[x] is y if x wins against y
const logic = {
	rock: "scissors",
	paper: "rock",
	scissors: "paper"
}

const hex = {
	tie: "#4a4a4a",
	win: "#2c8898",
	lose: "#982c2c"
}

const RGB = {
	tie: [74, 74, 74],
	win: [44, 136, 152],
	lose:[152, 44, 44]
}

document.getElementById("random").onclick = () => setGameMode("random")
document.getElementById("reddit").onclick = () => setGameMode("reddit")
document.getElementById("psychology").onclick = () => setGameMode("psychology")

document.getElementById("rock").onclick = () => playOption("rock")
document.getElementById("paper").onclick = () => playOption("paper")
document.getElementById("scissors").onclick = () => playOption("scissors")

document.getElementById("next").onclick = () => {
	results.style.display = "none"
	play.style.display = "block"

	updateRounds()
}

document.getElementById("exit").onclick = () => location.reload()

function updateRounds() {
	round++
	roundText.innerHTML = round.toString()
}

function setGameMode(mode: string) {
	gameMode = mode

	document.getElementById("title").style.display = "none"
	document.getElementById("game").style.display = "block"
}

function getCompOption(): string {
	return "rock"
}

function updateLoseStreak(result: string) {
	if (result == "lose") loseStreak++
	else loseStreak = 0

	if (loseStreak >= 2) {
		streakCountText.innerHTML = loseStreak.toString()
		streakWholeText.style.display = "block"
	}
	else streakWholeText.style.display = "none"
}

function updateWinRate(result: string) {
	if (result == "win") playerWins++
	else if (result == "lose") compWins++

	let rate: number

	rate = Math.round(playerWins/round * 100)
	playerWinRate.innerHTML = rate.toString()

	rate = Math.round(compWins/round * 100)
	compWinRate.innerHTML = rate.toString()

	let ties = round - compWins - playerWins
	rate = Math.round(ties/round * 100)
	tieRate.innerHTML = rate.toString()
}

function displayResults(playerOption: string, compOption: string) {
	playerImg.src = `${playerOption}.png`
	compImg.src = `${compOption}.png`

	let result: string
	if (playerOption == compOption) result = "tie"
	else if (logic[playerOption] == compOption) result = "win"
	else result = "lose"

	updateLoseStreak(result)
	updateWinRate(result)

	resultText.innerHTML = `Result: ${result}`
	resultText.style.color = hex[result]

	backgroundRGB = RGB[result]
	initDate = Date.now()
}

function playOption(option: string) {
	let playerOption = option
	let compOption = getCompOption()

	displayResults(playerOption, compOption)

	play.style.display = "none"
	results.style.display = "block"
}

function updateBackground() {
	let diff = Date.now() - initDate
	let duration = 500

	if (diff < duration) {
		let progress = diff/duration

		// [249, 249, 249] is the default

		let updated = [0, 0, 0]
		for (let i = 0; i < 3; i++) {
			let c = backgroundRGB[i]
			updated[i] = c + (249-c) * progress
		}

		let r = updated[0]
		let g = updated[1]
		let b = updated[2]
		document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
	}

	window.requestAnimationFrame(updateBackground)
}
window.requestAnimationFrame(updateBackground)
