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

var Eq = function (_React$Component) {
  _inherits(Eq, _React$Component);

  function Eq(props) {
    _classCallCheck(this, Eq);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Eq).call(this, props));
  }

  _createClass(Eq, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      //TODO there's a better way to set this up.
      $(this.refs.low).knob({ fgColor: '#ffffff',
        bgColor: '#81d4fa',
        height: 40,
        width: 40,
        value: 0,
        min: -32,
        max: 12,
        thickness: 0.5,
        angleOffset: 180,
        displayInput: false,
        cursor: 15,
        change: function change(v) {
          _this2.offsetGain();
          _this2.props.track.channel.low.gain.value = v;
        }
      });

      $(this.refs.mid).knob({
        fgColor: '#ffffff',
        bgColor: '#81d4fa',
        height: 40,
        width: 40,
        min: -32,
        max: 12,
        thickness: 0.5,
        angleOffset: 180,
        displayInput: false,
        cursor: 15,
        change: function change(v) {
          _this2.offsetGain();
          _this2.props.track.channel.mid.gain.value = v;
        }
      });

      $(this.refs.high).knob({
        fgColor: '#ffffff',
        bgColor: '#81d4fa',
        height: 40,
        width: 40,
        min: -32,
        max: 12,
        thickness: 0.5,
        angleOffset: 180,
        displayInput: false,
        cursor: 15,
        change: function change(v) {
          _this2.offsetGain();
          _this2.props.track.channel.high.gain.value = v;
        }
      });

      $(this.refs.gain).knob({
        fgColor: '#ffffff',
        bgColor: '#81d4fa',
        height: 40,
        width: 40,
        min: 0,
        max: 500,
        thickness: 0.5,
        cursor: 15,
        displayInput: false,
        change: function change(v) {
          _this2.props.track.channel.gain.gain.value = v / 100;
        }
      });
    }
  }, {
    key: 'offsetGain',
    value: function offsetGain() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'eq' },
        _react2.default.createElement('input', { type: 'text', ref: 'low', defaultValue: '0' }),
        _react2.default.createElement('input', { type: 'text', ref: 'mid', defaultValue: '0' }),
        _react2.default.createElement('input', { type: 'text', ref: 'high', defaultValue: '0' }),
        _react2.default.createElement('input', { type: 'text', ref: 'gain', defaultValue: '100' })
      );
    }
  }]);

  return Eq;
}(_react2.default.Component);

