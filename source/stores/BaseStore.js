import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

class BaseStore extends EventEmitter {
	constructor() {
		super();
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	listen(cb) {
		this.on(CHANGE_EVENT, cb);
	}

	remove(cb) {
    this.removeListener(CHANGE_EVENT, cb);
	}

}

export default BaseStore;
