import React, { Component } from 'react';
import BlockOptions from 'components/BlockOptions';
import ShortItemFlex from 'components/ShortItemFlex';
import BlockStore from 'stores/BlockStore'

class OptionsPanel extends React.Component {

    render() {

      let blockOptions = null;

      const flexProperies = ['order', 'flexGrow', 'flexShrink', 'flexBasis', 'alignSelf'];
      const styleProperies = ['color', 'width', 'height', 'margin', 'textAlign', 'lineHeight'];

      if (BlockStore.getSelectedBlock()) {
        blockOptions = (
          <div>
            <div className="OptionsPanel__title">Block #{BlockStore.getSelectedBlockId()}</div>

            <ShortItemFlex styles={BlockStore.getSelectedBlock().styles} />
            <BlockOptions type="block" showOnlyProperies={flexProperies} styles={BlockStore.getSelectedBlock().styles} block={BlockStore.getSelectedBlock()} />
            <BlockOptions type="block" showOnlyProperies={styleProperies} styles={BlockStore.getSelectedBlock().styles} block={BlockStore.getSelectedBlock()} />
          </div>
        )
      }

      let containerOptions = (
        <div>
          <div className="OptionsPanel__title">Container</div>
          <BlockOptions type="container" styles={BlockStore.getContainer().styles} block={BlockStore.getContainer()} />
        </div>
      )

      return (
        <div className="OptionsPanel">
          <div className="row">
            <div className="col">
              {blockOptions}
            </div>
            <div className="col">
              {containerOptions}
            </div>
          </div>
        </div>
      )
    }

}

export default OptionsPanel;
