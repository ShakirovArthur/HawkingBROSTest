import React, { useCallback, useEffect } from "react";
import { SliderSelection } from "./Slider";
import { AdditionalServices } from "./AdditionalServices";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { Button, SelectChangeEvent } from "@mui/material";
import {
  setTotalPrice,
  setSetting,
  setPrice,
  PRICE_PER_MINUTES,
  PRICE_PER_SMS,
  PRICE_PER_GB,
  MINUTES_RANGE,
  SMS_RANGE,
  INTERNET_RANGE,
} from "../../store/slice";
import { PhoneNumber } from "./PhoneNumber";
import { MobileOperator } from "./MobileOperator";

export const MainPage = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.tarrif.totalPrice);
  const settings = useSelector((state: RootState) => state.tarrif.settings);
  const prices = useSelector((state: RootState) => state.tarrif.prices);

  const handleChangePhone = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSetting({ type: "phone", value: event.target.value }));
    },
    [dispatch]
  );

  const handleChangeMobileOperator = useCallback(
    (event: SelectChangeEvent<string>) => {
      dispatch(setSetting({ type: "operator", value: event.target.value }));
    },
    [dispatch]
  );

  const handleChangeMinutes = useCallback(
    (_: unknown, value: number | number[]) => {
      if (typeof value === "number") {
        dispatch(
          setPrice({
            type: "minutes",
            value: value * PRICE_PER_MINUTES,
          })
        );
        dispatch(setSetting({ type: "minutes", value }));
      }
    },
    [dispatch]
  );

  const handleChangeSMS = useCallback(
    (_: unknown, value: number | number[]) => {
      if (typeof value === "number") {
        dispatch(
          setPrice({
            type: "sms",
            value: value * PRICE_PER_SMS,
          })
        );
        dispatch(setSetting({ type: "sms", value }));
      }
    },
    [dispatch]
  );

  const handleChangeInternet = useCallback(
    (_: unknown, value: number | number[]) => {
      if (typeof value === "number") {
        dispatch(
          setPrice({
            type: "internet",
            value: value * PRICE_PER_GB,
          })
        );
        dispatch(setSetting({ type: "internet", value }));
      }
    },
    [dispatch]
  );

  const handleClickVK = useCallback(() => {
    dispatch(setPrice({ type: "vk", value: settings.vk ? 0 : 20 }));
    dispatch(setSetting({ type: "vk", value: settings.vk ? 0 : 1 }));
  }, [dispatch, settings]);

  const handleClickFB = useCallback(() => {
    dispatch(setPrice({ type: "fb", value: settings.fb ? 0 : 30 }));
    dispatch(setSetting({ type: "fb", value: settings.fb ? 0 : 1 }));
  }, [dispatch, settings]);

  const handleSubmit = useCallback(() => {
    alert(JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    dispatch(
      setTotalPrice(
        prices.internet + prices.minutes + prices.sms + prices.vk + prices.fb
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prices]);

  return (
    <div className="mainPage">
      <h1>Настройте тариф</h1>
      <PhoneNumber value={`${settings.phone}`} onChange={handleChangePhone} />
      <MobileOperator
        value={`${settings.operator}`}
        onChange={handleChangeMobileOperator}
      />
      <SliderSelection
        name={"Минуты"}
        step={MINUTES_RANGE}
        onChange={handleChangeMinutes}
      />
      <SliderSelection
        name={"СМС"}
        step={SMS_RANGE}
        onChange={handleChangeSMS}
      />
      <SliderSelection
        name={"Интеренет"}
        step={INTERNET_RANGE}
        onChange={handleChangeInternet}
      />
      <AdditionalServices onClickVK={handleClickVK} onClickFB={handleClickFB} />
      <Button variant="contained" onClick={handleSubmit}>
        {totalPrice} в месяц
      </Button>
    </div>
  );
};
