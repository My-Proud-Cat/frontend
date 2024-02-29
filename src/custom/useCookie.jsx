import { useCookies } from 'react-cookie';

const useCookie = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const setCookieFun = (name, data) => {
    setCookie(name, data);
  };

  const getCookieFun = () => {
    // getCookie
  };

  // const removeCookie

  return {};
};

export default useCookie;
