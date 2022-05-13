import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  // ______get user_________
  if (user) {
    navigate("/");
  }
  // ______get loading______
  if (loading) {
    return <h1 className="text-5xl">Loading....</h1>;
  }
  // _________get error________
  if (error) {
    console.log(error);
  }

  return (
    <div className="flex items-center justify-center h-screen font-serif mx-4 md:mx-0">
      {/* _______card start__________ */}
      <div className="card w-96 bg-base-100 shadow-xl">
        {/* ________card body start_______ */}
        <div className="card-body items-center text-left">
          <h2 className="card-title">Register</h2>
          <form className="grid w-full">
            <label htmlFor="name">Name</label>
            <input
              className="border-2 rounded-lg p-2 mb-3"
              type="name"
              name="name"
              id="name"
            />

            <label htmlFor="email">Email</label>
            <input
              className="border-2 rounded-lg p-2 mb-3"
              type="email"
              name="email"
              id="email"
            />

            <label htmlFor="password">Password</label>
            <input
              className="border-2 rounded-lg p-2"
              type="password"
              name="password"
              id="password"
            />

            <span className="mb-4 text-xs p-2 cursor-pointer">
              Forgotton password?
            </span>

            <input
              className="cursor-pointer uppercase rounded-lg w-full text-base-300 text-md p-3 font-bold bg-black"
              type="submit"
              value="Sign up"
            />
          </form>

          {/* _________divider__________ */}
          <div className="flex flex-col w-full border-opacity-50">
            <p className="px-6 py-2 font-sans">
              Already have an account?
              <span className="text-secondary text-sm cursor-pointer">
                <Link to="/login"> Login</Link>
              </span>
            </p>
            <div className="divider">OR</div>
            {/* _________google sign in____________ */}
            <div
              onClick={() => signInWithGoogle()}
              className="btn bg-transparent hover:bg-transparent text-black grid h-15 border-2 py-2 cursor-pointer card rounded-box place-items-center"
            >
              CONTINUE WITH GOOGLE
            </div>
          </div>
          {/* __________divider end_____________ */}
        </div>
        {/* __________card body end__________ */}
      </div>
      {/* _______card end */}
    </div>
  );
};

export default Login;
