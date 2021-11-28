import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  useEffect(
    () =>
      (async () => {
        try {
          const { data } = await userRequest.get("/users?new=true");
          setUsers(data);
        } catch (error) {}
      })(),
    []
  );
 

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users?.map(({ username, img, _id }) => (
          <li className="widgetSmListItem" key={_id}>
            <img
              src={
                img ||
                "https://cdn.pixabay.com/photo/2019/11/08/11/56/cat-4611189_1280.jpg"
              }
              alt="memberr"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{username}</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
