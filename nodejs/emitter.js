function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, event) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(event);
}

Emitter.prototype.emit = function(type) {
    this.events[type].forEach(function (event) {
        event();
    });
}

module.exports = Emitter;