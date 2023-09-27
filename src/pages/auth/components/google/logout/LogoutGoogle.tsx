import { FC, ReactNode } from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { Success } from "../../../../../components/success";
import { Error } from "../../../../../components/Error";

const clientId =
  "936147651738-s4hi0rdseiema0k63lveg7sv3mk9igrt.apps.googleusercontent.com";

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

const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
  console.log(res);
  return (
    <>
      <Error />
    </>
  );
};

interface LoginGoogleProps {
  children: ReactNode;
}

const LoginGoogle: FC<LoginGoogleProps> = ({ children }) => {
  const scope = "https://www.googleapis.com/auth/userinfo.email";

  return (
    <div style={{ width: "30px", backgroundColor: "transparent !important" }}>
      <GoogleLogin
        clientId={clientId}
        buttonText="logout"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        scope={scope}
      >
        {children}
      </GoogleLogin>
    </div>
  );
};

export default LoginGoogle;
