const EventEmitter = require('events');
/**
 * In event order matterd if we write emit before on it wont execute
 * So first write event on listeners and after that emit the event
 */
const customEventEmitter = new EventEmitter();

customEventEmitter.on('itemAdded', (name, price) => {
    console.log(`Item added to with name : ${name} and price : ${price}`)
})

customEventEmitter.on('itemAdded',  (name, price) => {
    console.log(`Price added to invoice for item : ${name} with price : ${price}`)
})

customEventEmitter.emit('itemAdded', 'Apple', 23)
