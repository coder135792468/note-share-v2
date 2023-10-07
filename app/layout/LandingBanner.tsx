import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typewriter } from "react-simple-typewriter";
import { Button, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const LandingBannerRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    height: "50vh",
  },
  [theme.breakpoints.up("sm")]: {
    height: "50vh",
  },
  [theme.breakpoints.up("md")]: {
    height: "80vh",
  },
}));

const Background = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

interface LandingBannerProps {
  sxBackground: SxProps<Theme>;
}

export default function LandingBanner(
  props: React.HTMLAttributes<HTMLDivElement> & LandingBannerProps
) {
  const { sxBackground } = props;

  return (
    <LandingBannerRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          sx={{
            width: "100%",
            height: "100%",
            color: "aliceblue",
            "text-align": "center",
            background: "rgba(255, 255, 255, 0.12)",
            boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: " blur(2.2px)",
            "-webkit-backdrop-filter": "blur(2.2px)",
            position: " absolute",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignTtems: "center",
            "user-select": "none",
            "-webkit-user-select": "none",
            "-webkit-user-drag": "none",
          }}
        >
          <Typography
            component="p"
            sx={{
              width: "90%",
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
              },
              marginTop: {
                xs: "15vh",
                md: "30vh",
              },
            }}
          >
            <Typewriter
              words={[
                "There is no end to education. It is not that you read a book, pass an examination, and finish with education. ",
                "The whole of life, from the moment you are born to the moment you die, is a process of learning.",
              ]}
              cursorBlinking={true}
              cursor={true}
              loop={false}
              delaySpeed={2000}
              typeSpeed={100}
              deleteSpeed={200}
            />
          </Typography>
        </Typography>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "common.black",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <Box
          sx={{
            color: "white",
            position: "absolute",
            bottom: "20px",
            transform: "scale(2)",
          }}
        >
          <KeyboardDoubleArrowDownIcon />
        </Box>
      </Container>
    </LandingBannerRoot>
  );
}
