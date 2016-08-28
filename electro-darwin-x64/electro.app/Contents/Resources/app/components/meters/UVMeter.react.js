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

var UVMeter = function (_React$Component) {
  _inherits(UVMeter, _React$Component);

  function UVMeter(props) {
    _classCallCheck(this, UVMeter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(UVMeter).call(this, props));
  }

  _createClass(UVMeter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var uvmeter = this.refs.uvMeter;
      var canvas = $(uvmeter).get()[0].getContext("2d");

      this.props.track.channel.uvmeter.onaudioprocess = function () {
        var array = new Uint8Array(_this2.props.track.channel.analyser.frequencyBinCount);
        _this2.props.track.channel.analyser.getByteFrequencyData(array);
        canvas.clearRect(0, 0, 1000, 599);
        canvas.fillStyle = '#ffffff';
        var average = _this2.getAvg(array);
        canvas.fillRect(0, 0, average * 2, 100);
      };
    }
  }, {
    key: 'getAvg',
    value: function getAvg(array) {
      var values = 0;
      var average;
      var length = array.length;

      for (var i = 0; i < length; i++) {
        values += array[i];
      }

      average = values / length;
      return average;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'uv-meter' },
        _react2.default.createElement('canvas', { ref: 'uvMeter' })
      );
    }
  }]);

  return UVMeter;
}(_react2.default.Component);

exports.default = UVMeter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWV0ZXJzL1VWTWV0ZXIucmVhY3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxPOzs7QUFFSixtQkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsc0ZBQ1YsS0FEVTtBQUVqQjs7Ozt3Q0FFa0I7QUFBQTs7QUFDakIsVUFBSSxVQUFVLEtBQUssSUFBTCxDQUFVLE9BQXhCO0FBQ0EsVUFBSSxTQUFTLEVBQUUsT0FBRixFQUFXLEdBQVgsR0FBaUIsQ0FBakIsRUFBb0IsVUFBcEIsQ0FBK0IsSUFBL0IsQ0FBYjs7QUFFQSxXQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE9BQWpCLENBQXlCLE9BQXpCLENBQWlDLGNBQWpDLEdBQWtELFlBQU07QUFDcEQsWUFBSSxRQUFTLElBQUksVUFBSixDQUFlLE9BQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsT0FBakIsQ0FBeUIsUUFBekIsQ0FBa0MsaUJBQWpELENBQWI7QUFDQSxlQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE9BQWpCLENBQXlCLFFBQXpCLENBQWtDLG9CQUFsQyxDQUF1RCxLQUF2RDtBQUNBLGVBQU8sU0FBUCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixJQUF2QixFQUE2QixHQUE3QjtBQUNBLGVBQU8sU0FBUCxHQUFtQixTQUFuQjtBQUNBLFlBQUksVUFBVSxPQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWQ7QUFDQSxlQUFPLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0IsVUFBVSxDQUE5QixFQUFnQyxHQUFoQztBQUNILE9BUEQ7QUFRRDs7OzJCQUVNLEssRUFBTTtBQUNYLFVBQUksU0FBUyxDQUFiO0FBQ0EsVUFBSSxPQUFKO0FBQ0EsVUFBSSxTQUFTLE1BQU0sTUFBbkI7O0FBRUEsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQXBCLEVBQTRCLEdBQTVCLEVBQWlDO0FBQzdCLGtCQUFVLE1BQU0sQ0FBTixDQUFWO0FBQ0g7O0FBRUQsZ0JBQVUsU0FBUyxNQUFuQjtBQUNBLGFBQU8sT0FBUDtBQUVEOzs7NkJBRU87QUFDTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFLGtEQUFRLEtBQUksU0FBWjtBQURGLE9BREY7QUFLRDs7OztFQXhDbUIsZ0JBQU0sUzs7a0JBMkNiLE8iLCJmaWxlIjoiY29tcG9uZW50cy9tZXRlcnMvVVZNZXRlci5yZWFjdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBVVk1ldGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB2YXIgdXZtZXRlciA9IHRoaXMucmVmcy51dk1ldGVyO1xuICAgIHZhciBjYW52YXMgPSAkKHV2bWV0ZXIpLmdldCgpWzBdLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIHRoaXMucHJvcHMudHJhY2suY2hhbm5lbC51dm1ldGVyLm9uYXVkaW9wcm9jZXNzID0gKCkgPT4ge1xuICAgICAgICB2YXIgYXJyYXkgPSAgbmV3IFVpbnQ4QXJyYXkodGhpcy5wcm9wcy50cmFjay5jaGFubmVsLmFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgdGhpcy5wcm9wcy50cmFjay5jaGFubmVsLmFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGFycmF5KTtcbiAgICAgICAgY2FudmFzLmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA1OTkpO1xuICAgICAgICBjYW52YXMuZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xuICAgICAgICB2YXIgYXZlcmFnZSA9IHRoaXMuZ2V0QXZnKGFycmF5KTtcbiAgICAgICAgY2FudmFzLmZpbGxSZWN0KDAsMCxhdmVyYWdlICogMiwxMDApO1xuICAgIH07XG4gIH1cblxuICBnZXRBdmcoYXJyYXkpe1xuICAgIHZhciB2YWx1ZXMgPSAwO1xuICAgIHZhciBhdmVyYWdlO1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlcyArPSBhcnJheVtpXTtcbiAgICB9XG5cbiAgICBhdmVyYWdlID0gdmFsdWVzIC8gbGVuZ3RoO1xuICAgIHJldHVybiBhdmVyYWdlO1xuXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3V2LW1ldGVyJz5cbiAgICAgICAgPGNhbnZhcyByZWY9J3V2TWV0ZXInPjwvY2FudmFzPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVVk1ldGVyO1xuIl19