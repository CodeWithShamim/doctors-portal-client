import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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

  // ________use react hook form_________
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen font-serif mx-4 md:mx-0">
      {/* _______card start__________ */}
      <div className="card w-96 bg-base-100 shadow-xl">
        {/* ________card body start_______ */}
        <div className="card-body items-center text-left">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid w-full">
            {/* ____email field start_____  */}
            <label htmlFor="email">Email</label>
            <input
              className="border-2 rounded-lg p-2"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

                  message: "Provide a valid email",
                },
              })}
              name="email"
              id="email"
            />
            {/* Show error meassage for email___________ */}
            <label className="mb-3">
              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </label>
            {/* _____email field end______  */}

            {/* _________password field start_________  */}
            <label htmlFor="password">Password</label>
            <input
              className="border-2 rounded-lg p-2"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                maxLength: {
                  value: 8,
                  message: "Password should be maximum 8 characters",
                },
              })}
              name="password"
              id="password"
            />
            {/* Show error meassage for password___________ */}
            <label className="mb-3">
              {errors.password?.type === "required" && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </label>
            {/* _________password field end_________  */}

            <span className="mb-4 text-xs p-2 cursor-pointer">
              Forgotton password?
            </span>

            <input
              className="cursor-pointer uppercase rounded-lg w-full text-base-300 text-md p-3 font-bold bg-black"
              type="submit"
              value="Login"
            />
          </form>

          {/* _________divider__________ */}
          <div className="flex flex-col w-full border-opacity-50">
            <p className="px-6 py-2 font-sans">
              New to Doctors Portal?
              <span className="text-secondary text-sm cursor-pointer">
                <Link to="/signup"> Create new account</Link>
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
