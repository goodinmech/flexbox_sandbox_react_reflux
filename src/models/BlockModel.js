class BlockModel {

  constructor() {

    this.text = "Block";

    this.styles = {
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf: 'auto',
      color: 'black',
      // backgroundColor: 'rgba(0, 0, 255, 0.4)',
      width: '100px',
      height: '100px',
      margin: '10px',
      textAlign: 'center',
      lineHeight: '100px'
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

  setText(text) {
    this.text = text;
  }

}

export default BlockModel;
