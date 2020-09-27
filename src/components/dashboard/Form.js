import React from "react";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Form = ({
    videoUrl,
    setVideoUrl,
    videoName,
    setVideoName,
    handleSubmit,
}) => {
    return (
        <div >
            <form
                layout="inline"
                onSubmit={handleSubmit}
                className="formSpaceAdd">
                <Input
                    type="text"
                    size="large"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="Paste video URL (YouTube, Vimeo, Facebook, Dailymotion)"
                />

                <Input
                    type="text"
                    size="large"
                    value={videoName}
                    onChange={(e) => setVideoName(e.target.value)}
                    placeholder="Workspace Name"
                />

                <Button
                    type="primary"
                    shape="circle"
                    icon={<PlusOutlined />}
                    htmlType="submit"
                    size="large"
                />
            </form>
        </div>
    );
};

export default Form;
