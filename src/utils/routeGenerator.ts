type UserInfo = {
  reservationId: string;
  token: string;
};

type AppInfo = { applicationName: "webApp" | "microSite" };

type GatewayDetails = {
  gatewayType: "ccavenue" | "payu";
  imgSrc: string;
  payload: any;
}[];

type RouteGenerator = {
  userInfo: UserInfo;
  appInfo: AppInfo;
  gatewayDetails: GatewayDetails;
};

const routeGenerator = ({
  userInfo,
  appInfo,
  gatewayDetails,
}: RouteGenerator) =>
  `localhost:3001/?token=${window.btoa(
    JSON.stringify({ userInfo, appInfo, gatewayDetails })
  )}`;

export default routeGenerator;
