import React from "react";
import Head from "next/head";

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <Head>
        <style>{`
          .accordion-button:not(.collapsed) {
            color: black;
            box-shadow: none; 
          }
          .accordion-button:focus {
            box-shadow: none; 
            border-color: none;
          }

          .accordion-button:active { 
            box-shadow: none; 
            border-color: transparent; 
            outline: none; 
          }

          .accordion-button:focus {
            box-shadow: none; 
            border-color: none;
          }
          .accordion {
            --bs-accordion-btn-focus-box-shadow: none;
          }
          .faq-title {
            text-align: center;
            margin-bottom: 2rem;
            font-family: 'Arial', sans-serif; 
          }
          .faq-container {
            width: 80%;
            border-radius: 10px;
            margin: 0 auto; /* Centers the FAQ container */
            font-family: 'Arial', sans-serif;
          }
        `}</style>
      </Head>
      <div className="my-5">
        <h1 className="faq-title fw-bold" style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h1>


        <div className="faq-container">
          <div
            className="accordion accordion-flush p-4"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold my-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                  style={{ fontSize: "1.2rem", letterSpacing: "0.7px" }}
                >
                  What is Health Mudraa?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body my-2"
                  style={{ letterSpacing: "0.7px" }}
                >
                  Consider you have "A Friend in Healthcare" and his/her name is
                  Health Mudraa. He can help you with whatever information you
                  want about your health, and in case you or your family member
                  are facing health issues, he will stand by you first!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold my-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  style={{ fontSize: "1.2rem", letterSpacing: "0.7px" }}
                >
                  What is special about Health Mudraa?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body my-2"
                  style={{ letterSpacing: "0.7px" }}
                >
                  Health Mudraa is an innovative health information platform
                  designed to provide users with reliable, doctor-verified
                  medical advice. Unlike random internet searches that often
                  lead to unnecessary panic, Health Mudraa ensures that every
                  piece of information is provided by highly experienced doctors
                  and professionals. Our mission is to be "A Friend in
                  Healthcare," offering a trustworthy source for all your
                  health-related queries and concerns.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold my-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                  style={{ fontSize: "1.2rem", letterSpacing: "0.7px" }}
                >
                  How does Health Mudraa ensure the authenticity of the medical
                  information provided?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body my-2"
                  style={{ letterSpacing: "0.7px" }}
                >
                  At Health Mudraa, we prioritize the accuracy and reliability
                  of our content. All medical information on our platform is
                  created by doctors who specialize in particular conditions and
                  they are the Treating Doctors in Top Hospitals in the country
                  like Apollo, Manipal, Fortis. You can clear most of your
                  common doubts before even booking a consultation with the same
                  doctors!
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold my-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                  style={{ fontSize: "1.2rem", letterSpacing: "0.7px" }}
                >
                  How can Health Mudraa assist with medical tourism?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body my-2"
                  style={{ letterSpacing: "0.7px" }}
                >
                  Medical tourism is one of Health Mudraa's core services. We
                  provide a seamless and stress-free experience for patients
                  seeking medical treatments overseas. Our services include
                  assistance with finding the best medical facilities, arranging
                  travel and accommodation, and ensuring you receive top-quality
                  care.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold my-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                  style={{ fontSize: "1.2rem", letterSpacing: "0.7px" }}
                >
                  How does Health Mudraa protect my personal information?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body my-2"
                  style={{ letterSpacing: "0.7px" }}
                >
                  At Health Mudraa, we take your privacy and security seriously.
                  We employ state-of-the-art encryption and security protocols
                  to safeguard your personal and medical information. Our
                  platform is designed to comply with all relevant data
                  protection regulations, ensuring that your information is kept
                  confidential and secure. Trust Health Mudraa to protect your
                  privacy while providing you with top-notch healthcare
                  services.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-bold my-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                  style={{ fontSize: "1.2rem", letterSpacing: "0.7px" }}
                >
                  What types of health services does Health Mudraa offer?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div
                  className="accordion-body my-2"
                  style={{ letterSpacing: "0.7px" }}
                >
                  Health Mudraa offers a comprehensive range of health services
                  tailored to meet your needs. We specialize in medical tourism,
                  providing end-to-end support for individuals seeking medical
                  treatments within the country or abroad. Our members can
                  access an AI-driven health assistant for preliminary health
                  assessments and personalized health advice like blood test,
                  urine test results in understandable wording, and further
                  treatment suggestions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
