import React from "react";
import "./style.css";
import image from "../../assets/user.png";
// import axios from 'axios'
import { useHistory } from "react-router";

const Index = () => {
  const auth = localStorage.getItem("model");
  const history = useHistory();
  // const [StudentData, setStudentData] = useState("");

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  // useEffect(() => {
  //   const StudentInformation = async () => {
  //     try {
  //       const res = await fetch("/Login/:id", {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       });
  //       // const resp = await res.json();
  //       console.log(res);
  //       // setStudentData(resp.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  // });

  return (
    <div className="wallpaper">
      <div className="image"></div>
      <div className="text d-flex">
        <div class="image-upload">
          <label for="file-input">
            <img src={image} />
          </label>

          <input id="file-input" type="file" />
        </div>
        <ul className="list d-flex">
          <li>
            <h6 className="listname">{JSON.parse(auth).name}</h6>
            <span>{JSON.parse(auth).location},Kathmandu</span>
          </li>
          <li>
            <h6>
              {JSON.parse(auth).faculty}-{JSON.parse(auth).section}
            </h6>
            <span>Department</span>
          </li>
          <li>
            <h6>IV </h6>
            <span>Year</span>
          </li>
          <li>
            <button className="logout_btn" onClick={logout}>
              <i className={"fa fa-user"}></i>Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
