import { StyleSheet } from "react-native";
import { Colors, screenHeight } from "../../utils";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundBeige,
  },
  emptyText: {
    marginTop: screenHeight * 0.35,
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.secondaryGreen,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
});

export default styles;
