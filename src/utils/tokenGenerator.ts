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

type TokenGenerator = {
  userInfo: UserInfo;
  appInfo: AppInfo;
  gatewayDetails: GatewayDetails;
};

const tokenGenerator = ({
  userInfo,
  appInfo,
  gatewayDetails,
}: TokenGenerator) =>
  window.btoa(JSON.stringify({ userInfo, appInfo, gatewayDetails }));

export default tokenGenerator;
