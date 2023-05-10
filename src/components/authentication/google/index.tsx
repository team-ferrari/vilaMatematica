import React from 'react';
import { View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

export function GoogleAuthentication() {
    GoogleSignin.configure({
        webClientId: '937071996614-4jugu3r5aspc0u78jaro2406t0j27gdk.apps.googleusercontent.com',
        offlineAccess: true,
    });

    async function handleGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
        } catch (error) {
            console.log(JSON.stringify(error));
        }
    }

    return (
        <View>
            <GoogleSigninButton size={GoogleSigninButton.Size.Wide} color={GoogleSigninButton.Color.Dark} onPress={handleGoogleSignin} />
        </View>
    );
}
