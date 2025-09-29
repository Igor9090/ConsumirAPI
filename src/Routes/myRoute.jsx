import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function MyRoute({ element: Element, isClosed, ...rest }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ prevPath: location.pathname }}
        replace
      />
    );
  }


  return <Element {...rest} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  isClosed: PropTypes.bool,
};
