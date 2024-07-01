import { useState } from "react";
import "./Table.css";

export default function Table({data, setEditingStatus}) {

  const handleEdit = () => {
    setEditingStatus(true);
  }

  const dateConverter = (timeStamp) => {
    let localDate = new Date(timeStamp);
    let date = localDate.toDateString().split(" ");
    let time = localDate.toTimeString().split(":");
    return `${date[2]} ${date[1]} ${date[3]}${"|"}${time[0]}${":"}${time[1]}`
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr className="table-row">
            <th>Name</th>
            <th>Upload Date & time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((project) => (
            <tr key={project._id} className="table-row">
              <td>{project.name}</td>
              <td>{dateConverter(project.updatedAt)}</td>
              <td>Done</td>
              <td>
                <button className="edit" onClick={() => handleEdit()}>Edit</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}