exports.CLIENT_ORIGIN =
  process.env.NODE_ENV === "production"
    ? "https://bloc-ropstein.netlify.app"
    : "http://localhost:3000";
