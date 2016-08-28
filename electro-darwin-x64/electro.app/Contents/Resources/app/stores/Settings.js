'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _BaseStore2 = require('./BaseStore.js');

var _BaseStore3 = _interopRequireDefault(_BaseStore2);

var _Dispatcher = require('../dispatcher/Dispatcher.js');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_BaseStore) {
	_inherits(Settings, _BaseStore);

	function Settings() {
		_classCallCheck(this, Settings);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Settings).apply(this, arguments));
	}

	return Settings;
}(_BaseStore3.default);

var instance = new Settings();

instance.dispatchToken = _Dispatcher2.default.register(function (action) {
	switch (action.type) {
		case 'set_cue':
			tracks[action.track.id] = action.track;
			instance.emitChange();
			break;
	}
});

exports.default = instance;