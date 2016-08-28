'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
	_inherits(Select, _React$Component);

	function Select(props) {
		_classCallCheck(this, Select);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

		_this.sendSelection = _this.sendSelection.bind(_this);
		return _this;
	}

	_createClass(Select, [{
		key: 'buildOptions',
		value: function buildOptions() {
			var _this2 = this;

			var key = 0;
			return this.props.options.map(function (item) {
				if (_this2.props.selected === item[_this2.props.value]) {
					return _react2.default.createElement(
						'option',
						{ key: key++, value: item[_this2.props.value], selected: true },
						item[_this2.props.text]
					);
				} else {
					return _react2.default.createElement(
						'option',
						{ key: key++, value: item[_this2.props.value] },
						item[_this2.props.text]
					);
				}
			});
		}
	}, {
		key: 'sendSelection',
		value: function sendSelection(event) {
			this.props.onSelect(event.target.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'react-select' },
				_react2.default.createElement(
					'select',
					{ onChange: this.sendSelection },
					this.buildOptions()
				)
			);
		}
	}]);

	return Select;
}(_react2.default.Component);

exports.default = Select;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VsZWN0L1NlbGVjdC5yZWFjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNLE07OztBQUVMLGlCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3RkFDWixLQURZOztBQUVsQixRQUFLLGFBQUwsR0FBcUIsTUFBSyxhQUFMLENBQW1CLElBQW5CLE9BQXJCO0FBRmtCO0FBR2xCOzs7O2lDQUVjO0FBQUE7O0FBQ2QsT0FBSSxNQUFNLENBQVY7QUFDQSxVQUFPLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBdUIsVUFBQyxJQUFELEVBQVU7QUFDdkMsUUFBSSxPQUFLLEtBQUwsQ0FBVyxRQUFYLEtBQXdCLEtBQUssT0FBSyxLQUFMLENBQVcsS0FBaEIsQ0FBNUIsRUFBb0Q7QUFDbkQsWUFBTztBQUFBO0FBQUEsUUFBUSxLQUFLLEtBQWIsRUFBb0IsT0FBTyxLQUFLLE9BQUssS0FBTCxDQUFXLEtBQWhCLENBQTNCLEVBQW1ELGNBQW5EO0FBQTZELFdBQUssT0FBSyxLQUFMLENBQVcsSUFBaEI7QUFBN0QsTUFBUDtBQUNBLEtBRkQsTUFFTztBQUNOLFlBQ0M7QUFBQTtBQUFBLFFBQVEsS0FBSyxLQUFiLEVBQW9CLE9BQU8sS0FBSyxPQUFLLEtBQUwsQ0FBVyxLQUFoQixDQUEzQjtBQUFvRCxXQUFLLE9BQUssS0FBTCxDQUFXLElBQWhCO0FBQXBELE1BREQ7QUFHQTtBQUNELElBUk0sQ0FBUDtBQVNBOzs7Z0NBRWEsSyxFQUFPO0FBQ3BCLFFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsTUFBTSxNQUFOLENBQWEsS0FBakM7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLGNBQWY7QUFDQztBQUFBO0FBQUEsT0FBUSxVQUFVLEtBQUssYUFBdkI7QUFDRSxVQUFLLFlBQUw7QUFERjtBQURELElBREQ7QUFPQTs7OztFQWhDbUIsZ0JBQU0sUzs7a0JBbUNaLE0iLCJmaWxlIjoiY29tcG9uZW50cy9zZWxlY3QvU2VsZWN0LnJlYWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnNlbmRTZWxlY3Rpb24gPSB0aGlzLnNlbmRTZWxlY3Rpb24uYmluZCh0aGlzKTtcblx0fVxuXG5cdGJ1aWxkT3B0aW9ucygpIHtcblx0XHR2YXIga2V5ID0gMDtcblx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vcHRpb25zLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0aWYgKHRoaXMucHJvcHMuc2VsZWN0ZWQgPT09IGl0ZW1bdGhpcy5wcm9wcy52YWx1ZV0pIHtcblx0XHRcdFx0cmV0dXJuIDxvcHRpb24ga2V5PXtrZXkrK30gdmFsdWU9e2l0ZW1bdGhpcy5wcm9wcy52YWx1ZV19IHNlbGVjdGVkPntpdGVtW3RoaXMucHJvcHMudGV4dF19PC9vcHRpb24+XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdDxvcHRpb24ga2V5PXtrZXkrK30gdmFsdWU9e2l0ZW1bdGhpcy5wcm9wcy52YWx1ZV19PntpdGVtW3RoaXMucHJvcHMudGV4dF19PC9vcHRpb24+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzZW5kU2VsZWN0aW9uKGV2ZW50KSB7XG5cdFx0dGhpcy5wcm9wcy5vblNlbGVjdChldmVudC50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncmVhY3Qtc2VsZWN0Jz5cblx0XHRcdFx0PHNlbGVjdCBvbkNoYW5nZT17dGhpcy5zZW5kU2VsZWN0aW9ufT5cblx0XHRcdFx0XHR7dGhpcy5idWlsZE9wdGlvbnMoKX1cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcbiJdfQ==