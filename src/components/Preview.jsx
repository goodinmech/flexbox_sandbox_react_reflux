import React from 'react';
import Block from 'components/Block';

class Preview extends React.Component {

  render() {

    const blocks = this.props.blocks.map((block, index) => {
        let isSelected = (this.props.selectedBlock === block);
        return <Block isSlected={isSelected} key={index} index={index} model={block} />
    });

    return (
      <div className="Preview">
        <div className="Container" style={this.props.containerStyles}>{blocks}</div>
      </div>
    )
  }

}

export default Preview;
