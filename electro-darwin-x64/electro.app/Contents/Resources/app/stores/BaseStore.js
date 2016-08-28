'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHANGE_EVENT = 'change';

var BaseStore = function (_EventEmitter) {
	_inherits(BaseStore, _EventEmitter);

	function BaseStore() {
		_classCallCheck(this, BaseStore);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseStore).call(this));
	}

	_createClass(BaseStore, [{
		key: 'emitChange',
		value: function emitChange() {
			this.emit(CHANGE_EVENT);
		}
	}, {
		key: 'listen',
		value: function listen(cb) {
			this.on(CHANGE_EVENT, cb);
		}
	}, {
		key: 'remove',
		value: function remove(cb) {
			this.removeListener(CHANGE_EVENT, cb);
		}
	}]);

	return BaseStore;
}(_events2.default);

exports.default = BaseStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3Jlcy9CYXNlU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlLFFBQXJCOztJQUVNLFM7OztBQUVMLHNCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OzsrQkFFWTtBQUNaLFFBQUssSUFBTCxDQUFVLFlBQVY7QUFDQTs7O3lCQUVNLEUsRUFBSTtBQUNWLFFBQUssRUFBTCxDQUFRLFlBQVIsRUFBc0IsRUFBdEI7QUFDQTs7O3lCQUVNLEUsRUFBSTtBQUNSLFFBQUssY0FBTCxDQUFvQixZQUFwQixFQUFrQyxFQUFsQztBQUNGOzs7Ozs7a0JBSWEsUyIsImZpbGUiOiJzdG9yZXMvQmFzZVN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xuXG5jb25zdCBDSEFOR0VfRVZFTlQgPSAnY2hhbmdlJztcblxuY2xhc3MgQmFzZVN0b3JlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0ZW1pdENoYW5nZSgpIHtcblx0XHR0aGlzLmVtaXQoQ0hBTkdFX0VWRU5UKTtcblx0fVxuXG5cdGxpc3RlbihjYikge1xuXHRcdHRoaXMub24oQ0hBTkdFX0VWRU5ULCBjYik7XG5cdH1cblxuXHRyZW1vdmUoY2IpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKENIQU5HRV9FVkVOVCwgY2IpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVN0b3JlO1xuIl19