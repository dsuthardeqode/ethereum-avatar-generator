import "./styles.css";
import jazzicon from "@metamask/jazzicon";
import { useEffect } from "react";

const charMapper = (function getCharMapper() {
  let chars = {};
  String("abcdefghijklmnopqrstuvwxyz")
    .split("")
    .map((char, _index) => {
      chars[char] = _index + 1;
    });
  return chars;
})();

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

    // Solana address
    const el1 = jazzicon(
      50,
      Math.round(
        toHexSum("4tYdsA6LvbDkQPsFQmTEUJHg2vuMSdzw7mAZzsWQPV69") * 10000
      )
    );

    // EVM address
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
