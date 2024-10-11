module.exports = {
  content: ["./index.html", "./input.css"],
  theme: {
    extend: {
      colors: {
        dark: " #212832",
        dark2: "#080809",
        white: "#fff",
        darkblue: "#181E4B",
        primary: "#DF6951",
        secondary: "#F1A501",
        gray: "#5E6282",
        gray2: "#686D77",
        blue: "#14183E",
        lightBlue: "#59B1E6",
        violet: "#DFD7F9",
        yell: "#F0BB1F",
        orang: "#F15A2B",
        deepBlue: "#006380",
        yellBg: "#fff1da",
      },
      fontFamily: {
        poppins: "Poppins",
        volkhov: "Volkhov",
      },
      spacing: {
        card: "28%",
      },
      backgroundImage: {
        yellow: "url('./src/background.png')",
        category: "url('./src/bg2.png')",
        destinations: "url('./src/decore.svg')",
        underline: "url('./src/line.png')",
      },
      backgroundSize: {
        mobile: "25%",
      },
      fontSize: {
        "4xl": "3.125rem",
      },
    },
    container: {
      center: true,
    },
    dropShadow: {
      md: "0 20px 35px rgba(241, 165, 1, 0.15)",
      sm: "0 15px 30px rgba(223, 105, 81, 0.30)",
      a: "0 100px 80px rgba(0, 0, 0, 0.2)",
      b: "0 64.81px 46.85px rgba(0, 0, 0, 0.15)",
      c: "0 38.52px 25.48px rgba(0, 0, 0, 0.12)",
      d: "0 20px 13px rgba(0, 0, 0, 0.1)",
      e: "0 8.15px 6.52px rgba(0, 0, 0, 0.10)",
      f: "0 1.85px 3.15px rgba(0, 0, 0, 0.18)",
      g: "0 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  plugins: [],
};
