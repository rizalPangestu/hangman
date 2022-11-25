import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hangman from "./hangman";

export default function Home() {
  return <Hangman />;
}
