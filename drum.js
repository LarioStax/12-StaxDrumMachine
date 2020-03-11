const app = document.querySelector("#app");


const drums = [
  {
    id: "Tom_1",
    keyCode: 81,
    keyTrigger: "Q",
    url: "http://k007.kiwi6.com/hotlink/juqnjyv5b8/tom1.1.wav",
    // img: "https://i2.wp.com/welovefingerdrumming.com/wp-content/uploads/2017/04/tom-tom-drums.png?resize=740%2C589",
    img: "https://i.postimg.cc/ZnQNDb0T/tom.png",
  },
  {
    id: "Tom_2",
    keyCode: 87,
    keyTrigger: "W",
    url: "http://k007.kiwi6.com/hotlink/nmxo6iuvt2/tom2.1.wav",
    // img: "https://i2.wp.com/welovefingerdrumming.com/wp-content/uploads/2017/04/tom-tom-drums.png?resize=740%2C589",
    img: "https://i.postimg.cc/ZnQNDb0T/tom.png",
  },
  {
    id: "Tom_3",
    keyCode: 69,
    keyTrigger: "E",
    url: "http://k007.kiwi6.com/hotlink/fp5gor77pm/tom3.1.wav",
    // img: "https://i2.wp.com/welovefingerdrumming.com/wp-content/uploads/2017/04/tom-tom-drums.png?resize=740%2C589",
    img: "https://i.postimg.cc/ZnQNDb0T/tom.png",
  },
  {
    id: "Cymball",
    keyCode: 65,
    keyTrigger: "A",
    url: "http://k007.kiwi6.com/hotlink/1vdwe6s7v6/cymball.wav",
    img: "https://d1aeri3ty3izns.cloudfront.net/media/21/211731/1200/preview.jpg",
  },
  {
    id: "Siren",
    keyCode: 83,
    keyTrigger: "S",
    //url: "https://speakpipe.s3.amazonaws.com:443/msg%2Fs31373%2F2018%2F7%2F27%2F60z0xc8em13m56wy.mp3?Expires=1532722979&AWSAccessKeyId=AKIAIB7MCJCSYSVIGQZQ&Signature=jU%2Fhj4%2B0KDv5POdZdEz%2FGomSQGI%3D",
    // url: "https://instaud.io/_/2tZ3.mp3",
    url: "http://k007.kiwi6.com/hotlink/tc3bygck6e/siren.wav",
    // img: "https://s15.postimg.cc/ciwnzqva3/tomica.jpg",
    img: "https://polizei-news-agenturbelmediag.netdna-ssl.com/wp-content/uploads/2018/05/shutterstock_263594966-528x317.jpg",
  },
  {
    id: "Bong",
    keyCode: 68,
    keyTrigger: "D",
    url: "http://k007.kiwi6.com/hotlink/1ngcwxq2p9/bong.wav",
    img: "https://s15.postimg.cc/vp9v2ytsb/bong.jpg",
  },
  {
    id: "Kick",
    keyCode: 90,
    keyTrigger: "Z",
    url: "http://k007.kiwi6.com/hotlink/a9cctpaejs/kick.wav",
    img: "https://s15.postimg.cc/nwj7b0qe3/kick.jpg",
  },
  {
    id: "Snare",
    keyCode: 88,
    keyTrigger: "X",
    url: "http://k007.kiwi6.com/hotlink/1fjlgrvxym/snare.wav",
    img: "https://images-na.ssl-images-amazon.com/images/I/61VUOQzsooL._SL1000_.jpg",
  },
  {
    id: "Hat",
    keyCode: 67,
    keyTrigger: "C",
    url: "http://k007.kiwi6.com/hotlink/fj962q0d7e/hat.wav",
    img: "https://media.guitarcenter.com/is/image/MMGS7/A-Series-New-Beat-Hi-Hat-Cymbal-Pair-13-in./441801000000078-00-500x500.jpg",
  },

]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumKit: drums,
      display: "Start Playing!"
    }
    this.displayName = this.displayName.bind(this);
  }

  displayName(name) {
    this.setState({
      display: name
    });
  }


  render() {
    return(
      <div id="drum-machine">
        <h1 id="title">Stax Drum Machine</h1>
        <div id="display">{this.state.display}</div>
        <div id="drums">
          <DrumKit 
            drums = {this.state.drumKit}
            updateDisplay = {this.displayName}
            // onClick={this.handleClick} 
          />
        </div>
      </div>
    )
  }
}

class DrumKit extends React.Component {
  render() {
    const drums = this.props.drums.map((drum, i, drumsArr) => (
        <DrumPart 
        key = {drum.i}
        id = {drumsArr[i].id}
        audio = {drumsArr[i].url}
        keyTrigger = {drumsArr[i].keyTrigger}
        keyCode = {drumsArr[i].keyCode}
        img = {drumsArr[i].img}
        updateDisplay = {this.props.updateDisplay} 
      />
      ));
    return(
      <div className="drumKit">
        {drums}
      </div>
    )
  }
}

class DrumPart extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyboard = this.handleKeyboard.bind(this);
    this.playSound = this.playSound.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboard);
  }

  handleKeyboard(key) {
    if (key.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound(e) {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.currentTime = 0;
    audio.play();
    this.props.updateDisplay(this.props.id.replace(/_/g, ' '));
  }

  render() {
    const {id, audio, keyCode, keyTrigger, img, updateDisplay} = this.props;
    return(
      <div 
      className="drum-pad" 
      id={id} 
      onClick={this.playSound}
      >
      <div className="triggerDisplay">{keyTrigger}</div>
      <img src={img} alt={id} className="img" />
      <audio className="clip" id={keyTrigger} src={audio}></audio>
      </div>
    )
  }
}

ReactDOM.render(<App/>, app);

displayName();