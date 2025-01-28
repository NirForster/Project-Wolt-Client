import React from "react";
import wolt_plus from "@/assets/banner_wolt_plus.avif";
import styles from "./MarketingBanner.module.css";

const MarketingBanner_2 = () => {
  return (
    <div className="mt-[2rem] p-[1.5rem 1.5rem] bg-woltColors-brandBg flex flex-row cursor-pointer">
      <a href="https://wolt.com/en/subscription/649003a1b415ab1c86b3705e">
        <div className="">
          <img src={wolt_plus} alt="wolt_plus" className={styles.scooter} />
        </div>
        <div className="flex flex-col">
          <div>
            <svg
              viewBox="0 0 140 40"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Wolt+"
            >
              {/* SVG content */}
              <title>Wolt+</title>
              <path
                d="M41.7388 0C40.4693 0 39.3763 0.0610998 38.7856 0.1222C37.679 0.23761 37.2989 1.27631 37.3803 2.30821C38.548 17.203 35.2418 34.535 31.474 34.535C28.6634 34.535 27.8827 26.4291 27.8827 19.2261C27.8827 14.9695 28.1271 10.869 28.2289 7.24372C28.2697 5.88595 27.7741 5.64155 26.7965 5.52614C25.4551 5.32218 24.0875 5.37053 22.7639 5.6687C21.637 5.91989 21.3722 6.83639 20.1841 9.62661C14.2778 23.537 8.57517 34.7454 8.57517 34.7454C7.06805 23.5438 9.00287 12.6816 10.6526 4.75221C10.8834 3.6592 10.3539 3.01426 9.45094 3.03462C7.74014 3.03462 5.11964 3.11609 3.93838 3.88323C2.75712 4.65037 2.42446 5.33605 2.0986 6.91785C0.272391 16.0014 -0.915661 27.3931 0.924122 36.1982C1.31788 38.1059 1.76594 38.554 2.58061 39.0496C3.39527 39.5451 6.87796 40 8.22894 40C9.07357 40.05 9.91414 39.8492 10.6449 39.4228C11.3757 38.9964 11.9642 38.3635 12.3362 37.6035C14.8141 33.4012 16.7965 29.1921 20.5372 21.127C20.9241 31.6565 22.4041 39.9185 29.8718 39.9185C39.7768 39.9185 46.1651 15.4175 46.1651 3.63204C46.1991 0.509165 44.6376 0 41.7388 0Z"
                fill="#00C2E8"
              ></path>
              <path
                d="M108.893 16.9722C110.686 16.9314 111.955 16.3883 112.288 14.7047C112.471 13.6999 111.881 13.055 110.726 13.0075C110.726 13.0075 106.076 12.831 102.22 12.6612C102.22 12.6612 103.001 8.42498 103.381 6.70061C103.43 6.48306 103.433 6.25766 103.39 6.03883C103.347 5.82001 103.259 5.61258 103.131 5.42981C103.003 5.24705 102.839 5.09298 102.648 4.97747C102.457 4.86196 102.244 4.78754 102.023 4.75899C100.583 4.52672 99.1197 4.4652 97.6647 4.57569C97.3189 4.59086 96.9866 4.7144 96.7149 4.92884C96.4432 5.14327 96.2459 5.43773 96.1508 5.77053C95.7638 7.53564 95.3565 9.66734 94.8745 12.3965C93.4488 12.3625 92.0571 12.3489 91.0931 12.3965C90.7439 12.3751 90.3992 12.484 90.1257 12.7023C89.8523 12.9205 89.6696 13.2325 89.6131 13.5777C89.3982 14.5193 89.2664 15.478 89.2193 16.4426C89.1718 17.2641 90.0747 17.6511 91.0048 17.6171L93.9376 17.4813C93.6049 19.0292 92.9464 23.1908 92.6952 25.7773C91.0795 31.1541 87.719 35.1256 84.8337 35.1256C83.0618 35.1256 82.0028 34.0869 82.0028 30.9301C82.0028 26.5648 83.0211 21.0387 84.4943 15.5058C86.5853 10.5363 87.7801 5.01697 87.7801 2.51188C87.7801 1.56823 87.4882 0.515951 86.3544 0.291918C84.5771 -0.0969809 82.7334 -0.0644313 80.9709 0.386963C79.7489 0.767139 79.4977 2.03666 79.3483 2.71554C78.6694 5.98099 77.4882 11.7719 76.6803 16.8432C74.8745 19.002 72.8106 20.516 70.5703 20.9165C70.2173 14.1955 66.273 11.3102 60.8351 11.3102C51.2764 11.3102 45.2207 19.7352 45.2207 29.1921C45.2207 36.8568 49.4366 40.0543 55.5873 40.0543C62.8446 40.0543 68.2417 34.9559 70.258 25.6076C72.2672 25.1818 74.1245 24.2227 75.6348 22.831C75.6348 22.831 74.4739 28.6219 74.4739 32.0299C74.4739 37.1826 76.7142 40.0543 81.9417 40.0543C86.2594 40.0543 90.0272 37.0401 92.3829 33.3809C93.0143 38.167 95.6009 40.0543 99.7081 40.0543C103.476 40.0543 107.176 37.4678 109.627 34.7115C110.143 33.8561 110.516 33.1093 110.19 32.7427C109.443 31.8941 108.024 31.4528 107.631 32.1521C105.221 34.3449 104.101 35.1595 102.118 35.1595C100.55 35.1595 99.2804 34.2362 99.2804 31.5411C99.2804 27.6714 101.487 17.1962 101.487 17.1962C103.422 17.1283 106.877 17.0604 108.955 17.0129L108.893 16.9722ZM56.6803 35.8927C54.4196 35.8316 52.9532 33.9443 52.9532 30.2376C52.9532 23.0821 55.5126 15.4175 60.1223 15.4175C60.5853 15.4083 61.046 15.4866 61.48 15.6483C61.4054 15.9267 61.351 16.1507 61.3307 16.2797C60.6518 20.353 61.48 22.9056 63.4352 24.3313C62.4576 30.6042 59.6606 35.8316 56.6192 35.8316"
                fill="#00C2E8"
              ></path>
              <path
                d="M139.403 22.9667C139.438 22.7696 139.429 22.5672 139.376 22.3739C139.324 22.1807 139.23 22.0014 139.1 21.849C138.97 21.6965 138.808 21.5746 138.626 21.492C138.443 21.4095 138.245 21.3683 138.045 21.3714H127.848L129.667 10.8622C129.697 10.6962 129.69 10.5257 129.647 10.3628C129.604 10.1998 129.525 10.0482 129.417 9.9188C129.309 9.78938 129.174 9.6852 129.021 9.61361C128.869 9.54201 128.702 9.50474 128.534 9.50441H126.538C126.266 9.50387 126.003 9.59979 125.795 9.77509C125.588 9.95038 125.449 10.1937 125.404 10.4616L123.483 21.3238H112.811C112.487 21.3191 112.173 21.4301 111.924 21.6367C111.675 21.8433 111.508 22.132 111.453 22.4508L111.168 24.0733C111.134 24.2699 111.144 24.4716 111.196 24.664C111.249 24.8564 111.344 25.0348 111.474 25.1865C111.603 25.3381 111.765 25.4594 111.946 25.5415C112.128 25.6237 112.326 25.6648 112.526 25.6619H122.743L120.896 36.1507C120.865 36.3168 120.871 36.4878 120.914 36.6513C120.957 36.8148 121.035 36.9668 121.143 37.0965C121.252 37.2263 121.387 37.3305 121.541 37.4017C121.694 37.4729 121.861 37.5094 122.03 37.5085H124.026C124.297 37.5093 124.559 37.4143 124.766 37.2404C124.974 37.0665 125.113 36.8248 125.16 36.558L127.081 25.6959H137.814C138.136 25.7008 138.45 25.5908 138.699 25.3856C138.948 25.1803 139.115 24.8932 139.172 24.5757L139.403 22.9667Z"
                fill="#00C2E8"
              ></path>
            </svg>
            <div className="font-woltHeader text-woltColors-white">
              Skip the delivery fees with Wolt+
            </div>
            <div>
              <button>Join now</button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MarketingBanner_2;
