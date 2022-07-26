const assert = require("assert");
const Park = require("../models/park");
const Dinosaur = require("../models/dinosaur");

describe("Park", function () {
	let park;
	let dinosaur;
	let dinosaur2;
	let dinosaur3;

	this.beforeEach(function () {
		park = new Park("Jurassic Park", 20);
		dinosaur = new Dinosaur("t-rex", "carnivore", 50);
		dinosaur2 = new Dinosaur("raptor", "carnivore", 15);
		dinosaur3 = new Dinosaur("raptor", "carnivore", 30);
	});

	it("should have a name", function () {
		const actual = park.name;
		assert.strictEqual(actual, "Jurassic Park");
	});

	it("should have a ticket price", function () {
		const actual = park.ticketPrice;
		assert.strictEqual(actual, 20);
	});

	it("should have a collection of dinosaurs", function () {
		const actual = park.dinosaurs;
		assert.deepStrictEqual(actual, []);
	});

	it("should be able to add a dinosaur to its collection", function () {
		park.addDino(dinosaur);
		const actual = park.dinosaurs.length;
		assert.strictEqual(actual, 1);
	});

	it("should be able to remove a dinosaur from its collection", function () {
		park.addDino(dinosaur);
		park.removeDino(dinosaur);
		const actual = park.dinosaurs.length;
		assert.strictEqual(actual, 0);
	});

	it("should be able to find the dinosaur that attracts the most visitors", function () {
		park.addDino(dinosaur);
		park.addDino(dinosaur2);
		const actual = park.findDinoHighestVisitor();
		assert.deepStrictEqual(actual, dinosaur);
	});

	it("should be able to find all dinosaurs of a particular species", function () {
		park.addDino(dinosaur);
		park.addDino(dinosaur2);
		park.addDino(dinosaur3);
		const actual = park.findDinoBySpecies("raptor");
		assert.deepStrictEqual(actual, [dinosaur2, dinosaur3]);
	});

	it("should be able to calculate the total number of visitors per day", function () {
		park.addDino(dinosaur);
		park.addDino(dinosaur2);
		park.addDino(dinosaur3);
		const actual = park.totalVisitorsPerDay();
		assert.strictEqual(actual, 95);
	});

	it("should be able to calculate the total number of visitors per year", function () {
		park.addDino(dinosaur);
		park.addDino(dinosaur2);
		park.addDino(dinosaur3);
		const actual = park.totalVisitorsPerYear();
		assert.strictEqual(actual, 34675);
	});

	it("should be able to calculate total revenue for one year", function () {
		park.addDino(dinosaur);
		park.addDino(dinosaur2);
		park.addDino(dinosaur3);
		const actual = park.revenuePerYear();
		assert.strictEqual(actual, 693500);
	});

	it("should be able to remove all dinosaurs of set species", function () {
		park.addDino(dinosaur);
		park.addDino(dinosaur2);
		park.addDino(dinosaur3);
		park.removeBySpecies("raptor");
		const actual = park.dinosaurs;
		assert.deepStrictEqual(actual, [dinosaur]);
	});

	xit("shoube be able to show diet type and values");
});
