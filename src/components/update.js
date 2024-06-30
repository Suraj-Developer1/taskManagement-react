import React, { useState } from "react";
import { Button, Dropdown, Form } from "semantic-ui-react";
// import axios from "axios";

export default function Update() {
  const taskId = localStorage.getItem("id");
  const taskTitle = localStorage.getItem("Title");
  const taskDescription = localStorage.getItem("Description");
  const taskStatus = localStorage.getItem("Status");
  const [title, setTitle] = useState(taskTitle);
  const [description, setDescription] = useState(taskDescription);
  const [status, setStatus] = useState(taskStatus);
  const [id, setID] = useState(taskId);
  const options = [
    { key: "To Do", text: "To Do", value: "To Do" },
    { key: "In Progress", text: "In Progress", value: "In Progress" },
    { key: "Done", text: "Done", value: "Done" },
  ];
  const handleChange = (e, { value }) => {
    setStatus(value);
  };
  const updateAPIData = () => {
    // axios.put(``, {
    //   title,
    //   description,
    //   status,
    // });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={taskTitle}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={taskDescription}
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
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}
