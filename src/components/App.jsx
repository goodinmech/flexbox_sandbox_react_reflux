import React from 'react'
import Reflux from 'reflux'

import Preview from 'components/Preview'
import ToolBar from 'components/ToolBar'
import OptionsPanel from 'components/OptionsPanel'

import BlockStore from 'stores/BlockStore'

class App extends Reflux.Component {

  constructor(props) {
    super(props);
    this.store = BlockStore;
  }

  render() {

    let isHaveSelectedBlock = (this.state.selectedBlock) ? true : false;
    let className = `App ${this.state.viewMode}`;

    return (
      <div className={className}>
        <Preview containerStyles={this.state.container.getStyles()} blocks={this.state.blocks} selectedBlock={this.state.selectedBlock} />
        <ToolBar isHaveSelectedBlock={isHaveSelectedBlock} />
        <OptionsPanel />
      </div>
    );
  }
}

export default App;
