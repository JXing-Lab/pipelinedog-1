var React = require('react');

var HeaderPanel = React.createClass({
  displayName: "HeaderPanel",


  render: function () {
    return React.createElement(
      "header",
      { className: "toolbar" },
      React.createElement(
        "div",
        { className: "toolbar-actions" },
        React.createElement(
          "div",
          { className: "btn-group" },
          React.createElement(
            "button",
            { className: "btn btn-large btn-default", onClick: this.props.openProject },
            React.createElement("span", { className: "icon icon-folder icon-text" }),
            "Open Project"
          ),
          React.createElement(
            "button",
            { className: "btn btn-large btn-default", onClick: this.props.saveProject },
            React.createElement("span", { className: "icon icon-floppy icon-text" }),
            "Save Project"
          ),
          React.createElement(
            "button",
            { className: "btn btn-large btn-default", onClick: this.props.saveAsProject },
            React.createElement("span", { className: "icon icon-floppy icon-text" }),
            "Save As..."
          ),
          React.createElement(
            "button",
            { className: "btn btn-large btn-default", onClick: this.props.importFile },
            React.createElement("span", { className: "icon icon-doc-text icon-text" }),
            "Import File"
          )
        ),
        React.createElement(
          "button",
          { className: "btn btn-large btn-default pull-right", onClick: this.props.runCode },
          React.createElement("span", { className: "icon icon-play icon-text" }),
          "Run"
        ),
        React.createElement(
          "button",
          { className: "btn btn-large btn-default pull-right", onClick: this.props.exportCode },
          React.createElement("span", { className: "icon icon-export icon-text" }),
          "Export"
        ),
        React.createElement(
          "button",
          { className: "btn btn-large btn-default pull-right", onClick: this.props.mapCode },
          React.createElement("span", { className: "icon icon-arrows-ccw icon-text" }),
          "Map / Tool"
        )
      )
    );
  }
});

module.exports = HeaderPanel;