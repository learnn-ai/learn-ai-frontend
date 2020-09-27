import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Form from "./Form";
import api from "../api";
import "../../styles/Dashboard.css";

const ViewScreen = () => {
    const [videoUrl, setVideoUrl] = useState("");
    const [videoName, setVideoName] = useState("");
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const { status, data } = await api.todos.getAll();
        if (status === 200) {
            setTodos(data);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (videoUrl === "") return;
        const newTodo = { url: videoUrl, title: videoName };
        const { status, data } = await api.todos.create(newTodo);
        if (status === 200) {
            fetchTodos();
            setVideoUrl("");
            setVideoName("");
        }
    };

    const handleDeleteTodo = async (id) => {
        const { status, data } = await api.todos.destroy(id);
        if (status === 200) {
            fetchTodos();
        }
    };

    return (
        <div className="app">
            <div>
                <Form
                    videoUrl={videoUrl}
                    setVideoUrl={setVideoUrl}
                    videoName={videoName}
                    setVideoName={setVideoName}
                    handleSubmit={handleSubmit}
                />
                {todos.map((todo, index) => (
                    <Todo
                        todo={todo}
                        index={index}
                        handleDeleteTodo={handleDeleteTodo}
                        key={todo._id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ViewScreen;
