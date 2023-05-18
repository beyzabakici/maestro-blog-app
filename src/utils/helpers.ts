import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

function formatDateString(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();
  
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

const emptyText = 'Oops! \n There are no favorited blog posts here.\n 📚 📖'

export { screenWidth, screenHeight, formatDateString, emptyText };
