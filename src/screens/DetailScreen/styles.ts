import { StyleSheet } from "react-native";
import { Colors, screenHeight, screenWidth } from "../../utils";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundBeige,
    alignItems: 'center',
  },
  banner: {
    width: screenWidth * 0.95,
    height: screenHeight* 0.25,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  content: {
    width: screenWidth * 0.95,
    color: Colors.secondaryGreen
  },
});

export default styles;
