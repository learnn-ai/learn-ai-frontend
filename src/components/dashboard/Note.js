import React, { Component } from "react";
import { Input, Button } from "antd";
import { FieldTimeOutlined, DeleteOutlined } from "@ant-design/icons";
const { TextArea } = Input;



function checkTimestamp(timestamp) {
  let timestampValid;
  switch (timestamp.length) {
    case 4:
      timestampValid = /\d:[0-5]\d/.test(timestamp);
      break;
    case 5:
      timestampValid = /[0-5]\d:[0-5]\d/.test(timestamp);
      break;
    case 7:
      timestampValid = /\d:[0-5]\d:[0-5]\d/.test(timestamp);
      break;
    default:
      timestampValid = false;
  }
  return timestampValid;
}

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.note.content,
      timestamp: props.note.timestamp,
      timeIsEditable: false
    };
  }


  // onContentChange(e) {
  //   // need to set state separately instead of directly referencing redux
  //   // store in TextArea because of the bug mentioned in constructor()
  //   this.setState({ content: e.target.value });
  //   this.props.editNote({ ...this.props.note, content: e.target.value });
  // }

  // onTimestampChange(e) {
  //   this.setState({ timestamp: e.target.value });
  // }

  // deleteNote() {
  //   this.props.deleteNote(this.props.note.id);
  // }

  // toggleTimestamp() {
  //   let timestamp = this.state.timestamp;
  //   if (this.state.timeIsEditable) {
  //     if (!checkTimestamp(timestamp)) {
  //       return alert(
  //         "The timestamp format is not valid. Please follow a MM:SS format."
  //       );
  //     } else {
  //       if (timestamp.length > 4) {
  //         timestamp = timestamp.replace(/^(?:0:0)|^(?:0:)|^0/, "");
  //       }
  //       this.props.editNote({ ...this.props.note, timestamp });
  //     }
  //   }
  //   this.setState({ timeIsEditable: !this.state.timeIsEditable, timestamp });
  // }

  render() {
    const { note } = this.props;
    return (
      <div className="note-div">
        {true ? (
          <Input
            className="note-timestamp"
            value={"0:05"}
            onChange={this.onTimestampChange}
            onPressEnter={this.toggleTimestamp}
          />
        ) : (
            <a >
              {note.timestamp}
            </a>
          )}

        <TextArea
          onChange={this.onContentChange}
          value={this.state.content}
          autoSize
        />
        <Button
          type="button"
          style={{
            marginRight: 0,
            borderRadius: "3px 0px 0px 3px",
            width: "10px"
          }}
        >

          <Button icon={<FieldTimeOutlined />} style={{ marginLeft: "-7px" }} />


        </Button>

        <Button
          type="button"
          style={{
            marginLeft: 0,
            borderRadius: "0px 3px 3px 0px",
            width: "10px"
          }}
        >
          <Button icon={<DeleteOutlined />} style={{ marginLeft: "-7px" }}></Button>
        </Button>

      </div>
    );
  }
}


export default Note;
