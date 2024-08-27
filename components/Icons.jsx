import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export const HomeIcon = (props) => (
  <Octicons name="home" size={24} color="black" {...props} />
);

export const StatsIcon = (props) => (
  <FontAwesome5 name="chart-pie" size={24} color="black" {...props} />
);
