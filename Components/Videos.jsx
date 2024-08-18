import React, { useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import DoctorCard from "./DoctorCard";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { userHomePage } from "../Service/Services";
import toast from "react-hot-toast";
import { HMCard, VideoShareWrapper } from "./DoctorCard/DoctorCardStyles";
import { Flex, FlexCol } from "../styles/CommonStyles";
import RenderModalOrBottomSheet from "../Components/common/RenderModalBS";
import LeadGenerationForm from "../Components/common/Lead-Generation";
import { useRouter } from 'next/router';

const Videos = ({ videos }) => {
  const router = useRouter();
  const [doctor, setDoctor] = useState(videos || []);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isBtsVisible, setShowBts] = useState(false);
  const [doctorId, setDoctorId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 15;

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await userHomePage(searchTerm);
      if (response?.data.status) {
        setLoading(true);
        setDoctor(response.data?.data);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(response.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const doctorDetails = async () => {
    const response = await userHomePage();
    if (response?.data.status) {
      setLoading(true);
      setDoctor(response.data?.data);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(response.data?.message);
    }
  };

  const handleShareVideo = async (link) => {
    const webShareSupported =
      typeof window != "undefined" ? "canShare" in window?.navigator : false;

    if (webShareSupported) {
      const data = {
        url: window.location.href,
        title: `Checkout this informative health video ${link}!`,
        text: `Hey, I'd like to recommend Healthmudraa to learn more health-related cures before going to any pharma and avoid taking random medicines`,
      };
      if (navigator.canShare(data)) {
        try {
          await navigator.share(data);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.name, err.message);
          }
        } finally {
          return;
        }
      }
    } else {
      navigator.clipboard.writeText(link);
      toast.success("Copied link to share");
    }
  };

  const handleAppointmentBts = (e, doctorId) => {
    document
      .querySelector(".widget-visible")
      .setAttribute("style", "display:none !important");
    setDoctorId(doctorId);
    setShowBts(true);
    e.stopPropagation();
    e.preventDefault();
  };

  const handlePageChange = (direction) => {
    if (direction === "next") {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    } else if (direction === "prev") {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
    else{
      alert("error");
    }
  };

  const paginatedVideos = doctor.slice((currentPage - 1) * videosPerPage, currentPage * videosPerPage);
  const totalPages = Math.ceil(doctor.length / videosPerPage);

  // Calculate the range of dots to display
  const dotsRange = 3;
  const startPage = Math.max(currentPage - Math.floor(dotsRange / 2), 1);
  const endPage = Math.min(startPage + dotsRange - 1, totalPages);

  return (
    <>


      <div className="container mt-3">
        <div className="row">
          <div className="col-12 text-center my-10">
            <h1 className="fw-bold mt-5">
              <span style={{ color: "#133682" }}>Expert</span> Doctors + <span style={{ color: "#133682" }}>AI Assistant</span>
            </h1>
          </div>
          <div className="mb-5 pb-5">
            <Box display="flex" justifyContent="center" marginTop={"1rem"}>
              <TextField
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="outlined"
                placeholder="Search..."
                
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button onClick={handleSearch}>
                        <Search />
                      </Button>
                    </InputAdornment>
                  ),
                  
                }}
                sx={{ width: "50vw", marginTop: "4vw", "@media (max-width: 600px)": { width: "90vw" } }}
              />
            </Box>
          </div>
        </div>
        <div className="row bg-gray-700">
          <div className="col-lg-8 col-md-8 col-sm-12" style={{ paddingRight: "1rem", marginBottom: "10rem" }}>
            <div className="row" style={{ marginBottom: "20px", borderRadius: "12px", padding: "30px 15px", backgroundColor: "#f8f9fa" }}>
              <h4 style={{ color: "#133682" }}>Expert Doctor Opinion</h4>
              {paginatedVideos.length > 0 &&
                paginatedVideos.map((item, idx) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={item.id} style={{ padding: "20px 15px", backgroundColor: "#f8f9fa", margin: "10px 0" }}>
                    <HMCard
                      onClick={() => {
                        router.push(
                          `/videos/${decodeURIComponent(
                            item.title.split(" ").join("-").toString()
                          )}`
                        );
                      }}
                    >
                      <FlexCol>
                        <VideoShareWrapper>
                          {item.video.link.length > 0 && (
                            <Plyr
                              source={{
                                type: "video",
                                sources: [
                                  {
                                    src: item.video.link,
                                    provider: "youtube",
                                  },
                                ],
                              }}
                              options={{
                                controls: [
                                  'play',
                                  'progress',
                                  'current-time',
                                  'mute',
                                  'volume',
                                  'settings',
                                ]
                              }}
                            />
                          )}
                        </VideoShareWrapper>
                        <DoctorCard
                          item={item}
                          videocode={item.title}
                          handleBtsModal={handleAppointmentBts}
                        />
                      </FlexCol>
                    </HMCard>
                  </div>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
              <div
                onClick={() => handlePageChange("prev")}
                style={{
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  opacity: currentPage === 1 ? 0.5 : 1,
                  marginRight: "1rem"
                }}
              >
                &lt;
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {Array.from({ length: totalPages }).map((_, index) => {
                  if (index + 1 >= startPage && index + 1 <= endPage) {
                    return (
                      <div
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: currentPage === index + 1 ? "blue" : "gray",
                          margin: "0 5px",
                          cursor: "pointer",
                          opacity: (currentPage === index + 1) ? 1 : 0.5
                        }}
                      />
                    );
                  }
                  return null;
                })}
              </div>
              <div
                onClick={() => handlePageChange("next")}
                style={{
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  opacity: currentPage === totalPages ? 0.5 : 1,
                  marginLeft: "1rem"
                }}
              >
                &gt;
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div style={{ padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "8px", height: "100vh", margin: "10px" }}>
              <h3>Dummy Text Section</h3>
              <p>
                This is some dummy text to fill the space on the right side of the page. You can put any content here.
              </p>
            </div>
            <div style={{ padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "8px", height: "20vh", margin: "10px" }}>
              Dummy text
            </div>
          </div>
        </div>
      </div>

      <RenderModalOrBottomSheet
        isBtsVisible={isBtsVisible}
        setShowBts={setShowBts}
        doctorId={doctorId}
        onClose={() => setShowBts(false)}
      >
        <LeadGenerationForm />
      </RenderModalOrBottomSheet>
    </>
  );
};

export default Videos;
