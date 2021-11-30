import { Image } from "react-bootstrap";

import "./verify.css";

import iconApprove from "../../src-assets/approve.png";

function TbApprove(props) {
  return (
    <>
      <tr>
        <td className="text-center">{props.num + 1}.</td>
        <td>{props.item.author}</td>
        <td>{props.item.ISBN}</td>
        <td className="text-primary">
          <a className="text-primary" href={props.item.attache}>
            {props.item.title}
          </a>
        </td>
        <td className="text-success">
          <b>{props.item.status}</b>
        </td>
        <td className="text-center">
          <Image src={iconApprove} />
        </td>
      </tr>
    </>
  );
}

export default TbApprove;
