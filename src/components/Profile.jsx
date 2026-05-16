import React, { useEffect, useState } from "react";
import Api from "../Api";

function Profile() {
  const [user, setUser] = useState(()=>{
    const dt=localStorage.getItem('user')
    return dt?JSON.parse(dt):[]
  });
  

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await Api.get("/profile");
        console.log(res);
        setUser(res.data.user);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile details</h2>
      <p>UserName:{user.username}</p>
      <p>email:{user.email}</p>
      <p>Role:{user.usertype}</p>
    </div>
  );
}

export default Profile;
