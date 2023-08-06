"use client";

import Header from "@/app/Header";
import { Footer } from "./Footer";
import "./globals.css";
import { Typewriter } from "react-simple-typewriter";

export default async function Home(props: any) {
  return (
    <div>
      <Header />

      <div>
        <img
          src={"https://docmerit.com/images/home.webp"}
          alt={""}
          width="100%"
          height={"90%"}
        />
        <h1 className="home-typewritter-text">
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
        </h1>
      </div>
      <div className="learning_steps_home_section">
        <div className="section">
          <div>
            <h4>BROWSE STUDY MATERIALS</h4>
            <p>
              Buy lecture notes, summaries and practice exams and get higher
              grades for your exams.
            </p>
          </div>
          <img src="https://docmerit.com/images/img1.png" />
        </div>
        <div className="section">
          <img src="https://docmerit.com/images/img2.png" />
          <div>
            <h4>BROWSE STUDY MATERIALS</h4>
            <p>
              Buy lecture notes, summaries and practice exams and get higher
              grades for your exams.
            </p>
          </div>
        </div>
        <div className="section">
          <div>
            <h4>BROWSE STUDY MATERIALS</h4>
            <p>
              Buy lecture notes, summaries and practice exams and get higher
              grades for your exams.
            </p>
          </div>
          <img src="https://docmerit.com/images/img3.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
