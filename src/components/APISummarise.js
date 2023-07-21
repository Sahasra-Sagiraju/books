import axios from "axios";

const summarise = async (text) => {
  // xQ91bA1qFUPSyV60
  const response = await axios.get(
    `https://api.textgears.com/summarize?key=xQ91bA1qFUPSyV60&language=en-GB&text=${text}`
  );
  console.log(response);
};

export default summarise;
