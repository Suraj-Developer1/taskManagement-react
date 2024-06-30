import React, { useState } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Create = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const options = [
    { key: "To Do", text: "To Do", value: "To Do" },
    { key: "In Progress", text: "In Progress", value: "In Progress" },
    { key: "Done", text: "Done", value: "Done" },
  ];
  const postData = () => {
    let taskId = props.taskData.length + 1;
    let obj = { id: taskId, title, description, status };
    props.taskData.push(obj);
    navigate("/read");
    // axios.post(``, {
    //   title,
    //   description,
    //   status,
    // });
  };
  const handleChange = (e, { value }) => {
    setStatus(value);
  };
  return (
    <Form className="create-form" onSubmit={postData}>
      {/* <Form.Field>
        <text className="hide" id="statusTxt"></text>Task Added Successfully
      </Form.Field> */}
      <Form.Field>
        <label>Title</label>
        <input
          placeholder="Task Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input
          placeholder="Task Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <Dropdown
          placeholder="Select Status"
          fluid
          selection
          options={options}
          onChange={handleChange}
          value={status}
        />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Create;
