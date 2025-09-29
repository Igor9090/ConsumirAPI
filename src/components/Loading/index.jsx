import PropTypes from "prop-types";
import { OrbitProgress } from "react-loading-indicators";
import { Container } from "./styled";

export default function Loading({ isLoading }){
  if(!isLoading) return null
  return (
    <Container>
      <div/>
      <span><OrbitProgress variant="dotted" color="#A27B5C" size="Large" text="" textColor="" /></span>
    </Container>
  )
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

