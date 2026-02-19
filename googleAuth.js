import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "831382677922-p7sios3vidkk7la5ncm479222bfr12k0.apps.googleusercontent.com",
    webClientId: "831382677922-p7sios3vidkk7la5ncm479222bfr12k0.apps.googleusercontent.com",

    // ⭐ Your working Android Client ID:
    androidClientId: "831382677922-1fh94tqmjq6sck0cbfo243985vadl983.apps.googleusercontent.com",

    // Optional (if you ever add iOS):
    iosClientId: "831382677922-p7sios3vidkk7la5ncm479222bfr12k0.apps.googleusercontent.com",

    scopes: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });

  return { request, response, promptAsync };
};
