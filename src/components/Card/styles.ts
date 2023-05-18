import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../utils/helpers";
import { Colors } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth * 0.9,
    height: screenHeight * 0.15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primaryBrownShadow,
    paddingHorizontal: 8,
    marginVertical: 8,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    backgroundColor: Colors.primaryBrownShadow,
    alignContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primaryGreen,
    width: screenWidth * 0.55,
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  date: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primaryGreen,
    alignSelf: 'flex-end',
  },
  image: {
    flex: 0.5,
    width: '100%',
    height: '85%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  summary: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.secondaryBrown,
    alignSelf: 'flex-end',
    flexWrap: 'wrap',
  },
  descriptionArea: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    height: '85%',
    justifyContent: 'space-around'
  },
  totalReadingTime: {
    color: Colors.secondaryBrownLight,
    fontSize: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  }
});

export default styles;
