import CCAvenue from "gateways/ccavenue";
import PayU from "gateways/payU";
import { ComponentType } from "react";
import { useParams } from "react-router";

type GatewayMapType = {
  [key in string]: { component: ComponentType };
};

type GatewayRendererParams = { gateway: string };

const GatewayMap: GatewayMapType = {
  ccavenue: {
    component: CCAvenue,
  },
  payu: {
    component: PayU,
  },
};

const GatewayRenderer = () => {
  const { gateway } = useParams<GatewayRendererParams>();

  const Gateway = GatewayMap[gateway!].component;

  return <Gateway />;
};

export default GatewayRenderer;
