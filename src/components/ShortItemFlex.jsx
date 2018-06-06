import React, { Component } from 'react';

class ShortItemFlex extends React.Component {

    render() {

      // 'flex: none | [ ('flex-grow') ('flex-shrink')? || ('flex-basis') ]'

      let { styles } = this.props;
      let { flexGrow, flexShrink, flexBasis } = styles;

      return (
        <div className="ShortItemFlex">flex: {flexGrow} {flexShrink} {flexBasis}</div>
      )
    }

}

export default ShortItemFlex;
