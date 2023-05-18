import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../utils/helpers";
import { Colors } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth * 0.9,
    height: screenHeight * 0.2,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primaryBrownShadow,
    paddingHorizontal: 8,
    marginVertical: 8,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: Colors.primaryBrownShadow,
    alignContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.primaryGreen,
    textAlign: "left",
    flexWrap: "wrap",
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.primaryBrown,
    alignSelf: "flex-end",
  },
  image: {
    flex: 0.7,
    width: "100%",
    height: "85%",
    borderRadius: 5,
    alignSelf: "center",
  },
  summary: {
    fontSize: 10,
    fontWeight: "bold",
    color: Colors.secondaryBrown,
  },
  descriptionArea: {
    flex: 1,
    marginLeft: 5,
    height: "85%",
    justifyContent: "space-around",
  },
  row: { flexDirection: "row" },
  icon: { fontSize: 11, paddingRight: "1%", color: Colors.primaryBrown },
  timeArea: {
    justifyContent: "space-between",
  },
});

export default styles;
