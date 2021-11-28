import { Button, Image } from "react-bootstrap";

import "./verify.css";
import { API } from "../../config/api";

import { useHistory } from "react-router";

import iconApprove from "../../src-assets/approve.png";
import iconCancel from "../../src-assets/cancel.png";

function TableVerify({ item }) {
  let history = useHistory();

  const approve = "Approve";
  const cancel = "Cancel";

  const updateApprove = {
    status: approve,
  };

  const updateCancel = {
    status: cancel,
  };

  const updateSApprove = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(updateApprove);

      await API.patch(`/literatur/${item.id}`, body, config);
      history.go();
    } catch (error) {
      console.log(error);
    }
  };

  const updateSCancel = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(updateCancel);

      await API.patch(`/literatur/${item.id}`, body, config);
      history.go();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr>
        <td className="text-center">1</td>
        <td>{item.author}</td>
        <td>{item.ISBN}</td>
        <td className="text-primary">{item.title}</td>
        {(() => {
          if (item.status === "Waiting Approve") {
            return (
              <td className="text-warning">
                <b>{item.status}</b>
              </td>
            );
          } else if (item.status === "Cancel") {
            return (
              <td className="text-danger">
                <b>{item.status}</b>
              </td>
            );
          } else {
            return (
              <td className="text-success">
                <b>{item.status}</b>
              </td>
            );
          }
        })()}
        {(() => {
          if (item.status === "Waiting Approve") {
            return (
              <td className="text-center">
                <Button onClick={updateSCancel} className="btn-dangers">
                  Cancel
                </Button>
                <Button onClick={updateSApprove} className="btn-succes">
                  Approve
                </Button>
              </td>
            );
          } else if (item.status === "Cancel") {
            return (
              <td className="text-center text-danger">
                <Image src={iconCancel} />
              </td>
            );
          } else {
            return (
              <td className="text-center text-success">
                <Image src={iconApprove} />
              </td>
            );
          }
        })()}
      </tr>
    </>
  );
}

export default TableVerify;
