import { View, Text, Image } from "react-native"
import profileStyles from "../css/profile"
const ProfilePage = ({navigation}) => {
    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.headingContainer}>
                <Text style={profileStyles.headingText}>
                    My Profile
                </Text>
            </View>
        </View>
    )
}

export default ProfilePage