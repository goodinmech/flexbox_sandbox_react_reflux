import React, { Component } from 'react';
import BlockActions from 'actions/BlockActions'
import camelToKebab from 'tools/camelToKebab'

class BlockOptions extends React.Component {

    constructor(props) {
      super(props);
    }

    handleInput = (e) => {

      let value = e.target.value;
      let name = e.target.name;

      var options = Object.assign({}, this.props.styles);
      options[name] = value;

      this.setState({
        options: options
      });

      if (this.props.type === "block") {
        BlockActions.changeBlockStyle(options);
      }

      if (this.props.type === "container") {
        BlockActions.changeContainerStyle(options);
      }
    }

    render() {

      const styles = this.props.styles;

      let options = []

      for (let prop in styles) {
        let value = styles[prop];

        if (this.props.showOnlyProperies && this.props.showOnlyProperies.indexOf(prop) === -1) continue;

        options.push(
          <tr key={prop}>
            <td>{camelToKebab(prop)}</td>
            <td>
              <input className="BlockOptions__input" onChange={this.handleInput} name={prop} value={this.props.styles[prop]} />
            </td>
          </tr>
        );
      }

      return (
        <div className="BlockOptions">
          <table>
            <tbody>
              {options}
            </tbody>
          </table>
        </div>
      )
    }
}

export default BlockOptions;
