/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//write a function that returns a freelancer object with a randomly generated name, occupation and rate according to the constants above

function generateFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;

  return { name, occupation, rate };
}
console.log(generateFreelancer());

//initialize a state variable to an array of NUM_FREELANCERS freelancer objects
let freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(generateFreelancer());
}
console.log(freelancers);
// write a function that returns the average rate of all freelancers in state
function getAverageRate() {
  const totalRate = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0);
  return totalRate / freelancers.length;
}
console.log(getAverageRate());
// Use the previous function to initialize a state variable to which will store the average rate of all freelancers.
let averageRate = getAverageRate();
console.log(averageRate);
//write a component function to represent a single freelancer
function FreelancerCard({ name, occupation, rate }) {
  return `
    <div class="freelancer-card">
      <h2>${name}</h2>
      <p>Occupation: ${occupation}</p>
      <p>Rate: $${rate}/hr</p>
    </div>
  `;
}
//write a component function to represent an array of freelancers
function FreelancerList(freelancers) {
  return `
    <div class="freelancer-list">
      ${freelancers.map(FreelancerCard).join('')}
    </div>
  `;
}
//write a fcomponent function to represent the average rate of all freelancers
function AverageRateCard(averageRate) {
  return `
    <div class="average-rate-card">
      <h2>Average Rate</h2>
      <p>$${averageRate}/hr</p>
    </div>
  `;
}
//write and call a render function that will mount the application onto the document
function render() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h1>Freelancer Forum</h1>
    ${AverageRateCard(averageRate)}
    ${FreelancerList(freelancers)}
  `;
}
// Call the render function to mount the application
render();