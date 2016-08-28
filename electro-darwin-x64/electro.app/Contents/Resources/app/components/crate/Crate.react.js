'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Tracks = require('../../actions/Tracks.js');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Tracks3 = require('../../stores/Tracks.js');

var _Tracks4 = _interopRequireDefault(_Tracks3);

var _ItemReact = require('./item/Item.react.js');

var _ItemReact2 = _interopRequireDefault(_ItemReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Crate = function (_React$Component) {
  _inherits(Crate, _React$Component);

  function Crate(props) {
    _classCallCheck(this, Crate);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Crate).call(this, props));

    var tracks = _Tracks4.default.getTracks();
    _this.state = {
      visible: { display: 'none' },
      chevron: 'fa fa-chevron-left'
    };

    _this.toggleVisible = _this.toggleVisible.bind(_this);
    _this.loadSearch = _this.loadSearch.bind(_this);
    _this.enter = _this.enter.bind(_this);

    return _this;
  }

  _createClass(Crate, [{
    key: 'enter',
    value: function enter(e) {

      if ('Enter' === e.key) {
        _Tracks2.default.searchTracks(e.target.value);
        this.setState({ visible: {}, chevron: 'fa fa-chevron-down' });
        e.target.value = '';
      }
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.setState({ tracks: _Tracks4.default.getTracks() });
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      var items = [];
      for (var key in this.props.tracks) {
        if (this.props.tracks[key].search) {
          items.push(_react2.default.createElement(_ItemReact2.default, { key: key, track: this.props.tracks[key], onToggle: this.toggleVisible }));
        }
      }
      return items;
    }
  }, {
    key: 'toggleVisible',
    value: function toggleVisible() {
      if (!this.state.visible.display) {
        this.setState({ visible: { display: 'none' }, chevron: 'fa fa-chevron-left' });
      } else {
        this.setState({ visible: {}, chevron: 'fa fa-chevron-down' });
      }
    }
  }, {
    key: 'loadSearch',
    value: function loadSearch(e) {
      if (this.refs.searchResult.scrollHeight - this.refs.searchResult.scrollTop === this.refs.searchResult.clientHeight) {
        _Tracks2.default.getNextTracks();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'crate lv1_blur' },
          _react2.default.createElement('input', {
            ref: 'url',
            type: 'text',
            onKeyUp: this.enter,
            placeholder: 'SEARCH' }),
          _react2.default.createElement(
            'a',
            { onClick: this.toggleVisible },
            _react2.default.createElement('i', { className: this.state.chevron })
          )
        ),
        _react2.default.createElement(
          'div',
          {
            ref: 'searchResult',
            className: 'search-result',
            style: this.state.visible,
            onScroll: this.loadSearch },
          this.getItems()
        )
      );
    }
  }]);

  return Crate;
}(_react2.default.Component);

