import "./styles.css";
import jazzicon from "@metamask/jazzicon";
import { useEffect } from "react";

const charMapper = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  x: 10
};

function is_numeric(str) {
  return /^\d+$/.test(str);
}

function toHexSum(hex) {
  let hexSum = 0;
  for (let i = 0; i < hex.length; i++) {
    if (is_numeric(hex[i])) {
      hexSum += Number(hex[i]);
    } else {
      hexSum += charMapper[hex[i].toLowerCase()];
    }
  }

  return hexSum;
}

export default function App() {
  function generate() {
    const root1 = document.getElementById("icon1");
    const root2 = document.getElementById("icon2");

    root1.innerHTML = null;
    root2.innerHTML = null;
    const el1 = jazzicon(
      50,
      Math.round(toHexSum("0x4c12F7419BA221d812F6E2947BffE1d16E0a5C4d") * 10000)
    );
    var el2 = jazzicon(
      100,
      Math.round(toHexSum("0xe71C88b156ab9E08445914ACA3d7aaE5F54a80B1") * 10000)
    );
    root1.appendChild(el1);
    root2.appendChild(el2);
  }

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="App">
      <h1>Avatar generator for Ethereum Address</h1>
      <div id="icon1" />
      <div id="icon2" />
    </div>
  );
}
