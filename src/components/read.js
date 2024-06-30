import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
// import axios from "axios";
import { Link } from "react-router-dom";

export default function Read(props) {
  useEffect(() => {
    // axios
    //   .get(``)
    //   .then((response) => {
    //     setData(response.data);
    //   });
  }, []);
  const setData = (data) => {
    let { id, title, description, status } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("Title", title);
    localStorage.setItem("Description", description);
    localStorage.setItem("Status", status);
  };
  const onDelete = (inx) => {
    console.log(inx);
    // props.taskData = props.taskData.splice(inx, 1);
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.taskData.map((task, inx) => {
            return (
              <Table.Row>
                <Table.Cell>{task.id}</Table.Cell>
                <Table.Cell>{task.title}</Table.Cell>
                <Table.Cell>{task.description}</Table.Cell>
                <Table.Cell>{task.status}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(task)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(inx)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
