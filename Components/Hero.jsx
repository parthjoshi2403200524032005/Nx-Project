import { Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import handImage from "../assets/hand.png";
import herodrop from "../assets/herodrop.png";

const primaryColor = "#1B5AE3";

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

const Hero = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchValue}`);
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleSearchClick = () => {
    setIsSearchClicked(true);
  };

  return (
    <Box
      sx={{
        background: isSmallScreen
          ? "linear-gradient(180deg, #FFF 0%, #ECF2FF 100%)"
          : "linear-gradient(180deg, #FFF 0%, #ECF2FF 100%)",
        width: "100%",
        paddingBottom: { xs: "40px" },
      }}
    >
      {/* Text Info */}
      <Box
        sx={{
          paddingTop: 10,
          textAlign: "center",
          marginBottom: isSearchClicked
            ? { xs: "40px", sm: "50px", md: "60px" }
            : { xs: "24px", sm: "24px", md: "24px" },
          transition: "margin-bottom 0.5s ease",
        }}
      >
        <Typography
          variant="h1"
          fontSize={{ xs: "18px", sm: "32px", md: "68px" }}
          fontWeight={{ xs: 600, sm: "540" }}
          fontFamily="Poppins"
          lineHeight="normal"
          color="#000"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Any Questions to Ask Doctors?
        </Typography>

        <Typography
          variant="h2"
          fontSize={{ xs: "12px", sm: "32px", md: "37px" }}
          fontFamily="Poppins"
          fontWeight={{ xs: "430", md: "530" }}
          lineHeight={{ xs: "1.2", md: "normal" }}
          color="#000"
          sx={{
            textAlign: "center",
            marginTop: "8px",
            whiteSpace: { xs: "pre-wrap", md: "normal" },
          }}
        >
          <span style={{ color: "#133682" }}>
            Clinically accurate health info, directly
          </span>
          {"\n"}
          from <span style={{ color: "#133682" }}>doctors</span> with Quick{" "}
          <span style={{ color: "#133682" }}>AI</span> Answers
        </Typography>
      </Box>

      <Box
        sx={{ flexGrow: 1, marginTop: { xs: "10px", sm: "24px", md: "49px" } }}
      >
        <form onSubmit={handleSearchSubmit}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "44px",
              backgroundColor: "#FFF",
              border: "2px solid #487AE8",
              width: { xs: "90%", sm: "90%", md: "90%" },
              maxWidth: "2030px",
              margin: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              type="search"
              required={true}
              placeholder="Search for Treatments, Doctors, or Hospitals"
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onClick={handleSearchClick}
              onChange={(e) => setSearchValue(e.target.value)}
              sx={{
                width: "100%",
                "& .MuiInputBase-input": {
                  padding: "14px 16px",
                  paddingRight: "48px",
                  fontSize: { xs: "14px", sm: "18px" },
                  fontWeight: 400,
                  "&::placeholder": {
                    color: "rgba(0, 0, 0, 0.60)",
                    opacity: 1,
                  },
                },
              }}
            />
            <IconButton
              type="submit"
              sx={{
                padding: "12px",
                position: "absolute",
                right: 0,
                color: primaryColor,
              }}
              aria-label="search"
            >
              <Search />
            </IconButton>
            {/* Image at the top right of the search bar */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: "-75px", md: "-160px" },
                right: "-10px",
                animation: "heartbeat 1.5s infinite",
              }}
            >
              <Image
                src={handImage}
                alt="Hand Image"
                width={130}
                height={168}
                sizes="(max-width: 600px) 59px, 130px"
                style={{ width: "auto", height: "auto" }}
              />
            </Box>
          </Box>
        </form>
      </Box>

      {/* MockUp Data */}
      <Box
        sx={{
          display: { xs: "none", md: "grid" },
          gridTemplateColumns: "auto auto",
          margin: { xs: "18px", md: "16px 75px" },
          gap: 5,
          opacity: isSearchClicked ? 1 : 0,
          transform: isSearchClicked ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
      >
        {isSearchClicked && (
          <Box
            sx={{
              display: { xs: "block", md: "grid" },
              gridTemplateColumns: "auto auto",
              margin: { xs: "18px", md: "16px 75px" },
              gap: 5,
            }}
          >
            <Box
              padding={{ xs: "14px 6px", sm: "14px 24px" }}
              sx={{
                background: "#F2F2F2",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "12px",
              }}
            >
              <Typography
                padding={{ xs: "4px 0 16px 4px", sm: "6px 0 25px 0" }}
                fontSize={{ xs: 18, sm: 22 }}
                lineHeight="100%"
                color={primaryColor}
                variant="h5"
              >
                Expert Doctors Opinion
              </Typography>
              <Image
                src={herodrop}
                alt="Hero Drop"
                layout="responsive"
                width={900}
                height={600}
                style={{ width: "100%", maxWidth: "900px", height: "auto" }}
              />
            </Box>
            <Box
              sx={{
                paddingBottom: { xs: 3, md: 0 },
                marginTop: { xs: "24px", md: 0 },
                background: "#F2F2F2",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                borderRadius: "12px",
                width: "100%",
              }}
            >
              <Typography
                padding="18px 12px"
                fontSize={{ xs: 18, sm: 22 }}
                lineHeight="100%"
                color={primaryColor}
                variant="h5"
              >
                What AI says about your Questions?
              </Typography>
              <Typography
                variant="body1"
                paddingX={2}
                fontSize={{ xs: "14px", sm: "16px" }}
                sx={{
                  color: "#454545",
                  lineHeight: "26px",
                  fontWeight: 400,
                  letterSpacing: "0.8px",
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  textOverflow: "ellipsis",
                  textAlign: "justify",
                }}
              >
                <TypingEffect
                  text="AI provides accurate, personalized health insights, addressing your medical concerns with reliable, data-driven answers tailored for your well-being!"
                  speed={50}
                />
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      <style jsx>{`
        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          20% {
            transform: scale(1.1);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
