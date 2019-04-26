import React, { Component }from 'react';
import './App.css';

const NUM_BOXES = 42;

class App extends Component {
  constructor(props) {
    super(props)
    const rndColorArr = [];
    for(let i = 0; i < NUM_BOXES; i++) {
      rndColorArr.push(this.getRandomColor());
    }
    this.state = {colors: rndColorArr};
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick();
    }, 300)
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    let arrCopy = this.state.colors.slice();
    let radIndex = Math.floor(Math.random() * arrCopy.length);
    arrCopy.splice(radIndex, 1, this.getRandomColor());
    this.setState({colors: arrCopy})
  }

  getRandomColor() {
    let rndIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[rndIndex];
  }
  render() {
    //let boxArr = this.state.colors.map((val,i) => <div key={i}className='box' style={{backgroundColor: val }}></div>);
    let boxArr = this.state.colors.map((val,i) => <Box color={val} key={i} />)
    return(
      <div className="rndColors">
      {boxArr}
      </div>
    );
  }
}

const Box = props => {
  return(
    <div className='box' key={ props.key} style={{backgroundColor: props.color}}></div>
  );
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};


export default App;
