import Reflux from 'reflux'

var BlockActions = Reflux.createActions([
	'selectBlock',
	'addBlock',
	'removeSelectedBlock',
	'cloneSelectedBlock',
	'toggleViewMode',
	'changeBlockStyle',
	'changeContainerStyle'
]);

export default BlockActions;
