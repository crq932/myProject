type loginFunction = (isModal: boolean, token: string) => void;
type logoutFunction = () => void;
type ISetLoginProps = {
  setLogin: loginFunction;
};
type IUserProps = {
  isLogin: boolean;
  handleLogout: logoutFunction;
};

type IMypageProps = {
  isLogin: boolean;
  handleLogout: logoutFunction;
  accessToken: string;
};

export { ISetLoginProps, IUserProps, IMypageProps };
