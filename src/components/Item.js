class Item {
  constructor(text) {
    this.id = Math.random().toString(32).substring(2, 9);
    this.text = text;
    this.done = false;
  }
}

export default Item;
