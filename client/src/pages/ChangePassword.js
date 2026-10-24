import React, { useState } from "react";
import axios from "axios";
import { API_URL, authHeaders } from "../helpers/api";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const changepassword = () => {
    axios
      .put(
        `${API_URL}/auth/changepassword`,
        {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
        authHeaders()
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("Password successfully changed");
        }
      });
  };

  return (
    <div>
      <h1>Update Your Password</h1>
      <input
        type="password"
        placeholder="Old Password..."
        onChange={(event) => {
          setOldPassword(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="New Password..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />
      <button onClick={changepassword}>Save Changes</button>
    </div>
  );
}

export default ChangePassword;