exports.default = Eq;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXEvRXEuUmVhY3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxFOzs7QUFFSixjQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxpRkFDVixLQURVO0FBRWpCOzs7O3dDQUVrQjtBQUFBOztBQUNuQjtBQUNFLFFBQUUsS0FBSyxJQUFMLENBQVUsR0FBWixFQUFpQixJQUFqQixDQUNFLEVBQUMsU0FBUyxTQUFWO0FBQ0MsaUJBQVMsU0FEVjtBQUVDLGdCQUFRLEVBRlQ7QUFHQyxlQUFPLEVBSFI7QUFJQyxlQUFPLENBSlI7QUFLQyxhQUFLLENBQUMsRUFMUDtBQU1DLGFBQUssRUFOTjtBQU9DLG1CQUFXLEdBUFo7QUFRQyxxQkFBYSxHQVJkO0FBU0Msc0JBQWMsS0FUZjtBQVVDLGdCQUFRLEVBVlQ7QUFXQyxnQkFBUSxnQkFBQyxDQUFELEVBQU87QUFDYixpQkFBSyxVQUFMO0FBQ0EsaUJBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsT0FBakIsQ0FBeUIsR0FBekIsQ0FBNkIsSUFBN0IsQ0FBa0MsS0FBbEMsR0FBMEMsQ0FBMUM7QUFDRjtBQWRELE9BREY7O0FBa0JBLFFBQUUsS0FBSyxJQUFMLENBQVUsR0FBWixFQUFpQixJQUFqQixDQUFzQjtBQUNsQixpQkFBUyxTQURTO0FBRWxCLGlCQUFTLFNBRlM7QUFHbEIsZ0JBQVEsRUFIVTtBQUlsQixlQUFPLEVBSlc7QUFLbEIsYUFBSyxDQUFDLEVBTFk7QUFNbEIsYUFBSyxFQU5hO0FBT2xCLG1CQUFXLEdBUE87QUFRbEIscUJBQWEsR0FSSztBQVNsQixzQkFBYyxLQVRJO0FBVWxCLGdCQUFRLEVBVlU7QUFXbEIsZ0JBQVEsZ0JBQUMsQ0FBRCxFQUFPO0FBQ2IsaUJBQUssVUFBTDtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE9BQWpCLENBQXlCLEdBQXpCLENBQTZCLElBQTdCLENBQWtDLEtBQWxDLEdBQTBDLENBQTFDO0FBQ0Q7QUFkaUIsT0FBdEI7O0FBaUJBLFFBQUUsS0FBSyxJQUFMLENBQVUsSUFBWixFQUFrQixJQUFsQixDQUF1QjtBQUNuQixpQkFBUyxTQURVO0FBRW5CLGlCQUFTLFNBRlU7QUFHbkIsZ0JBQVEsRUFIVztBQUluQixlQUFPLEVBSlk7QUFLbkIsYUFBSyxDQUFDLEVBTGE7QUFNbkIsYUFBSyxFQU5jO0FBT25CLG1CQUFXLEdBUFE7QUFRbkIscUJBQWEsR0FSTTtBQVNuQixzQkFBYyxLQVRLO0FBVW5CLGdCQUFRLEVBVlc7QUFXbkIsZ0JBQVEsZ0JBQUMsQ0FBRCxFQUFPO0FBQ2IsaUJBQUssVUFBTDtBQUNBLGlCQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE9BQWpCLENBQXlCLElBQXpCLENBQThCLElBQTlCLENBQW1DLEtBQW5DLEdBQTJDLENBQTNDO0FBQ0Q7QUFka0IsT0FBdkI7O0FBa0JBLFFBQUUsS0FBSyxJQUFMLENBQVUsSUFBWixFQUFrQixJQUFsQixDQUF1QjtBQUNuQixpQkFBUyxTQURVO0FBRW5CLGlCQUFTLFNBRlU7QUFHbkIsZ0JBQVEsRUFIVztBQUluQixlQUFPLEVBSlk7QUFLbkIsYUFBSyxDQUxjO0FBTW5CLGFBQUssR0FOYztBQU9uQixtQkFBVyxHQVBRO0FBUW5CLGdCQUFRLEVBUlc7QUFTbkIsc0JBQWMsS0FUSztBQVVuQixnQkFBUSxnQkFBQyxDQUFELEVBQU87QUFDYixpQkFBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixPQUFqQixDQUF5QixJQUF6QixDQUE4QixJQUE5QixDQUFtQyxLQUFuQyxHQUEyQyxJQUFFLEdBQTdDO0FBQ0Q7QUFaa0IsT0FBdkI7QUFjRDs7O2lDQUVXLENBRVg7Ozs2QkFFTztBQUNOLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxJQUFmO0FBQ0UsaURBQU8sTUFBSyxNQUFaLEVBQW1CLEtBQUksS0FBdkIsRUFBNkIsY0FBYSxHQUExQyxHQURGO0FBRUUsaURBQU8sTUFBSyxNQUFaLEVBQW1CLEtBQUksS0FBdkIsRUFBNkIsY0FBYSxHQUExQyxHQUZGO0FBR0UsaURBQU8sTUFBSyxNQUFaLEVBQW1CLEtBQUksTUFBdkIsRUFBOEIsY0FBYSxHQUEzQyxHQUhGO0FBSUUsaURBQU8sTUFBSyxNQUFaLEVBQW1CLEtBQUksTUFBdkIsRUFBOEIsY0FBYSxLQUEzQztBQUpGLE9BREY7QUFRRDs7OztFQTFGYyxnQkFBTSxTOztrQkE2RlIsRSIsImZpbGUiOiJjb21wb25lbnRzL2VxL0VxLlJlYWN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEVxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgLy9UT0RPIHRoZXJlJ3MgYSBiZXR0ZXIgd2F5IHRvIHNldCB0aGlzIHVwLlxuICAgICQodGhpcy5yZWZzLmxvdykua25vYihcbiAgICAgIHtmZ0NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgYmdDb2xvcjogJyM4MWQ0ZmEnLFxuICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgd2lkdGg6IDQwLFxuICAgICAgIHZhbHVlOiAwLFxuICAgICAgIG1pbjogLTMyLFxuICAgICAgIG1heDogMTIsXG4gICAgICAgdGhpY2tuZXNzOiAwLjUsXG4gICAgICAgYW5nbGVPZmZzZXQ6IDE4MCxcbiAgICAgICBkaXNwbGF5SW5wdXQ6IGZhbHNlLFxuICAgICAgIGN1cnNvcjogMTUsXG4gICAgICAgY2hhbmdlOiAodikgPT4ge1xuICAgICAgICAgdGhpcy5vZmZzZXRHYWluKCk7XG4gICAgICAgICB0aGlzLnByb3BzLnRyYWNrLmNoYW5uZWwubG93LmdhaW4udmFsdWUgPSB2O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCh0aGlzLnJlZnMubWlkKS5rbm9iKHtcbiAgICAgICAgZmdDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBiZ0NvbG9yOiAnIzgxZDRmYScsXG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIHdpZHRoOiA0MCxcbiAgICAgICAgbWluOiAtMzIsXG4gICAgICAgIG1heDogMTIsXG4gICAgICAgIHRoaWNrbmVzczogMC41LFxuICAgICAgICBhbmdsZU9mZnNldDogMTgwLFxuICAgICAgICBkaXNwbGF5SW5wdXQ6IGZhbHNlLFxuICAgICAgICBjdXJzb3I6IDE1LFxuICAgICAgICBjaGFuZ2U6ICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5vZmZzZXRHYWluKCk7XG4gICAgICAgICAgdGhpcy5wcm9wcy50cmFjay5jaGFubmVsLm1pZC5nYWluLnZhbHVlID0gdjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCh0aGlzLnJlZnMuaGlnaCkua25vYih7XG4gICAgICAgIGZnQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgYmdDb2xvcjogJyM4MWQ0ZmEnLFxuICAgICAgICBoZWlnaHQ6IDQwLFxuICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgIG1pbjogLTMyLFxuICAgICAgICBtYXg6IDEyLFxuICAgICAgICB0aGlja25lc3M6IDAuNSxcbiAgICAgICAgYW5nbGVPZmZzZXQ6IDE4MCxcbiAgICAgICAgZGlzcGxheUlucHV0OiBmYWxzZSxcbiAgICAgICAgY3Vyc29yOiAxNSxcbiAgICAgICAgY2hhbmdlOiAodikgPT4ge1xuICAgICAgICAgIHRoaXMub2Zmc2V0R2FpbigpO1xuICAgICAgICAgIHRoaXMucHJvcHMudHJhY2suY2hhbm5lbC5oaWdoLmdhaW4udmFsdWUgPSB2O1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgICQodGhpcy5yZWZzLmdhaW4pLmtub2Ioe1xuICAgICAgICBmZ0NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGJnQ29sb3I6ICcjODFkNGZhJyxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogNTAwLFxuICAgICAgICB0aGlja25lc3M6IDAuNSxcbiAgICAgICAgY3Vyc29yOiAxNSxcbiAgICAgICAgZGlzcGxheUlucHV0OiBmYWxzZSxcbiAgICAgICAgY2hhbmdlOiAodikgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMudHJhY2suY2hhbm5lbC5nYWluLmdhaW4udmFsdWUgPSB2LzEwMDtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb2Zmc2V0R2Fpbigpe1xuXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2VxJz5cbiAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHJlZj0nbG93JyBkZWZhdWx0VmFsdWU9JzAnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZWY9J21pZCcgZGVmYXVsdFZhbHVlPScwJz48L2lucHV0PlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcmVmPSdoaWdoJyBkZWZhdWx0VmFsdWU9JzAnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZWY9J2dhaW4nIGRlZmF1bHRWYWx1ZT0nMTAwJz48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcTtcbiJdfQ==