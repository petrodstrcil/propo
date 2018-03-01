
var EventTracker = function(name) {
    this.name = name;
    this._events = {};
    this._notify = {};
};

EventTracker.prototype.on = function(event, callback){
    if (this._events[event] === undefined) {
        this._events[event] = [];
    }
    this._events[event].push(callback);
};

EventTarget.prototype._notify = function(otherObject, event){
    if (this._notify[event] === undefined) {
        this._notify[event] = [];
    }
    this._notify[event].push(otherObject);
};

EventTarget.prototype.trig = function(event, data){
};

EventTarget.prototype.trigger = function(event, data){
    var listOfCallbacks = this._events[event] || 0;
    var objectsToNotify = this._notify[event] || 0;
    var i;

    for (i = 0; i < listOfCallbacks.length; i++){
        listOfCallbacks[i].call(this, data);
    }

    for (i = 0; i < objectsToNotify.length; i++){
        objectsToNotify[i].trigger(event, data);
    }

};