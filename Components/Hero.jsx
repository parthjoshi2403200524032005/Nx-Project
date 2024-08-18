// import React from 'react';
// import heroimg from './heroimg.png'
// // import heroimg from 'E:/HealthMudraa_Nextjs/hm_frontend/Components/heroimg.png'
// import Link from 'next/link';

// export default function Hero() {
//   return (<>
//   <style>
//         {`

		
// .col-lg-77{
// 	max-width:30vw
// }
// .col-lg-55{
// 	max-width:45vw;
// }

		
//           @media (max-width: 850px) {

// 			.neww{

// 				display:flex;
// 				justify-content:center;
// 				align-items:center;
// 				width:100%;
			
// 			}

// 			.hearopart{
// 				width:80%;
// 				display:flex;
// 				flex-direction:column;
// 			}

// 			.col-lg-77{
// 				max-width:100%;
// 			}
// 			.col-lg-55{
// 				max-width:100%;
// 			}
         
//           }
    
//         `}
//       </style>
 
//     <div style={{display:'flex',justifyContent:'center'}}>
       
  
    
// <div className='neww'>
// 	<div class="heropart row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3">
// 		<div class="col-lg-77 p-3 p-lg-5 pt-lg-3">
// 			<div class="lc-block mb-3">
// 				<div editable="rich">
// 					<p style={{fontSize:'3.5rem',letterSpacing:'3px'}} class="fw-bold display-4">Watch<br/> Connect <br/> Heal<p></p>
// 						<p></p>
// 					</p>
// 				</div>
// 			</div>

// 			<div class="lc-block mb-3 my-4">
// 				<div editable="rich ">
// 					<p class="lead">Watch expert doctor videos, book appointments, and get the treatment you need.
// 					</p>
// 				</div>
// 			</div>

// 			<div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start my-4">
//                 <Link class="btn btn-primary px-4 me-md-2" href="/videos" role="button" style={{padding:'0.7rem',backgroundColor:'#133682'}}>Watch Videos</Link>
// 				<a class="btn btn-outline-secondary px-4" href="#" role="button" style={{padding:'0.7rem',color:'#133682',backgroundColor:'white'}}>Consult Doctor</a>
// 			</div>
// 		</div>
// 		<div class="col-lg-55 " >
// 			<div class="lc-block"><img class="rounded-start w-100" src="/heroimg.png" alt="Photo by Diego PH" width="720"/></div>
// 		</div>
// 	</div>
// </div>
 
 
  
//     </div>
// 	</>
//   )
// }


// components/Hero.js
import { AutoAwesome, Search } from "@mui/icons-material";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";

const images = [
  { main: "/HeroMockup/img1.jpg", preview: "/HeroMockup/img1_prev.webp" },
  { main: "/HeroMockup/img2.jpg", preview: "/HeroMockup/img2_prev.webp" },
  { main: "/HeroMockup/img3.jpg", preview: "/HeroMockup/img3_prev.webp" },
];

const primaryColor = "#1B5AE3";

const Hero = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(""); // Fixed typo here

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/search/${searchValue}`);
    }
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      borderRadius={2}
      margin={{ xs: 0, md: 4 }}
      sx={{
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        background: "#FFFCFC",
      }}
    >
      {/* Text Info */}
      <Box sx={{ paddingTop: 6, textAlign: "center" }}>
        <Typography
          variant="h1"
          fontSize={{ xs: "32px", sm: "32px", md: "64px" }}
          fontWeight="600"
          letterSpacing="3.2px"
          lineHeight={{ xs: "40px", sm: "40px", md: "72px" }}
          color="#000"
          component="h2"
        >
          Watch &gt; Connect {isSmallScreen && <br />} &gt; Heal.
        </Typography>

        <Typography
          variant="h2"
          color="#818181"
          fontSize={{ xs: "16px", sm: "32px", md: "36px" }}
          fontWeight="500"
          lineHeight={{ xs: "54px", sm: "72px" }}
          letterSpacing="1.8px"
        >
          <span style={{ color: primaryColor }}>Expert </span> Doctors + AI
          <span style={{ color: primaryColor }}> assistant</span>
        </Typography>
      </Box>

      {/* Search */}
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
          </Box>
        </form>
      </Box>

      {/* MockUp Data */}
      <Box sx={{ padding: "25px 0" }}>
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

            <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 } }}>
              {images.map((img, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    width: "250px",
                    height: { xs: "85px", sm: "150px" },
                    cursor: "pointer",
                    "&:hover .main-img": { opacity: 0 },
                    "&:hover .preview-img": { opacity: 1 },
                  }}
                >
                  <Box
                    component="img"
                    src={img.main}
                    alt={`Sample IMG${index + 1}`}
                    className="main-img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: { xs: "10px", sm: "12px" },
                      position: "absolute",
                      top: 0,
                      left: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <Box
                    component="img"
                    src={img.preview}
                    alt=""
                    className="preview-img"
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              paddingBottom: { xs: 3, md: 0 },
              marginTop: { xs: "24px", md: 0 },
              background: "#F2F2F2",
              boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
              padding: { xs: "14px 8px", sm: "14px 24px" },
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: { xs: "30px", sm: "54px" } }}>
                  <AutoAwesome
                    sx={{
                      fontSize: { xs: "30px", sm: "54px" },
                      color: primaryColor,
                    }}
                  />
                </Box>
              </Box>
              <Typography
                fontSize={{ xs: 14, sm: 18 }}
                padding="6px 0 24px 0"
                lineHeight="100%"
                color="#000"
                variant="h5"
              >
                We got your back
              </Typography>
            </Box>
            <Typography
              padding="0 4px"
              fontSize={{ xs: 12, sm: 18 }}
              color="#333333"
            >
              To begin the process, simply tap on the “Get a Call” button, and
              our team will promptly connect with you to offer personalized
              support tailored to your unique needs.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
