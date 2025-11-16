const getToken = () => {
  const token = sessionStorage.getItem(
    `oidc.user:${process.env.NEXT_PUBLIC_OPIC_AUTHORITY}:${process.env.NEXT_PUBLIC_OPIC_CLIENT_ID}`
  );

  if (token) {
    try {
      const pars = JSON.parse(token as string).access_token;

      return pars;
    } catch (error) {
      console.log(error);
      return "";
    }
  }

  return token;
};

export { getToken };
