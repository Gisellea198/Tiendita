import dotenv from "dotenv";
dotenv.config();
const { API_APP } = process.env;

const config = () => {
  return {
    app: {
      projectName: "Tiendita",
      api: API_APP,
    },
  };
};
export default config;
