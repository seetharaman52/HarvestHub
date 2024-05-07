import { View, Text, Image } from "react-native"
import profileStyles from "../css/profile"
const ProfilePage = ({navigation}) => {
    
    const userData = {
        name: "Seetharaman",
        username: "seetharaman52",
        phoneNumber: "6382150849",
        email: "seetharamanshan699",
        addr: "13, Arasamara St, Namakkal",
        password: "*******",
    };

    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.headingContainer}>
                <Text style={profileStyles.headingText}>
                    My Profile
                </Text>
            </View>
            <View style={profileStyles.profileInfo}>
                <Image
                style={profileStyles.imageTele}
                source={require('../assets/profile-page/telephone.png')}
                />
                <Text style={profileStyles.name}>{userData.name}</Text>
                <Text style={profileStyles.username}>{userData.username}</Text>
                <Text style={profileStyles.info}>{userData.phoneNumber}</Text>
                <Text style={profileStyles.info}>{userData.email}</Text>
                <Text style={profileStyles.info}>{userData.addr}</Text>
                <Text style={profileStyles.info}>{userData.password}</Text>
            </View>
            <Text style={profileStyles.supportUs}>Support Us</Text>
        </View>
    )
}

export default ProfilePage;