import { BuildingRoom } from "../../../../configs/Setting";
import AsyncStorage from "@react-native-async-storage/async-storage";
export async function getBuildingRoom() {
    const token=await AsyncStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append( 'Authorization',`Bearer ${token}`)

    var raw = "";

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    return (await fetch(BuildingRoom, requestOptions)).json()
}