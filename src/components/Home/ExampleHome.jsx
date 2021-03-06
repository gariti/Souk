import React, { useContext, useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import firebase from "../../firebase/Firebase";
import Button from "@material-ui/core/Button";

function Home() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(user.loading);
  }, [user]);

  return (
    !loading && (
      <div>
        <h1>Welcome {user.data.firstName}, you are now logged in.</h1>

        <Link to="/editprofile">Edit Profile</Link>

        <Button
          variant="contained"
          color="primary"
          onClick={() => firebase.auth().signOut()}
        >
          Sign out
        </Button>
      </div>
    )
  );
}

export default withRouter(Home);
