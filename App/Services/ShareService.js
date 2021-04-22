import Share from "react-native-share";

function shareURL({ message, url, ...other }) {
  return Share.open({ message: message, url: url, ...other });
}

const ShareService = { shareURL };
export default ShareService;
