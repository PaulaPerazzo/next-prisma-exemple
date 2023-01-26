import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const list = [
    {
      id: "1",
      name: "paula",
      phone: "dsfj",
    },
    {
      id: "2",
      name: "asd",
      phone: "dsfdfgj",
    },
  ];

  const handleSubmit = async ({ name, lastName, phone }) => {
    const { data } = await axios.post("http://localhost:3000/api/users", {
      name: name,
      lastName: lastName,
      phone: phone,
    });

    console.log(data);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        name:{" "}
        <input
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        lastName:{" "}
        <input
          placeholder="last name"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        phone:{" "}
        <input
          placeholder="phone"
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>

      {list?.map((user, i) => {
        return <div key={i}> {user.name} </div>;
      })}
    </>
  );
}
