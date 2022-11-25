import React, { FC } from "react";
const HEAD = () => {
  return (
    <div
      style={{
        width: "60px",
        height: "60px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "48px",
        right: "-25px",
      }}
    />
  );
};

const BODY = () => {
  return (
    <div
      style={{
        width: "10px",
        height: "100px",
        backgroundColor: "black",
        position: "absolute",
        top: "108px",
        right: 0,
      }}
    />
  );
};

const RIGHT_ARM = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  );
};

const LEFT_ARM = () => {
  return (
    <div
      style={{
        width: "100px",
        height: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  );
};

const RIGHT_LEG = () => (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "195px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const DICK = () => (
  <div
    style={{
      width: "10px",
      height: "50px",
      backgroundColor: "black",
      position: "absolute",
      top: "202px",
      right: 0,
      borderRadius: "10px",
      animation: "dickmove 2.5s infinite ease-in-out",
      transition: "0.5s",
    }}
  />
);

const LEFT_LEG = () => (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "195px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [
  <HEAD />,
  <BODY />,
  <RIGHT_ARM />,
  <RIGHT_LEG />,
  <LEFT_ARM />,
  <LEFT_LEG />,
  <DICK />,
];
export interface HangmanDrawProps {
  numberOfGuesses: number;
}

const HangmanDraw = ({ numberOfGuesses }: HangmanDrawProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
};

export default HangmanDraw;
