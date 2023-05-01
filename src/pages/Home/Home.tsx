import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { SideBar } from "src/components/SideBar/SideBar";

import { checkTokenValidity } from "src/utils/check-token.util";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!checkTokenValidity()) {
      navigate("/auth/login");
    }
  });

  return <SideBar />;
};
