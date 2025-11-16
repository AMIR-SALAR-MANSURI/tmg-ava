export default function getBaseURL(envURL: string | undefined) {
  if (!envURL || envURL === "/") {
    return "/api";
  }

  envURL = envURL.replace(/\/+$/, "");

  if (envURL.startsWith("http")) {
    return envURL;
  }

  if (!envURL.startsWith("/")) {
    return `/${envURL}`;
  }

  return envURL;
}
