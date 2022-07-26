const Park = function (name, ticketPrice) {
	this.name = name;
	this.ticketPrice = ticketPrice;
	this.dinosaurs = [];
};

Park.prototype.addDino = function (dinosaur) {
	this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDino = function (dinosaur) {
	const indexOfDino = this.dinosaurs.indexOf(dinosaur);
	this.dinosaurs.splice(indexOfDino, 1);
};

Park.prototype.findDinoHighestVisitor = function () {
	let visitorAmounts = [];
	for (dinosaur of this.dinosaurs) {
		visitorAmounts.push(dinosaur.guestsAttractedPerDay);
	}
	const highest = Math.max(...visitorAmounts);
	const index = visitorAmounts.indexOf(highest);
	return this.dinosaurs[index];
};

Park.prototype.findDinoBySpecies = function (species) {
	let dinoBySpecies = [];
	for (const dinosaur of this.dinosaurs) {
		if (dinosaur.species === species) {
			dinoBySpecies.push(dinosaur);
		}
	}
	return dinoBySpecies;
};

Park.prototype.totalVisitorsPerDay = function () {
	let totalVisitors = 0;
	for (const dinosaur of this.dinosaurs) {
		totalVisitors += dinosaur.guestsAttractedPerDay;
	}
	return totalVisitors;
};

Park.prototype.totalVisitorsPerYear = function () {
	let totalVisitors = 0;
	for (const dinosaur of this.dinosaurs) {
		totalVisitors += dinosaur.guestsAttractedPerDay;
	}
	return totalVisitors * 365;
};

Park.prototype.revenuePerYear = function () {
	let total = 0;
	total = this.totalVisitorsPerYear() * this.ticketPrice;
	return total;
};

Park.prototype.removeBySpecies = function (species) {
	let dinoBySpecies = [];
	for (const dinosaur of this.dinosaurs) {
		if (dinosaur.species !== species) {
			dinoBySpecies.push(dinosaur);
		}
	}
	this.dinosaurs = dinoBySpecies;
	return this.dinosaurs;
};

module.exports = Park;
