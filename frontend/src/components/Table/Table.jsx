import "./Table.css";

export default function Table({data}) {

  const dateConverter = (timeStamp) => {
    // let dateTime = timeStamp.split("T");
    // let date = dateTime[0].split("-");
    // let time = dateTime[1].split(":");
    // let normalDate= new Date(date[0], date[1], date[2], time[0], time[1]);
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
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}