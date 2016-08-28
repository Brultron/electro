'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CrateReact = require('./crate/Crate.react.js');

var _CrateReact2 = _interopRequireDefault(_CrateReact);

var _DeckReact = require('./deck/Deck.react.js');

var _DeckReact2 = _interopRequireDefault(_DeckReact);

var _MixerReact = require('./mixer/Mixer.react.js');

var _MixerReact2 = _interopRequireDefault(_MixerReact);

var _Tracks = require('../actions/Tracks.js');

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Tracks3 = require('../stores/Tracks.js');

var _Tracks4 = _interopRequireDefault(_Tracks3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Electro = function (_React$Component) {
  _inherits(Electro, _React$Component);

  function Electro(props) {
    _classCallCheck(this, Electro);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Electro).call(this, props));

    _this.state = { tracks: _Tracks4.default.getTracks() };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Electro, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _Tracks4.default.listen(function () {
        _this2.onChange();
      });
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.setState({
        tracks: _Tracks4.default.getTracks(),
        rightTrack: _Tracks4.default.getRightTrack(),
        leftTrack: _Tracks4.default.getLeftTrack(),
        crossfadeValue: _Tracks4.default.getCrossfadeValue()
      });
    }
  }, {
    key: 'getDecks',
    value: function getDecks() {
      var decks = [];
      for (var key in this.state.tracks) {
        var track = this.state.tracks[key];
        if (!track.search) {
          decks.push(_react2.default.createElement(_DeckReact2.default, { key: track.id, track: track }));
        }
      }
      return decks;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'electro-container' },
        _react2.default.createElement(_CrateReact2.default, { tracks: this.state.tracks }),
        _react2.default.createElement(
          'div',
          { className: 'deck-container' },
          this.getDecks()
        ),
        _react2.default.createElement(_MixerReact2.default, {
          tracks: this.state.tracks,
          leftTrack: this.state.leftTrack,
          rightTrack: this.state.rightTrack,
          crossfadeValue: this.state.crossfadeValue })
      );
    }
  }]);

  return Electro;
}(_react2.default.Component);

