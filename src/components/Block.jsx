import React, { Component } from 'react';
import BlockActions from 'actions/BlockActions';

class Block extends React.Component {

    onClick = () => {
      BlockActions.selectBlock(this.props.index)
    }

    render() {

      const flexProperies = ['order', 'flexGrow', 'flexShrink', 'flexBasis', 'alignSelf'];

      const { model } = this.props;
      const styles = model.getStyles();

      let blockInfo = '';

      Object.keys(styles).map(function(key, index) {
         if (flexProperies.includes(key)) {
           blockInfo += (`${key}: ${styles[key]}\n`);
         }
      });

      blockInfo = blockInfo.trim();

      let className = 'Block';

      if (this.props.isSlected) {
        className += ' selected';
      }

      return (
        <div title={blockInfo} style={styles} onClick={this.onClick} className={className}>
          Block #{this.props.index}
        </div>
      )
    }

}

export default Block;
