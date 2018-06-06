class ContainerModel {

  constructor() {
    this.styles = {
      // backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      alignContent: 'stretch'
    }
  }

  setStyle(style) {
    this.styles = Object.assign({}, this.styles, style);
  }

  getStyles() {
    return this.styles;
  }

  getStyle(name) {
    return this.styles[name];
  }

}

export default new ContainerModel;
