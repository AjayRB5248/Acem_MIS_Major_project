import React from "react";
import "./style.css";
import { useHistory } from "react-router";

const Index = () => {
  const auth = localStorage.getItem("model");
  const history = useHistory();
  // const [StudentData, setStudentData] = useState({});

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
        <div className="image-upload">
        <label >
            <img src={JSON.parse(auth).profile} alt='ProfileImage'/>
          </label>
        </div>
        <ul className="list d-flex">
          <li>
            <h6 className="listname">{JSON.parse(auth).name}</h6>
            <span>{JSON.parse(auth).location}</span>
          </li>
          <li>
            <h6>
              {JSON.parse(auth).faculty}-{JSON.parse(auth).section}
            </h6>
            <span>Department</span>
          </li>
          <li>
            <h6>{JSON.parse(auth).batch}</h6>
            <span>Batch</span>
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
