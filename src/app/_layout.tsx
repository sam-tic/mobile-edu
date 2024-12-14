import { Stack } from "expo-router";

export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:"test"}} />
            <Stack.Screen name="home" options={{title:"test"}} />
        </Stack>
    )
}