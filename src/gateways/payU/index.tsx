import { CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import fetcher from "dataProvider";
import { useEffect } from "react";
import { useAppSelector } from "redux/store";

const PayU = () => {
  const { gatewayDetails } = useAppSelector((state) => state.gatewayInfo);
  const userInfo = useAppSelector((state) => state.userInfo);

  const payload = gatewayDetails.find(
    (gateway) => gateway.gatewayType === "payu"
  )?.payload;

  const { mutate } = useMutation(
    [gatewayDetails],
    () =>
      fetcher.put(
        `https://testapi.botshot.in:32313/api/v1/reservation/${userInfo?.reservationId}/payment/webhook`,
        payload,
        {},
        {
          "x-access-token": userInfo?.token,
        }
      ),
    {
      onSuccess: (res) => {
        window.location.replace(res?.data?.billingUrl);
      },
    }
  );

  useEffect(() => {
    mutate();
  }, [mutate]);

  return <CircularProgress />;
};

export default PayU;
