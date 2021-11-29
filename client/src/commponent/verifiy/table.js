import { Button, Image } from "react-bootstrap";

import "./verify.css";
import { API } from "../../config/api";

import { useHistory } from "react-router";

import iconApprove from "../../src-assets/approve.png";
import iconCancel from "../../src-assets/cancel.png";

function TableVerify(props) {
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

      await API.patch(`/literatur/${props.item.id}`, body, config);

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

      await API.patch(`/literatur/${props.item.id}`, body, config);
      history.go();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr>
        <td className="text-center">{props.num + 1}.</td>
        <td>{props.item.author}</td>
        <td>{props.item.ISBN}</td>
        <td className="text-primary">{props.item.title}</td>
        {(() => {
          if (props.item.status === "Waiting Approve") {
            return (
              <td className="text-warning">
                <b>{props.item.status}</b>
              </td>
            );
          } else if (props.item.status === "Cancel") {
            return (
              <td className="text-danger">
                <b>{props.item.status}</b>
              </td>
            );
          } else {
            return (
              <td className="text-success">
                <b>{props.item.status}</b>
              </td>
            );
          }
        })()}
        {(() => {
          if (props.item.status === "Waiting Approve") {
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
          } else if (props.item.status === "Cancel") {
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
