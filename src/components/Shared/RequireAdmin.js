import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "./Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (adminLoading || loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;