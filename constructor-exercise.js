/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */
function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}. It is a ${this.genre} book.`;
};

Book.prototype.isClassic = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.year > 50;
};

Book.prototype.updateYear = function (newYear) {
  if (typeof newYear === "number" && newYear > 0) {
    this.year = newYear;
    console.log(`Publication year updated to ${this.year}.`);
  } else {
    console.error("Invalid year. Please provide a positive number.");
  }
};

Book.prototype.changeGenre = function (newGenre) {
  if (typeof newGenre === "string" && newGenre.trim() !== "") {
    this.genre = newGenre;
    console.log(`Genre updated to ${this.genre}.`);
  } else {
    console.error("Invalid genre. Please provide a non-empty string.");
  }
};

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");

console.log(book1.getSummary());
console.log(`Is classic: ${book1.isClassic()}`);
book1.updateYear(1961);
book1.changeGenre("Historical Fiction");
