import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { educationData, meta } from "../../content_option";

export default function Education() {
  // Inline styles
  const containerStyle = {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "28px",
    color: "#333",
    marginBottom: "25px",
    paddingBottom: "10px",
    borderBottom: "2px solid #007bff",
  };

  const educationItemStyle = {
    background: "#f8f9fa",
    padding: "20px",
    margin: "20px 0",
    borderLeft: "5px solid #007bff",
    borderRadius: "5px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#555",
    margin: "10px 0",
    paddingLeft: "10px",
  };

  const strongStyle = {
    color: "#000",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Education</h2>

      <div>
        <p style={textStyle}>
          <strong style={strongStyle}>Degree:</strong> Bachelor of Commerce
        </p>
        <p style={textStyle}>
          <strong style={strongStyle}>Field:</strong> B.COM
        </p>
        <p style={textStyle}>
          <strong style={strongStyle}>University:</strong> Aligarh Muslim University
        </p>
        <p style={textStyle}>
          <strong style={strongStyle}>Year:</strong> 2022 - 2026
        </p>
      </div>

      <div style={educationItemStyle}>
        <p style={textStyle}>
          <strong style={strongStyle}>Degree:</strong> Post-Matriculation
        </p>
        <p style={textStyle}>
          <strong style={strongStyle}>Field:</strong> Commerce
        </p>
        <p style={textStyle}>
          <strong style={strongStyle}>University:</strong> Saiyyid Hamid Senior Secondary School For Boys
        </p>
        <p style={textStyle}>
          <strong style={strongStyle}>Year:</strong> 2021 - 2022
        </p>
      </div>

      <div style={educationItemStyle}>
        <p style={textStyle}>
          <strong style={strongStyle}>Degree:</strong> Matriculation
        </p>
        <p style={textStyle}>
          <strong style={strongStyle}>University:</strong> Three Dots Sewamarg Public School, Aligarh
        </p>
        <p style={textStyle}>
          <strong style={strongStyle}>Year:</strong> 2019 - 2020
        </p>
      </div>
    </div>
  );
}