exports.default = Crate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY3JhdGUvQ3JhdGUucmVhY3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxLOzs7QUFFSixpQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUZBQ1gsS0FEVzs7QUFHakIsUUFBSSxTQUFTLGlCQUFXLFNBQVgsRUFBYjtBQUNBLFVBQUssS0FBTCxHQUFhO0FBQ1gsZUFBUyxFQUFDLFNBQVMsTUFBVixFQURFO0FBRVgsZUFBUztBQUZFLEtBQWI7O0FBS0EsVUFBSyxhQUFMLEdBQXFCLE1BQUssYUFBTCxDQUFtQixJQUFuQixPQUFyQjtBQUNBLFVBQUssVUFBTCxHQUFrQixNQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsT0FBbEI7QUFDQSxVQUFLLEtBQUwsR0FBYSxNQUFLLEtBQUwsQ0FBVyxJQUFYLE9BQWI7O0FBWGlCO0FBYWxCOzs7OzBCQUVLLEMsRUFBRTs7QUFFTixVQUFHLFlBQVksRUFBRSxHQUFqQixFQUFxQjtBQUNuQix5QkFBWSxZQUFaLENBQXlCLEVBQUUsTUFBRixDQUFTLEtBQWxDO0FBQ0EsYUFBSyxRQUFMLENBQWMsRUFBQyxTQUFTLEVBQVYsRUFBYyxTQUFTLG9CQUF2QixFQUFkO0FBQ0EsVUFBRSxNQUFGLENBQVMsS0FBVCxHQUFpQixFQUFqQjtBQUNEO0FBRUY7OzsrQkFFUztBQUNSLFdBQUssUUFBTCxDQUFjLEVBQUMsUUFBUSxpQkFBVyxTQUFYLEVBQVQsRUFBZDtBQUNEOzs7K0JBRVM7QUFDUixVQUFJLFFBQVEsRUFBWjtBQUNBLFdBQUksSUFBSSxHQUFSLElBQWUsS0FBSyxLQUFMLENBQVcsTUFBMUIsRUFBaUM7QUFDL0IsWUFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEdBQWxCLEVBQXVCLE1BQTFCLEVBQWlDO0FBQy9CLGdCQUFNLElBQU4sQ0FBVyxxREFBTSxLQUFLLEdBQVgsRUFBZ0IsT0FBTyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEdBQWxCLENBQXZCLEVBQStDLFVBQVUsS0FBSyxhQUE5RCxHQUFYO0FBQ0Q7QUFDRjtBQUNELGFBQU8sS0FBUDtBQUNEOzs7b0NBRWM7QUFDYixVQUFHLENBQUMsS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixPQUF2QixFQUErQjtBQUM3QixhQUFLLFFBQUwsQ0FBYyxFQUFDLFNBQVMsRUFBQyxTQUFTLE1BQVYsRUFBVixFQUE2QixTQUFTLG9CQUF0QyxFQUFkO0FBQ0QsT0FGRCxNQUVLO0FBQ0gsYUFBSyxRQUFMLENBQWMsRUFBQyxTQUFTLEVBQVYsRUFBYyxTQUFTLG9CQUF2QixFQUFkO0FBQ0Q7QUFDRjs7OytCQUVVLEMsRUFBRTtBQUNYLFVBQUcsS0FBSyxJQUFMLENBQVUsWUFBVixDQUF1QixZQUF2QixHQUFzQyxLQUFLLElBQUwsQ0FBVSxZQUFWLENBQXVCLFNBQTdELEtBQ0csS0FBSyxJQUFMLENBQVUsWUFBVixDQUF1QixZQUQ3QixFQUMyQztBQUN6Qyx5QkFBWSxhQUFaO0FBQ0Q7QUFDRjs7OzZCQUVPO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFDRSxpQkFBSSxLQUROO0FBRUUsa0JBQUssTUFGUDtBQUdFLHFCQUFTLEtBQUssS0FIaEI7QUFJRSx5QkFBWSxRQUpkLEdBREY7QUFNSTtBQUFBO0FBQUEsY0FBRyxTQUFTLEtBQUssYUFBakI7QUFDRSxpREFBRyxXQUFXLEtBQUssS0FBTCxDQUFXLE9BQXpCO0FBREY7QUFOSixTQURGO0FBV0U7QUFBQTtBQUFBO0FBQ0UsaUJBQUksY0FETjtBQUVFLHVCQUFVLGVBRlo7QUFHRSxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxPQUhwQjtBQUlFLHNCQUFVLEtBQUssVUFKakI7QUFLRyxlQUFLLFFBQUw7QUFMSDtBQVhGLE9BREY7QUFxQkQ7Ozs7RUE5RWlCLGdCQUFNLFM7O2tCQWlGWCxLIiwiZmlsZSI6ImNvbXBvbmVudHMvY3JhdGUvQ3JhdGUucmVhY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYWNrQWN0aW9uIGZyb20gJy4uLy4uL2FjdGlvbnMvVHJhY2tzLmpzJztcbmltcG9ydCBUcmFja1N0b3JlICBmcm9tICcuLi8uLi9zdG9yZXMvVHJhY2tzLmpzJztcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbS9JdGVtLnJlYWN0LmpzJztcblxuY2xhc3MgQ3JhdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdmFyIHRyYWNrcyA9IFRyYWNrU3RvcmUuZ2V0VHJhY2tzKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IHtkaXNwbGF5OiAnbm9uZSd9LFxuICAgICAgY2hldnJvbjogJ2ZhIGZhLWNoZXZyb24tbGVmdCdcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZVZpc2libGUgPSB0aGlzLnRvZ2dsZVZpc2libGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvYWRTZWFyY2ggPSB0aGlzLmxvYWRTZWFyY2guYmluZCh0aGlzKTtcbiAgICB0aGlzLmVudGVyID0gdGhpcy5lbnRlci5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICBlbnRlcihlKXtcblxuICAgIGlmKCdFbnRlcicgPT09IGUua2V5KXtcbiAgICAgIFRyYWNrQWN0aW9uLnNlYXJjaFRyYWNrcyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2aXNpYmxlOiB7fSwgY2hldnJvbjogJ2ZhIGZhLWNoZXZyb24tZG93bid9KTtcbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgfVxuXG4gIH1cblxuICBvbkNoYW5nZSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3RyYWNrczogVHJhY2tTdG9yZS5nZXRUcmFja3MoKX0pO1xuICB9XG5cbiAgZ2V0SXRlbXMoKXtcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGZvcihsZXQga2V5IGluIHRoaXMucHJvcHMudHJhY2tzKXtcbiAgICAgIGlmKHRoaXMucHJvcHMudHJhY2tzW2tleV0uc2VhcmNoKXtcbiAgICAgICAgaXRlbXMucHVzaCg8SXRlbSBrZXk9e2tleX0gdHJhY2s9e3RoaXMucHJvcHMudHJhY2tzW2tleV19IG9uVG9nZ2xlPXt0aGlzLnRvZ2dsZVZpc2libGV9Lz4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICB0b2dnbGVWaXNpYmxlKCl7XG4gICAgaWYoIXRoaXMuc3RhdGUudmlzaWJsZS5kaXNwbGF5KXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Zpc2libGU6IHtkaXNwbGF5OiAnbm9uZSd9LCBjaGV2cm9uOiAnZmEgZmEtY2hldnJvbi1sZWZ0J30pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmlzaWJsZToge30sIGNoZXZyb246ICdmYSBmYS1jaGV2cm9uLWRvd24nfSk7XG4gICAgfVxuICB9XG5cbiAgbG9hZFNlYXJjaChlKXtcbiAgICBpZih0aGlzLnJlZnMuc2VhcmNoUmVzdWx0LnNjcm9sbEhlaWdodCAtIHRoaXMucmVmcy5zZWFyY2hSZXN1bHQuc2Nyb2xsVG9wXG4gICAgICA9PT0gdGhpcy5yZWZzLnNlYXJjaFJlc3VsdC5jbGllbnRIZWlnaHQpIHtcbiAgICAgIFRyYWNrQWN0aW9uLmdldE5leHRUcmFja3MoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NyYXRlIGx2MV9ibHVyJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj0ndXJsJ1xuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuZW50ZXJ9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nU0VBUkNIJy8+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnRvZ2dsZVZpc2libGV9PlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2hldnJvbn0+PC9pPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj0nc2VhcmNoUmVzdWx0J1xuICAgICAgICAgIGNsYXNzTmFtZT0nc2VhcmNoLXJlc3VsdCdcbiAgICAgICAgICBzdHlsZT17dGhpcy5zdGF0ZS52aXNpYmxlfVxuICAgICAgICAgIG9uU2Nyb2xsPXt0aGlzLmxvYWRTZWFyY2h9PlxuICAgICAgICAgIHt0aGlzLmdldEl0ZW1zKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmF0ZTtcbiJdfQ==