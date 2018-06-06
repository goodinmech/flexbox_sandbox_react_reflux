import React from 'react';
import BlockActions from 'actions/BlockActions';

class ToolBar extends React.Component {

    handleAddNewBlock() {
      BlockActions.addBlock()
    }

    handleRemoveSelectedBlock = () => {
      BlockActions.removeSelectedBlock()
    }

    handleCloneSelectedBlock = () => {
      BlockActions.cloneSelectedBlock()
    }

    tiggleViewMode = () => {
      BlockActions.toggleViewMode()
    }

    render() {

      const buttons = [];

      buttons.push(<button onClick={this.handleAddNewBlock} key="add-button">Add new block</button>);

      if (this.props.isHaveSelectedBlock) {
        buttons.push(<button onClick={this.handleRemoveSelectedBlock} key="remove-button">Remove current block</button>);
        buttons.push(<button onClick={this.handleCloneSelectedBlock} key="clone-button">Clone current block</button>);
      }

      buttons.push(<button onClick={this.tiggleViewMode} key="toggle-button">Toggle view mode</button>);

      return (
        <div className='ToolBar'>
          {buttons}
        </div>
      )
    }

}

export default ToolBar;
