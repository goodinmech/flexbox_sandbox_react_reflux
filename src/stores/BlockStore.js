import Reflux from 'reflux'

import BlockActions from 'actions/BlockActions'
import BlockModel from 'models/BlockModel'
import ContainerModel from 'models/ContainerModel'

class BlockStore extends Reflux.Store {

  constructor() {
    super();

    this.state = {
      blocks: [],
      selectedBlock: null,
      viewMode: 'halfScreen',
      container: ContainerModel
    };

    this.listenables = BlockActions;

    this.testBlocks();
  }

  testBlocks() {

    this.addDummyBlocks()
    this.addDummyBlocks()
    this.addDummyBlocks()
    this.addDummyBlocks()
    BlockActions.selectBlock(0)
  }

  testUpdateColor() {

    let block = this.getBlockByIndex(0);
    if (!block) return;

    block.setStyle({'color': 'blue'});

    this.setState({
      blocks: this.state.blocks
    });
  }

  getBlockByIndex(index) {
    return this.state.blocks[index];
  }

  addDummyBlocks() {

    var newBlock = new BlockModel();

    this.setState({
      blocks: [...this.state.blocks, newBlock]
    });

    return newBlock;
  }

  addBlock() {

    let block = this.addDummyBlocks();
    this.setCurrentBlock(block);
  }

  getSelectedBlockId() {
    console.log('call: getSelectedBlockId')
    if (this.state.selectedBlock === null) return null;
    return this.state.blocks.indexOf(this.state.selectedBlock);
  }

  getSelectedBlock() {
    return this.state.selectedBlock;
  }

  getContainer() {
    return this.state.container;
  }

  setCurrentBlock(block) {
    this.setState({selectedBlock: block})
  }

  onRemoveSelectedBlock() {

    if (!this.state.selectedBlock) return;

    const index = this.state.blocks.indexOf(this.state.selectedBlock);

    if (index !== -1) {
      this.state.blocks.splice(index, 1);
    }

    this.setState({
      selectedBlock: null,
      blocks: this.state.blocks
    });

  }

  onCloneSelectedBlock() {

    if (!this.state.selectedBlock) return;

    const newBlockClone = Object.assign(Object.create( Object.getPrototypeOf(this.state.selectedBlock)), this.state.selectedBlock)

    this.setState({
      selectedBlock: newBlockClone,
      blocks: [...this.state.blocks, newBlockClone]
    });
  }

  onChangeBlockStyle(styles) {
    this.state.selectedBlock.setStyle(styles)

    this.setState({
      blocks: this.state.blocks
    });
  }

  onChangeContainerStyle(styles) {

    this.state.container.setStyle(styles)
    this.setState({
      container: this.state.container
    });
  }

  onToggleViewMode() {

    let toggledViewMode = (this.state.viewMode === 'halfScreen') ? 'fullScreen' : 'halfScreen';

    this.setState({
      viewMode: toggledViewMode
    })
  }

  onSelectBlock(index) {
    if (!this.state.blocks[index]) return;

    this.setState({
      selectedBlock: this.state.blocks[index]
    });
  }

}

export default new BlockStore;
