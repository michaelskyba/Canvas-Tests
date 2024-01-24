// Decimal
const RNG = (min: number, max: number) => Math.random() * (max - min) + min

interface Directions {
	[key: number]: {
		dx: number
		dy: number
	}
}

class Config {
	width = 1000
	height = 500

	// Duration (ms)
	stepLength = 16

	// 8-grid, starting top left, going clockwise
	// Negative y: up
	// Positive y: down
	dirs: Directions = {
		// Top
		0: {dx: -1, dy: -1},
		1: {dx: 0, dy: -1},
		2: {dx: 1, dy: -1},

		// Right
		3: {dx: 1, dy: 0},

		// Bottom
		4: {dx: 1, dy: 1},
		5: {dx: 0, dy: 1},
		6: {dx: -1, dy: 1},

		// Left
		7: {dx: -1, dy: 0},
	}
}
const cfg = new Config()

interface Coordinate {
	x: number
	y: number
}

// Prot: protozoan
// Plural "protozoa"
// (Microbes that evolve to eat bacteria)
interface Prot {
	x: number,
	y: number,

	genome: number[],
}

class Environment {
	// Timestamp (ms) after first step
	lastStep = 0

	protozoa = new Set<Prot>()
	bacteria = new Set<Coordinate>()

	mutateGene(genome: number[], geneIdx: number, variance: number) {
		// How much will be added to gene
		let mod = 0

		// How much will be added to other genes, to compensate
		let otherMod = 0

		let valid = false
		while (!valid) {
			mod = RNG(-variance, variance)
			otherMod = -mod/(8-1)

			valid = true

			if (mod + genome[geneIdx] < 0)
				valid = false

			for (let i = 0; valid && i < 8; i++) {
				if (i == geneIdx)
					continue

				if (genome[i] + otherMod < 0)
					valid = false
			}
		}

		genome[geneIdx] += mod
		for (let i = 0; i < 8; i++) {
			if (i == geneIdx)
				continue

			genome[i] += otherMod
		}
	}

	randomGenome() {
		const genome: number[] = []

		// Start with equal distribution
		for (let i = 0; i < 8; i++)
			genome.push(1/8)

		for (let i = 0; i < 8; i++)
			this.mutateGene(genome, i, 1/8)

		return genome
	}

	addProt() {
		this.protozoa.add({x: 0, y: 0, genome: this.randomGenome()})
	}

	// Returns index of dirs
	computeDir(prot: Prot) {
		const threshold = RNG(0, 1)

		let sum = 0
		let i = 0

		for (; sum < threshold && i < 8; i++)
			sum += prot.genome[i]

		return i-1
	}

	step() {
		for (const prot of this.protozoa) {
			const dir = cfg.dirs[this.computeDir(prot)]

			prot.x += dir.dx * 5
			prot.y += dir.dy * 5

			// We're assuming you can't go back more than two screenfuls
			// in one step.
			if (prot.x < 0)
				prot.x += cfg.width
			if (prot.y < 0)
				prot.y += cfg.height

			prot.x = prot.x % cfg.width
			prot.y = prot.y % cfg.height
		}

		c.draw()
	}

	frameStep(time: number) {
		if (!this.lastStep) {
			this.step()
			this.lastStep = time
		}

		let elapsed = time - this.lastStep

		if (elapsed > cfg.stepLength)
			this.lastStep = time

		while (elapsed > cfg.stepLength) {
			this.step()
			elapsed -= cfg.stepLength
		}

		window.requestAnimationFrame(this.frameStep)
	}

	start = () => window.requestAnimationFrame(this.frameStep)
}

const environment = new Environment()
environment.step = environment.step.bind(environment)
environment.frameStep = environment.frameStep.bind(environment)

class Canvas {
	canvas: HTMLCanvasElement
	context: CanvasRenderingContext2D

	frect(x: number, y: number, w: number, h: number, colour: string) {
		this.context.fillStyle = colour
		this.context.fillRect(x, y, w, h)
	}

	draw() {
		this.frect(0, 0, cfg.width, cfg.height, "#eeeeff")

		for (const prot of environment.protozoa) {
			this.frect(prot.x - 2, prot.y - 2, 4, 4, "#000")
		}
	}

	constructor() {
		this.canvas = document.getElementById("canvas") as HTMLCanvasElement
		this.canvas.width = cfg.width
		this.canvas.height = cfg.height

		this.context = this.canvas.getContext("2d")!
	}
}

const c = new Canvas()

for (let i = 0; i < 300; i++)
	environment.addProt()

environment.start()
