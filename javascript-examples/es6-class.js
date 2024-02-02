class Counter {
  count;
  counterElem;

  constructor() {
    this.count = 0;
  }
}


class ButtonCounter extends Counter {
  constructor() {
    super();
    this.counterElem = document.getElementById('counter');
    this.counterElem.innerHTML = this.count.toString();
    const button = document.getElementById('inc');

    // INFO: We have to bind `this` to the method given the way we're calling the function, or else `this`
    // binds to the button element at the callsite
    this.incrementCounter = this.incrementCounter.bind(this);
    button.addEventListener('click', this.incrementCounter);
    button.addEventListener('click', () => this.incrementCounter());

    // INFO: Arrow functions bind at declaration site, not callsite, so this works
    // button.addEventListener('click', () => {
    //   console.log(this);
    //   this.incrementCounter()
    // });
  }

  incrementCounter() {
    this.count += 1;
    this.counterElem.innerHTML = this.count;
  }
}

const buttonCounter = new ButtonCounter();
console.log(buttonCounter);

