import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.timestamp !== null) {
      const timeUnits = this.props.timestamp.split(":");
      let timeInSecs = 0;
      if (timeUnits.length === 2) {
        timeInSecs = timeUnits.reduce((acc, val, i) => {
          if (i === 0) return acc + parseInt(val) * 60;
          return acc + parseInt(val);
        }, 0);
      } else if (timeUnits.length === 3) {
        timeInSecs = timeUnits.reduce((acc, val, i) => {
          if (i === 0) return acc + parseInt(val) * 60 * 60;
          if (i === 1) return acc + parseInt(val) * 60;
          return acc + parseInt(val);
        }, 0);
      }

      this.player.current.seekTo(timeInSecs);
      this.props.changeTimestamp(null);
    }
  }

  onProgress({ playedSeconds }) {
    this.props.changeCurrTime(playedSeconds);
  }

  render() {
    console.log(this.props.currentTodo.url)
    return (
      <div style={{ position: "relative", paddingBottom: "56.25%" }}>
        <ReactPlayer
          ref={this.player}
          url={this.props.currentTodo.todo.url}
          // onProgress={this.onProgress}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0 }}
          controls
          playing
        />
      </div>
    );
  }
}


export default VideoPlayer;
