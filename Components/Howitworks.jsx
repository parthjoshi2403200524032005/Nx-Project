import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import hww1 from '../assets/hww1.png';
import hww2 from './Svgs/hww2.svg';
import hww4i from '../assets/hww4i.png';
import hww3 from '../assets/hww3.png';
import { GoArrowUpRight } from 'react-icons/go';

const HowItWorks = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const router = useRouter();

  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsTablet(window.innerWidth <= 768 && window.innerWidth > 480);
    };

    handleResize(); // Set initial state based on window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const buttonStyle = (isHovered) => ({
    position: 'absolute',
    bottom: isMobile ? '10px' : '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: isMobile ? '95%' : '358.325px',
    height: '60.191px',
    background: isHovered ? 'var(--900, #133682)' : '#FFF',
    borderRadius: '15.048px',
    border: 'none',
    boxShadow: '0px 3.762px 3.762px 0px rgba(0, 0, 0, 0.25)',
    padding: isMobile ? '5px 10px' : '10px 0',
    cursor: 'pointer',
    color: isHovered ? '#FFF' : 'var(--900, #133682)',
    fontFamily: 'Poppins',
    fontSize: isTablet ? '16px' : '18px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: isTablet ? '20px' : '25px',
    paddingLeft: isTablet ? '10px' : '14.11px',
  });

  const cardStyle = {
    width: isMobile ? '100%' : isTablet ? '90%' : '399.71px',
    height: '400px',
    background: '#BEB4FB',
    borderRadius: '15.0478px',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
  };

  const containerStyle = {
    padding: isMobile ? '30px 10px' : '50px 20px',
    width: isMobile ? '90%' : 'auto',
    margin: isMobile ? '25px' : 'auto',
    marginTop: '80px', // Add 80px from the top
  };

  const titleStyle = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: isMobile ? '32px' : '50px',
    fontWeight: '600',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    color: 'rgba(38, 38, 38, 0.60)',
    fontFamily: 'Arial',
    fontSize: isMobile ? '20px' : '24px',
    fontWeight: 400,
    lineHeight: '26.334px',
    textAlign: 'center',
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1280px',
        ...containerStyle,
        textAlign: 'center',
      }}
    >
      <div style={{ marginBottom: '30px' }}>
        <h1 className="fw-bold" style={titleStyle}>
          How We Work
        </h1>
        <p style={descriptionStyle}>
          Delivering top-notch healthcare through expert advice and
          personalized treatments
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {/* First Card */}
        <div style={{ ...cardStyle, background: '#BEB4FB' }} className="flex flex-col justify-center items-center">
          <h3
            className="mt-1"
            style={{
              color: 'var(--Background-Background, #FFF)',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '22.572px',
              fontWeight: "bold",
              lineHeight: '30.096px',
              letterSpacing: '1.129px',
              textTransform: 'capitalize',
            }}
          >
            Watch Experts Videos
          </h3>
          <p
            style={{
              color: 'var(--Background-Background, #FFF)',
              textAlign: 'center',
              fontFamily: 'Arial',
              fontSize: '16.929px',
              fontWeight: '400',
              lineHeight: '24.453px',
              letterSpacing: '0.846px',
              textTransform: 'capitalize',
            }}
            className='mt-1'
          >
            Find valuable health advice from our trusted doctors
          </p>
          <div>
            <Image
              src={hww1}
              alt=""
              style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
          <button
            onMouseEnter={() => handleMouseEnter('button1')}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle(hoveredButton === 'button1')}
            onClick={() => router.push('/plans')}
          >
            <span>Discover Videos</span>
            <GoArrowUpRight
              style={{
                width: '30px',
                height: '30px',
                transition: 'color 0.3s',
              }}
              color={
                hoveredButton === 'button1' ? '#FFF' : 'var(--900, #133682)'
              }
            />
          </button>
        </div>

        {/* Second Card */}
        <div style={{ ...cardStyle, background: '#FDB093' }} className="flex flex-col">
          <h3
            style={{
              color: 'var(--Background-Background, #FFF)',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '22.572px',
              fontWeight: 'bold',
              lineHeight: '30.096px',
              letterSpacing: '1.129px',
              textTransform: 'capitalize',
            }}
          >
            Get Treatment
          </h3>
          <p
            style={{
              color: 'var(--Background-Background, #FFF)',
              textAlign: 'center',
              fontFamily: 'Arial',
              fontSize: '16.929px',
              fontWeight: '400',
              lineHeight: '26.453px',
              letterSpacing: '0.846px',
              textTransform: 'capitalize',
            }}
          >
            Schedule a consultation with the doctor of your choice
          </p>
          <div className="flex justify-center items-center" style={{ height: '169px' , marginLeft:"60px" , marginTop:'10px' }}>
            <Image
              src={hww2}
              alt=""
              style={{
                width: '243px',
                height: '169px',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </div>

          <button
            onMouseEnter={() => handleMouseEnter('button2')}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle(hoveredButton === 'button2')}
            onClick={() => router.push('/plans')}
          >
            <span>Book An Appointment</span>
            <GoArrowUpRight
              style={{
                width: '30px',
                height: '30px',
                transition: 'color 0.3s',
              }}
              color={
                hoveredButton === 'button2' ? '#FFF' : 'var(--900, #133682)'
              }
            />
          </button>
        </div>

        {/* Third Card */}
        <div style={{ ...cardStyle, background: '#BEB4FB' }}>
          <h3
            style={{
              color: 'var(--Background-Background, #FFF)',
              textAlign: 'center',
              fontFamily: 'Poppins',
              fontSize: '22.572px',
              fontWeight: '600',
              lineHeight: '30.096px',
              letterSpacing: '1.129px',
              textTransform: 'capitalize',
            }}
          >
            Get Treated By Experts
          </h3>
          <p
            style={{
              color: 'var(--Background-Background, #FFF)',
              textAlign: 'center',
              fontFamily: 'Arial',
              fontSize: '16.929px',
              fontWeight: '400',
              lineHeight: '25.453px',
              letterSpacing: '0.846px',
              textTransform: 'capitalize',
            }}
          >
            Schedule a consultation with the doctor of your choice
          </p>
          <div className="flex justify-center items-center" style={{marginLeft:'100px', marginTop:'12px'}}>
            <Image
              src={hww4i}
              alt=""
              style={{
                width: '60%',
              }}
            />
          </div>
          <div className="flex justify-center items-center" style={{marginLeft:'60px'}}>
            <Image
              src={hww3}
              alt=""
              style={{
                width: '270px',
                height: '270px',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </div>
          <button
            onMouseEnter={() => handleMouseEnter('button3')}
            onMouseLeave={handleMouseLeave}
            style={buttonStyle(hoveredButton === 'button3')}
            onClick={() => router.push('/plans')}
          >
            <span>Get Treated</span>
            <GoArrowUpRight
              style={{
                width: '30px',
                height: '30px',
                transition: 'color 0.3s',
              }}
              color={
                hoveredButton === 'button3' ? '#FFF' : 'var(--900, #133682)'
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
