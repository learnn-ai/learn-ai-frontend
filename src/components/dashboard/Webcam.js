import React, { Component } from "react";
import styles from "../../styles/webstyle.modules.css";


class Webcam extends Component {
  constructor(props) {
    super(props);
    this.videoTag = React.createRef()
  }

  componentDidMount() {
    navigator.mediaDevices
      .getUserMedia({video: true, audio: false})
      .then(stream => this.videoTag.current.srcObject = stream)
      .catch(console.log);
  }

  render() {
    
    return (
      <div class="booth"className={styles.booth}>
        <video id="video" width="250" height="200"
          ref={this.videoTag}
          autoPlay
          />
        </div>
    )

  }
}

export default Webcam;