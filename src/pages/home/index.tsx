import GatewayEngine from "gatewayEngine";
import GatewayRenderer from "gatewayEngine/GatewayRenderer";
import useQueryParams from "hooks/useQueryParams";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { setGatewayDetails, setStatus, setUserInfo } from "redux/actions";
import { useAppDispatch, useAppSelector } from "redux/store";

const Home = () => {
  const dispatch = useAppDispatch();
  const query = useQueryParams();

  const { status } = useAppSelector((state) => state.payStatus);

  useEffect(() => {
    if (query?.get("token")) {
      const tokenData = JSON.parse(window.atob(query?.get("token") || ""));
      dispatch(setUserInfo(tokenData?.userInfo));
      dispatch(setGatewayDetails(tokenData?.gatewayDetails));
      dispatch(setStatus(tokenData?.initialStatus));
    }
  }, [dispatch, query]);

  useEffect(() => {
    if (!!status) window.parent.postMessage(status, "*");
  });

  return (
    <Routes>
      <Route index element={<GatewayEngine />} />
      <Route path=":gateway" element={<GatewayRenderer />} />
    </Routes>
  );
};

export default Home;
