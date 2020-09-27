import axios from "axios";

const endpoint = `https://jsonbox.io/box_bebbbc865813675abd9f`;

const getAll = () => {
    return axios.get(endpoint + "/todos?sort=_createdOn");
};

const create = todo => {
    return axios.post(endpoint + "/todos", todo);
};

const destroy = id => {
    return axios.delete(endpoint + `/todos/${id}`);
};


const getAllNotes = () => {
    return axios.get(endpoint + "/notes?sort=_createdOn");
};

const createNote = note => {
    return axios.post(endpoint + "/notes", note);
};

const destroyNote = id => {
    return axios.delete(endpoint + `/notes/${id}`);
};

const getScript = url => {
    return axios.post("https://gene-pool-video-to-text-app.azurewebsites.net/api/speechtotext/transcribe_link", url);
};

export default {
    todos: {
        getAll,
        create,
        destroy,
        getAllNotes,
        createNote,
        destroyNote,
        getScript
    }
};
