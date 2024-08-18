import { VolumeUp } from "@mui/icons-material";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ChatDataLoad from "./search/shimmerui/ChatDataLoad";


const MobileAICard = ({ apiResults, primaryColor }) => {
  const speech = new SpeechSynthesisUtterance();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [contentToShow, setContentToShow] = useState("");

  const handleToggleSpeech = () => {
    if (!window.speechSynthesis.speaking) {
      speech.text = contentToShow;
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  useEffect(() => {
    setContentToShow(
      showFullContent
        ? apiResults.aiData
        : `${apiResults.aiData.slice(0, 400)}...`
    );
  }, [apiResults, showFullContent]);

  useEffect(() => {
    speech.addEventListener("end", () => {
      setIsSpeaking(false);
    });
    speech.lang = "en-US";
    speech.onerror = () => {
      toast.error("An error occurred while trying to speak.");
    };
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [speech]);

  return (
    <Box
      sx={{
        background: "#F2F2F2",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        borderRadius: "12px",
        padding: "14px 24px",
      }}
    >
      <Typography
        fontSize={22}
        lineHeight="100%"
        color={primaryColor}
        variant="h5"
        sx={{ paddingBottom: "10px" }}
      >
        Doctor Summary
      </Typography>

      {!apiResults.aiData ? (
        <ChatDataLoad />
      ) : (
        <>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              marginBottom: "10px",
            }}
          >
            {contentToShow}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <IconButton onClick={handleToggleSpeech}>
              {isSpeaking ? (
                <VolumeOffIcon sx={{ color: primaryColor }} />
              ) : (
                <VolumeUp sx={{ color: primaryColor }} />
              )}
            </IconButton>

            <IconButton onClick={handleToggleContent}>
              {showFullContent ? (
                <ExpandLessIcon sx={{ color: primaryColor }} />
              ) : (
                <ExpandMoreIcon sx={{ color: primaryColor }} />
              )}
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default MobileAICard;
