import styled from "styled-components";
import Theme from "../components/theme";
import LandingTheme_a from "../components/landingTheme_a";
import LandingTheme_b from "../components/landingTheme_b";
import LandingTheme_c from "../components/landingTheme_c";
import LandingTheme_d from "../components/landingTheme_d";
import LandingTheme_e from "../components/landingTheme_e";
import LandingTheme_f from "../components/landingTheme_f";
import { Link } from "react-router-dom";

const LandingContainer = styled.div`
  overflow-x: hidden;
`;

function Landing() {
  return (
    <LandingContainer>
      <Theme />
      <LandingTheme_a />
      <LandingTheme_b />
      <LandingTheme_c />
      <LandingTheme_d />
      <LandingTheme_e />
      <Link to="/main" style={{ textDecoration: "none" }}>
        <LandingTheme_f />
      </Link>
    </LandingContainer>
  );
}

export default Landing;
