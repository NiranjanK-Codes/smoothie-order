// Define Smoothie class
class Smoothie {
    constructor(flavor, base, extras, sweetener, comments) {
        this.flavor = flavor;
        this.base = base;
        this.extras = extras;
        this.sweetener = sweetener;
        this.comments = comments;
    }

    describe() {
        return `Smoothie: ${this.flavor} flavor with ${this.base} base, 
        ${this.extras.length > 0 ? 'with ' + this.extras.join(', ') : 'without any extras'}, 
        sweetened with ${this.sweetener}. Additional comments: ${this.comments}`;
    }
}

// Function to create smoothie object and display description
function createSmoothie() {
    const flavor = document.getElementById('flavor').value;
    const base = document.getElementById('base').value;
    const extras = Array.from(document.getElementById('extras').selectedOptions, option => option.value);
    const sweetener = document.querySelector('input[name="sweetener"]:checked').value;
    const comments = document.getElementById('comments').value;

    const smoothie = new Smoothie(flavor, base, extras, sweetener, comments);
    document.getElementById('smoothieDescription').innerText = smoothie.describe();
}