exports.default = Electro;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRWxlY3Ryby5yZWFjdC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxPOzs7QUFFSixtQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMkZBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBQyxRQUFRLGlCQUFXLFNBQVgsRUFBVCxFQUFiO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLE1BQUssUUFBTCxDQUFjLElBQWQsT0FBaEI7QUFIaUI7QUFJbEI7Ozs7d0NBRWtCO0FBQUE7O0FBQ2pCLHVCQUFXLE1BQVgsQ0FBa0IsWUFBTTtBQUFDLGVBQUssUUFBTDtBQUFnQixPQUF6QztBQUNEOzs7K0JBRVM7QUFDUixXQUFLLFFBQUwsQ0FDRTtBQUNFLGdCQUFRLGlCQUFXLFNBQVgsRUFEVjtBQUVFLG9CQUFZLGlCQUFXLGFBQVgsRUFGZDtBQUdFLG1CQUFXLGlCQUFXLFlBQVgsRUFIYjtBQUlFLHdCQUFnQixpQkFBVyxpQkFBWDtBQUpsQixPQURGO0FBUUQ7OzsrQkFFUztBQUNSLFVBQUksUUFBUSxFQUFaO0FBQ0EsV0FBSSxJQUFJLEdBQVIsSUFBZSxLQUFLLEtBQUwsQ0FBVyxNQUExQixFQUFpQztBQUMvQixZQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixHQUFsQixDQUFaO0FBQ0EsWUFBRyxDQUFDLE1BQU0sTUFBVixFQUFpQjtBQUNmLGdCQUFNLElBQU4sQ0FDRSxxREFBTSxLQUFLLE1BQU0sRUFBakIsRUFBcUIsT0FBTyxLQUE1QixHQURGO0FBR0Q7QUFDRjtBQUNELGFBQU8sS0FBUDtBQUNEOzs7NkJBRU87QUFDTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsbUJBQWY7QUFDRSw4REFBTyxRQUFRLEtBQUssS0FBTCxDQUFXLE1BQTFCLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGdCQUFmO0FBQ0csZUFBSyxRQUFMO0FBREgsU0FGRjtBQUtFO0FBQ0Usa0JBQVEsS0FBSyxLQUFMLENBQVcsTUFEckI7QUFFRSxxQkFBVyxLQUFLLEtBQUwsQ0FBVyxTQUZ4QjtBQUdFLHNCQUFZLEtBQUssS0FBTCxDQUFXLFVBSHpCO0FBSUUsMEJBQWdCLEtBQUssS0FBTCxDQUFXLGNBSjdCO0FBTEYsT0FERjtBQWFEOzs7O0VBbERtQixnQkFBTSxTOztrQkFxRGIsTyIsImZpbGUiOiJjb21wb25lbnRzL0VsZWN0cm8ucmVhY3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENyYXRlIGZyb20gJy4vY3JhdGUvQ3JhdGUucmVhY3QuanMnO1xuaW1wb3J0IERlY2sgZnJvbSAnLi9kZWNrL0RlY2sucmVhY3QuanMnO1xuaW1wb3J0IE1peGVyIGZyb20gJy4vbWl4ZXIvTWl4ZXIucmVhY3QuanMnXG5pbXBvcnQgVHJhY2tBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvVHJhY2tzLmpzJztcbmltcG9ydCBUcmFja1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9UcmFja3MuanMnO1xuXG5jbGFzcyBFbGVjdHJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge3RyYWNrczogVHJhY2tTdG9yZS5nZXRUcmFja3MoKX07XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgVHJhY2tTdG9yZS5saXN0ZW4oKCkgPT4ge3RoaXMub25DaGFuZ2UoKX0pO1xuICB9XG5cbiAgb25DaGFuZ2UoKXtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICB0cmFja3M6IFRyYWNrU3RvcmUuZ2V0VHJhY2tzKCksXG4gICAgICAgIHJpZ2h0VHJhY2s6IFRyYWNrU3RvcmUuZ2V0UmlnaHRUcmFjaygpLFxuICAgICAgICBsZWZ0VHJhY2s6IFRyYWNrU3RvcmUuZ2V0TGVmdFRyYWNrKCksXG4gICAgICAgIGNyb3NzZmFkZVZhbHVlOiBUcmFja1N0b3JlLmdldENyb3NzZmFkZVZhbHVlKClcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZ2V0RGVja3MoKXtcbiAgICB2YXIgZGVja3MgPSBbXTtcbiAgICBmb3IobGV0IGtleSBpbiB0aGlzLnN0YXRlLnRyYWNrcyl7XG4gICAgICB2YXIgdHJhY2sgPSB0aGlzLnN0YXRlLnRyYWNrc1trZXldO1xuICAgICAgaWYoIXRyYWNrLnNlYXJjaCl7XG4gICAgICAgIGRlY2tzLnB1c2goXG4gICAgICAgICAgPERlY2sga2V5PXt0cmFjay5pZH0gdHJhY2s9e3RyYWNrfS8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNrcztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZWxlY3Ryby1jb250YWluZXInPlxuICAgICAgICA8Q3JhdGUgdHJhY2tzPXt0aGlzLnN0YXRlLnRyYWNrc30vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVjay1jb250YWluZXInPlxuICAgICAgICAgIHt0aGlzLmdldERlY2tzKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWl4ZXJcbiAgICAgICAgICB0cmFja3M9e3RoaXMuc3RhdGUudHJhY2tzfVxuICAgICAgICAgIGxlZnRUcmFjaz17dGhpcy5zdGF0ZS5sZWZ0VHJhY2t9XG4gICAgICAgICAgcmlnaHRUcmFjaz17dGhpcy5zdGF0ZS5yaWdodFRyYWNrfVxuICAgICAgICAgIGNyb3NzZmFkZVZhbHVlPXt0aGlzLnN0YXRlLmNyb3NzZmFkZVZhbHVlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVsZWN0cm87XG4iXX0=