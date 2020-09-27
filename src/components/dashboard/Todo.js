import React from "react";
import "../../styles/Dashboard.css";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// var localstream;

// if (navigator.mediaDevices.getUserMedia !== null) {
//     var options = {
//         video:true,
//         audio:true
//     };

//     navigator.getUserMedia(options, function(stream) {
//         vid.srcObject = stream;
//         localstream = stream;
//         vid.play();
//         console.log(stream, "streaming");
//     }, function(e) {
//         console.log("background error :" + e.name);
//     });
// }

// function capOff() {
//     vid.pause();
//     vid.src = "";
//     localstream.getTracks().forEach(x => x.stop());
//     console.log("all capture devices off")
// }

// async function getMedia(constraints) {
//     let stream = null;

//     try {
//         stream = await navigator.mediaDevices.getUserMedia({ video: true}, constraints);
//     }
//     catch(err) {
//         console.log("Webcam permissions error");
//     }
// }

const Todo = ({ todo, index, handleDeleteTodo }) => {
    const ButtonGroup = Button.Group;

    return (
        <div >
            <table width="100%" className="tblSpaces">
                <colgroup>
                    <col width="30%" />
                    <col width="45%" />
                    <col width="25%" />
                    <col width="" />
                </colgroup>
                <tbody>
                    <tr>
                        <Link to={{
                            pathname: '/todo/${todo._title}',
                            state: {
                                todo: todo
                            }
                        }}>
                            <td>{todo.title}</td></Link>

                        <td>{todo.url}</td>
                        <td>Created: {todo._createdOn}</td>
                        <td className="btnArea">
                            <ButtonGroup>
                                <Button
                                    type="button"
                                    size="large"
                                    onClick={() => handleDeleteTodo(todo._id)}
                                    className="todo-delete"
                                    icon={<DeleteOutlined />}
                                />
                            </ButtonGroup>
                        </td>
                    </tr></tbody>
            </table>

        </div>
    );
};

export default Todo;
