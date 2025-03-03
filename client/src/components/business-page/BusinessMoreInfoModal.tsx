import { BusinessAdditionalInfo, BusinessSummery } from "@/types";
import Xbtn from "../Xbtn";

interface BusinessMoreInfoModalProps {
  business: {
    summary: BusinessSummery;
    additionalInfo: BusinessAdditionalInfo;
  };
  onClose: () => void;
}

export default function BusinessMoreInfoModal({
  onClose,
  business,
}: BusinessMoreInfoModalProps) {
  function isCurrentTimeBetween(timeRange: string): boolean {
    console.log(timeRange);

    const [start, end] = timeRange.split("–").map((time) => {
      const [hours, minutes] = time.split(":").map(Number);
      const date = new Date();
      date.setHours(hours, minutes, 0, 0);
      return date;
    });

    const now = new Date();
    now.setSeconds(0, 0);

    if (end < start) {
      // If the end time is before the start time, it means the range crosses midnight
      return now >= start || now <= end;
    }

    return now >= start && now <= end;
  }

  const dayIndex = new Date().getDay();
  const currentDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][dayIndex];
  const openingTimesOfToday = business.additionalInfo.openingTimes.find(
    (times) => {
      return times.day === currentDay;
    }
  );
  let openingTimeMsg: string;
  let isOpenNow: boolean;
  if (openingTimesOfToday) {
    openingTimeMsg = `${currentDay} ${openingTimesOfToday.time}`;
    isOpenNow = isCurrentTimeBetween(openingTimesOfToday.time);
    console.log(isOpenNow);
  } else {
    isOpenNow = false;
    openingTimeMsg = "CLose for today";
  }

  return (
    <>
      <div className="absolute " onClick={onClose}>
        <div className="bg-[#00000075] cursor-pointer w-full h-full fixed z-30 top-0 flex justify-center items-center">
          <div
            className="w-[100vw] sm:w-[550px] h-[95vh] bg-white rounded-2xl overflow-y-auto p-4 flex flex-col gap-5 relative"
            onClick={(ev) => ev.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              <p className="font-woltHeader text-[32px]">
                {business.summary.name}
              </p>
              <div className="flex items-center gap-1">
                <div
                  className={`bg-${
                    isOpenNow ? "green" : "red"
                  }-500 rounded-full w-2 h-2`}
                ></div>
                <p>{openingTimeMsg}</p>
              </div>
            </div>

            <p className="text-[18px]">{business.summary.shortDescription}</p>

            <div className="flex flex-col gap-3">
              <p className="font-bold text-[28px]">Address</p>
              <p className="text-[16px]">{business.summary.location.address}</p>
              <button
                className="text-[16px] text-[#039de0] cursor-pointer self-start"
                onClick={() => {
                  const address = encodeURIComponent(
                    business.summary.location.address
                  );
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${address}`,
                    "_blank"
                  );
                }}
              >
                See map
              </button>
            </div>

            <div className="text-[16px]">
              <p className="text-[28px] font-bold mb-4">Opening times</p>
              {business.additionalInfo.openingTimes.map((day, index) => {
                return (
                  <div key={index} className="flex justify-between">
                    <p>{day.day}</p>
                    <p className="text-[#9A9A9C]">{day.time}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-[16px] flex flex-col gap-4">
              <p className="text-[28px] font-bold mb-4">Delivery information</p>
              <div>
                {business.additionalInfo.deliveryTimes.map((day, index) => {
                  return (
                    <div key={index} className="flex justify-between">
                      <p>{day.day}</p>
                      <p className="text-[#9A9A9C]">{day.time}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                {business.additionalInfo.deliveryFeeStructure.map(
                  (msg, index) => {
                    if (index < 3) {
                      return (
                        <div key={index} className="flex justify-between">
                          <p>{msg.text}</p>
                          <p className="text-[#9A9A9C]">{msg.spanText}</p>
                        </div>
                      );
                    }
                  }
                )}
              </div>
              <div className="flex justify-between">
                <p>{business.additionalInfo.deliveryFeeStructure[3].text}</p>
                <p className="text-[#9A9A9C]">
                  {business.additionalInfo.deliveryFeeStructure[3].spanText}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-bold text-[28px]">Service fee</p>
              <p>
                The service fee is 5% of item subtotal, maximum ₪5.90. A reduced
                service fee of ₪1.00 applies when the item subtotal is less than
                ₪60.00.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-bold text-[28px]">Contact</p>
              <p className="text-[#9A9A9C]">
                Please contact the {business.summary.type} if you have any
                questions on their products
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <p>Phone number</p>
                  <p className="text-[#039de0] cursor-pointer">
                    {business.additionalInfo.phoneNumber}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Website</p>
                  <button
                    onClick={() =>
                      window.open(`https://wolt.com${business.summary.link}`)
                    }
                  >
                    <p className="text-[#039de0] cursor-pointer">
                      {business.summary.link}
                    </p>
                  </button>
                </div>
                <hr />
                <div className="flex justify-between">
                  <p>Wolt support</p>
                  <p className="text-[#039de0] cursor-pointer">
                    Open support chat
                  </p>
                </div>
              </div>
            </div>

            <Xbtn onClose={onClose} />
          </div>
        </div>
      </div>
    </>
  );
}
