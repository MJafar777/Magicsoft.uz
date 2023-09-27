import { FC, ReactNode, useState } from "react"; // Import FC and ReactNode types

import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login"; // Import the GoogleLoginResponse type

import { Success } from "../../../../../components/success";
import { Error } from "../../../../../components/Error";

const clientId =
  "936147651738-s4hi0rdseiema0k63lveg7sv3mk9igrt.apps.googleusercontent.com";

interface LoginGoogleProps {
  children: ReactNode;
}

const LoginGoogle: FC<LoginGoogleProps> = ({ children }) => {
  const [LoginAuthImage, SetLoginAuthImage] = useState("");

  const onFailure = (res: GoogleLoginResponse) => {
    console.log(res);
    SetLoginAuthImage(res.profileObj.imageUrl);
    return (
      <>
        <Error />
      </>
    );
  };

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ("getBasicProfile" in res) {
      console.log(res);
    } else {
      // Handle offline response here if needed
    }
    return (
      <>
        <Success />
      </>
    );
  };

  return (
    <div>
      <img src={LoginAuthImage ? LoginAuthImage : ""} alt="" />
      <GoogleLogin
        clientId={clientId}
        buttonText="login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      >
        {children}
      </GoogleLogin>
    </div>
  );
};

export default LoginGoogle;
