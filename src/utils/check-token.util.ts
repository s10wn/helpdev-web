import cookies from "js-cookie";

import { logger } from "./logger.util";

const getTokenFromCookie = (): string | undefined => {
  if (!cookies.get("token")) {
    return undefined;
  }

  const res = JSON.parse(cookies.get("token")?.toString() || "{}");

  logger.info(res);

  return res;
};

export const checkTokenValidity = (): boolean => {
  const token = getTokenFromCookie();

  if (!token) {
    logger.info("Токен не найден");

    return false;
  }

  logger.info("Токен действителен");

  return true;
};
