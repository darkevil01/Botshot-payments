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

const tokenGenerator = (
  userInfo: UserInfo,
  appInfo: AppInfo,
  gatewayDetails: GatewayDetails
) => window.btoa(JSON.stringify({ userInfo, appInfo, gatewayDetails }));

export default tokenGenerator;
