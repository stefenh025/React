var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

    _this.handleOnChange = function (event) {
      _this.setState(_defineProperty({}, event.target.name, event.target.value));
    };

    _this.handleOnSubmit = function (event) {
      event.preventDefault();
      _this.setState({
        submitted: true
      });
    };

    _this.state = {
      firstName: "",
      lastName: "",
      email: "",
      submitted: false
    };
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var firstName = this.state.firstName;
      var lastName = this.state.lastName;
      var email = this.state.email;
      return React.createElement(
        "div",
        null,
        React.createElement(
          "label",
          null,
          "Sign up for our newsletter!"
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleOnSubmit },
          React.createElement("input", {
            onChange: this.handleOnChange,
            type: "text",
            name: "firstName",
            placeholder: "First name here",
            value: this.state.firstName
          }),
          React.createElement("br", null),
          React.createElement("input", {
            onChange: this.handleOnChange,
            type: "text",
            name: "lastName",
            placeholder: "Last name here",
            value: this.state.lastName
          }),
          React.createElement("br", null),
          React.createElement("input", {
            onChange: this.handleOnChange,
            type: "text",
            name: "email",
            placeholder: "Email here",
            value: this.state.email
          }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { "class": "btn btn-primary" },
            "Sign Up!"
          )
        ),
        this.state.submitted ? React.createElement(
          "p",
          null,
          "Thank you for signing up ",
          this.state.firstName,
          "!"
        ) : null
      );
    }
  }]);

  return Form;
}(React.Component);

ReactDOM.render(React.createElement(Form, null), document.getElementById('root'));