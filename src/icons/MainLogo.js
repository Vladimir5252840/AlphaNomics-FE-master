import React from 'react';

const
  MainLogo = ({ ...otherProps }) => (
    <svg {...otherProps} width="187" height="40" viewBox="0 0 187 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.6272 38.6683H33.9661C33.9661 36.464 32.5947 34.3474 30.1024 32.7129C27.3846 30.9313 23.7306 29.9482 19.8136 29.9482C15.8966 29.9482 12.2426 30.9282 9.5248 32.7129C7.03245 34.3474 5.66102 36.464 5.66102 38.6683H0C0 36.7489 0.56986 34.8922 1.68766 33.1575C2.73345 31.5356 4.21133 30.0891 6.08372 28.8586C9.78155 26.4319 14.6598 25.095 19.8136 25.095C24.9674 25.095 29.8425 26.4319 33.5434 28.8586C35.4158 30.0891 36.8937 31.5325 37.9395 33.1575C39.0604 34.8922 39.6272 36.7489 39.6272 38.6683Z" fill="#10B3E8" />
      <path d="M6.93538 32.4625C6.08999 34.4257 5.66102 36.511 5.66102 38.6683H0C0 38.5963 0.0031311 38.5211 0.0031311 38.4491C0.0438352 36.608 0.610564 34.8264 1.68766 33.1576C2.73345 31.5357 4.21133 30.0891 6.08372 28.8586C7.76512 27.7564 9.69075 26.8797 11.7729 26.2504C11.272 26.6324 10.7898 27.0488 10.3358 27.4965C8.88605 28.9212 7.74007 30.5932 6.93538 32.4625ZM39.624 38.4491C39.5833 36.608 39.0166 34.8264 37.9395 33.1576C36.8937 31.5357 35.4158 30.0891 33.5434 28.8586C31.862 27.7564 29.9364 26.8797 27.8542 26.2504C28.3552 26.6324 28.8374 27.0488 29.2914 27.4965C30.7442 28.9212 31.8871 30.5932 32.6918 32.4625C33.5372 34.4257 33.9661 36.511 33.9661 38.6683H39.6272C39.6272 38.5963 39.624 38.5211 39.624 38.4491Z" fill="#396BC2" />
      <path d="M39.6272 38.6683H33.9661C33.9661 34.2941 33.5372 30.0578 32.6918 26.075C31.8871 22.2801 30.7442 18.8891 29.2914 15.996C27.9231 13.2688 26.3012 11.0708 24.5979 9.63362C23.0292 8.31229 21.4198 7.64224 19.8136 7.64224C18.2105 7.64224 16.6011 8.31229 15.0324 9.63362C13.3291 11.0708 11.704 13.2688 10.3389 15.996C8.88605 18.8891 7.74007 22.2801 6.93538 26.075C6.08999 30.0578 5.66102 34.2941 5.66102 38.6683H0C0 29.1967 1.8724 20.248 5.27277 13.4723C7.0074 10.0219 9.05827 7.27903 11.3753 5.32523C12.6277 4.27005 13.9553 3.45283 15.3205 2.89549C16.7796 2.30059 18.2919 2 19.8136 2C21.3353 2 22.8476 2.30059 24.3098 2.89549C25.675 3.45283 27.0026 4.27005 28.2519 5.32523C30.5689 7.27903 32.6229 10.0219 34.3544 13.4723C37.7548 20.248 39.6272 29.1967 39.6272 38.6683Z" fill="#10B3E8" />
      <path d="M51.701 16.1432C53.3354 16.1432 54.5503 16.5502 55.3456 17.3581C56.1377 18.169 56.5354 19.3995 56.5354 21.0527V26.9142C56.5354 27.3494 56.4039 27.6907 56.1471 27.9412C55.8872 28.1917 55.5366 28.3169 55.0951 28.3169C54.6755 28.3169 54.3342 28.1885 54.0681 27.9286C53.7988 27.6719 53.6673 27.3337 53.6673 26.9142V26.3881C53.398 27.0144 52.9691 27.5028 52.3773 27.8535C51.7918 28.2042 51.1155 28.3795 50.3483 28.3795C49.5624 28.3795 48.8485 28.2198 48.2067 27.9036C47.571 27.5873 47.0669 27.149 46.6912 26.5885C46.3217 26.0218 46.1401 25.3956 46.1401 24.7099C46.1401 23.8426 46.3593 23.1631 46.8039 22.6684C47.2454 22.1674 47.9624 21.8042 48.9581 21.5788C49.9507 21.3533 51.319 21.2406 53.0661 21.2406H53.6673V20.6895C53.6673 19.9068 53.4982 19.3338 53.1663 18.9737C52.8313 18.6074 52.2833 18.4226 51.5256 18.4226C51.0654 18.4226 50.5926 18.4946 50.1104 18.6355C49.6344 18.7702 49.0646 18.9674 48.4071 19.2242C47.9875 19.434 47.6838 19.5373 47.4928 19.5373C47.1984 19.5373 46.9605 19.434 46.7789 19.2242C46.5941 19.0175 46.5033 18.7451 46.5033 18.4101C46.5033 18.1346 46.5691 17.8966 46.7037 17.6962C46.8446 17.4958 47.0732 17.308 47.3926 17.1326C47.9499 16.8258 48.62 16.5815 49.3965 16.4062C50.1793 16.2309 50.9495 16.1432 51.701 16.1432ZM50.9495 26.2253C51.7511 26.2253 52.4023 25.9592 52.9033 25.4238C53.4105 24.8821 53.6673 24.1838 53.6673 23.3322V22.8312H53.2415C52.1644 22.8312 51.3284 22.8813 50.7366 22.9815C50.1417 23.0754 49.7159 23.2414 49.4591 23.4825C49.2086 23.7173 49.0834 24.0429 49.0834 24.4594C49.0834 24.9791 49.2618 25.405 49.6219 25.7369C49.9789 26.0625 50.4235 26.2253 50.9495 26.2253Z" fill="#10B3E8" />
      <path d="M61.4639 28.3419C61.0287 28.3419 60.6686 28.2166 60.3868 27.9662C60.1113 27.7157 59.9735 27.3587 59.9735 26.8891V12.5361C59.9735 12.0696 60.1113 11.7189 60.3868 11.4841C60.6686 11.243 61.0287 11.1208 61.4639 11.1208C61.896 11.1208 62.2561 11.243 62.541 11.4841C62.8322 11.7189 62.9794 12.0696 62.9794 12.5361V26.8891C62.9794 27.3587 62.8322 27.7157 62.541 27.9662C62.2561 28.2166 61.896 28.3419 61.4639 28.3419Z" fill="#10B3E8" />
      <path d="M73.2168 16.1432C74.225 16.1432 75.1268 16.4031 75.9221 16.9197C76.7143 17.4301 77.3311 18.1565 77.7757 19.0989C78.2172 20.0351 78.4395 21.1122 78.4395 22.3302C78.4395 23.542 78.2172 24.6065 77.7757 25.524C77.3311 26.4351 76.7174 27.1396 75.9346 27.6406C75.1487 28.1353 74.2438 28.3795 73.2168 28.3795C72.3808 28.3795 71.6325 28.2042 70.975 27.8535C70.3237 27.5028 69.8227 27.0144 69.472 26.3881V31.2977C69.472 31.7141 69.3343 32.0398 69.0587 32.2746C68.7895 32.5157 68.4325 32.6378 67.9816 32.6378C67.5308 32.6378 67.1613 32.5063 66.8795 32.2496C66.604 31.9991 66.4662 31.664 66.4662 31.2476V17.6085C66.4662 17.1765 66.5946 16.832 66.8544 16.5815C67.1206 16.3248 67.4807 16.1933 67.9315 16.1933C68.3824 16.1933 68.7394 16.3248 69.0086 16.5815C69.2842 16.832 69.4219 17.1765 69.4219 17.6085V18.2097C69.7726 17.5522 70.2799 17.0418 70.9499 16.6817C71.6168 16.3248 72.3714 16.1432 73.2168 16.1432ZM72.4278 26.05C73.3703 26.05 74.1061 25.7306 74.6321 25.0856C75.1644 24.4343 75.4336 23.5169 75.4336 22.3302C75.4336 21.1122 75.1644 20.1635 74.6321 19.4872C74.1061 18.8109 73.3703 18.4727 72.4278 18.4727C71.4665 18.4727 70.7245 18.8046 70.1985 19.4622C69.6787 20.1228 69.4219 21.0621 69.4219 22.2801C69.4219 23.4825 69.6787 24.4155 70.1985 25.0731C70.7245 25.7243 71.4665 26.05 72.4278 26.05Z" fill="#10B3E8" />
      <path d="M88.179 16.1431C90.9344 16.1431 92.312 17.7556 92.312 20.9775V26.8891C92.312 27.3399 92.1774 27.6969 91.9113 27.9536C91.6514 28.2104 91.2882 28.3419 90.8216 28.3419C90.352 28.3419 89.9825 28.2104 89.707 27.9536C89.4377 27.6969 89.3062 27.3399 89.3062 26.8891V20.9775C89.3062 20.1259 89.134 19.5059 88.7927 19.1114C88.4483 18.72 87.9066 18.5228 87.1645 18.5228C86.3035 18.5228 85.6115 18.7983 85.0855 19.3494C84.5657 19.8942 84.309 20.6206 84.309 21.5286V26.8891C84.309 27.3399 84.1712 27.6969 83.8956 27.9536C83.6264 28.2104 83.26 28.3419 82.7935 28.3419C82.3238 28.3419 81.9575 28.2104 81.6914 27.9536C81.4315 27.6969 81.3031 27.3399 81.3031 26.8891V12.5111C81.3031 12.0946 81.4409 11.7596 81.7164 11.5091C81.9982 11.2524 82.3677 11.1208 82.8186 11.1208C83.2694 11.1208 83.6264 11.243 83.8956 11.4841C84.1712 11.7189 84.309 12.0445 84.309 12.461V18.0719C84.7097 17.4457 85.2389 16.9697 85.8996 16.6441C86.5665 16.3122 87.3273 16.1431 88.179 16.1431Z" fill="#10B3E8" />
      <path d="M100.853 16.1432C102.487 16.1432 103.702 16.5502 104.497 17.3581C105.289 18.169 105.687 19.3995 105.687 21.0527V26.9142C105.687 27.3494 105.556 27.6907 105.299 27.9412C105.039 28.1917 104.688 28.3169 104.247 28.3169C103.827 28.3169 103.486 28.1885 103.22 27.9286C102.951 27.6719 102.819 27.3337 102.819 26.9142V26.3881C102.55 27.0144 102.121 27.5028 101.529 27.8535C100.944 28.2042 100.267 28.3795 99.5001 28.3795C98.7142 28.3795 98.0003 28.2198 97.3584 27.9036C96.7228 27.5873 96.2187 27.149 95.8429 26.5885C95.4735 26.0218 95.2919 25.3956 95.2919 24.7099C95.2919 23.8426 95.511 23.1631 95.9557 22.6684C96.3971 22.1674 97.1142 21.8042 98.1099 21.5788C99.1024 21.3533 100.471 21.2406 102.218 21.2406H102.819V20.6895C102.819 19.9068 102.65 19.3338 102.318 18.9737C101.983 18.6074 101.435 18.4226 100.677 18.4226C100.217 18.4226 99.7443 18.4946 99.2621 18.6355C98.7862 18.7702 98.2163 18.9674 97.5588 19.2242C97.1392 19.434 96.8355 19.5373 96.6445 19.5373C96.3502 19.5373 96.1122 19.434 95.9306 19.2242C95.7459 19.0175 95.6551 18.7451 95.6551 18.4101C95.6551 18.1346 95.7208 17.8966 95.8555 17.6962C95.9964 17.4958 96.2249 17.308 96.5443 17.1326C97.1016 16.8258 97.7717 16.5815 98.5482 16.4062C99.331 16.2309 100.101 16.1432 100.853 16.1432ZM100.101 26.2253C100.903 26.2253 101.554 25.9592 102.055 25.4238C102.562 24.8821 102.819 24.1838 102.819 23.3322V22.8312H102.393C101.316 22.8312 100.48 22.8813 99.8883 22.9815C99.2934 23.0754 98.8676 23.2414 98.6108 23.4825C98.3603 23.7173 98.2351 24.0429 98.2351 24.4594C98.2351 24.9791 98.4136 25.405 98.7737 25.7369C99.1306 26.0625 99.5752 26.2253 100.101 26.2253Z" fill="#10B3E8" />
      <path d="M115.942 16.1432C117.351 16.1432 118.4 16.544 119.085 17.3455C119.777 18.1471 120.125 19.3588 120.125 20.9776V26.8891C120.125 27.34 119.99 27.6969 119.724 27.9537C119.464 28.2104 119.101 28.3419 118.635 28.3419C118.165 28.3419 117.795 28.2104 117.52 27.9537C117.251 27.6969 117.119 27.34 117.119 26.8891V21.1404C117.119 20.2324 116.947 19.5686 116.606 19.149C116.261 18.7326 115.719 18.5228 114.977 18.5228C114.116 18.5228 113.424 18.7984 112.898 19.3494C112.379 19.8942 112.122 20.6207 112.122 21.5287V26.8891C112.122 27.34 111.984 27.6969 111.709 27.9537C111.439 28.2104 111.073 28.3419 110.606 28.3419C110.137 28.3419 109.77 28.2104 109.504 27.9537C109.244 27.6969 109.116 27.34 109.116 26.8891V17.5835C109.116 17.1671 109.247 16.832 109.517 16.5815C109.792 16.3248 110.162 16.1933 110.631 16.1933C111.048 16.1933 111.386 16.3185 111.646 16.569C111.912 16.8132 112.047 17.1326 112.047 17.5334V18.1847C112.447 17.5334 112.98 17.0324 113.65 16.6817C114.326 16.3248 115.09 16.1432 115.942 16.1432Z" fill="#D9D9D9" />
      <path d="M128.928 28.3795C127.726 28.3795 126.668 28.1353 125.76 27.6406C124.858 27.1396 124.157 26.4257 123.656 25.4989C123.161 24.5721 122.917 23.4919 122.917 22.2551C122.917 21.0214 123.161 19.9443 123.656 19.0238C124.157 18.097 124.858 17.3894 125.76 16.8947C126.668 16.3937 127.726 16.1432 128.928 16.1432C130.131 16.1432 131.183 16.3937 132.085 16.8947C132.993 17.3894 133.691 18.097 134.176 19.0238C134.668 19.9443 134.915 21.0214 134.915 22.2551C134.915 23.4919 134.668 24.5721 134.176 25.4989C133.691 26.4257 132.993 27.1396 132.085 27.6406C131.183 28.1353 130.131 28.3795 128.928 28.3795ZM128.903 26.05C129.88 26.05 130.622 25.7337 131.133 25.0981C131.649 24.4563 131.909 23.5075 131.909 22.2551C131.909 21.0214 131.649 20.0758 131.133 19.4246C130.622 18.7733 129.887 18.4477 128.928 18.4477C127.967 18.4477 127.225 18.7733 126.699 19.4246C126.179 20.0758 125.923 21.0214 125.923 22.2551C125.923 23.5075 126.176 24.4563 126.687 25.0981C127.203 25.7337 127.942 26.05 128.903 26.05Z" fill="#D9D9D9" />
      <path d="M151.744 16.1432C153.028 16.1432 154.011 16.5252 154.688 17.2829C155.37 18.0438 155.715 19.2743 155.715 20.9776V26.8891C155.715 27.3588 155.571 27.7157 155.289 27.9662C155.013 28.2167 154.65 28.3419 154.199 28.3419C153.764 28.3419 153.404 28.2167 153.122 27.9662C152.847 27.7157 152.709 27.3588 152.709 26.8891V20.9776C152.709 20.0946 152.549 19.4622 152.233 19.0864C151.923 18.7107 151.447 18.5228 150.805 18.5228C150.019 18.5228 149.393 18.7952 148.926 19.3369C148.466 19.8723 148.238 20.6019 148.238 21.5287V26.8891C148.238 27.3588 148.094 27.7157 147.812 27.9662C147.536 28.2167 147.179 28.3419 146.747 28.3419C146.312 28.3419 145.949 28.2167 145.658 27.9662C145.373 27.7157 145.232 27.3588 145.232 26.8891V20.9776C145.232 20.0946 145.072 19.4622 144.756 19.0864C144.446 18.7107 143.97 18.5228 143.328 18.5228C142.542 18.5228 141.919 18.7952 141.462 19.3369C141.011 19.8723 140.786 20.6019 140.786 21.5287V26.8891C140.786 27.3588 140.638 27.7157 140.347 27.9662C140.062 28.2167 139.702 28.3419 139.27 28.3419C138.835 28.3419 138.475 28.2167 138.193 27.9662C137.918 27.7157 137.78 27.3588 137.78 26.8891V17.5835C137.78 17.142 137.921 16.8007 138.206 16.5565C138.497 16.3154 138.86 16.1933 139.295 16.1933C139.712 16.1933 140.05 16.3123 140.31 16.544C140.576 16.7788 140.71 17.1076 140.71 17.5334V18.122C141.077 17.4802 141.568 16.9917 142.188 16.6567C142.805 16.3154 143.516 16.1432 144.318 16.1432C146.077 16.1432 147.254 16.8821 147.849 18.36C148.206 17.6837 148.729 17.1451 149.415 16.7444C150.107 16.3436 150.883 16.1432 151.744 16.1432Z" fill="#D9D9D9" />
      <path d="M160.648 28.342C160.213 28.342 159.852 28.2167 159.571 27.9662C159.295 27.7157 159.157 27.3588 159.157 26.8891V17.6086C159.157 17.1514 159.295 16.8007 159.571 16.5565C159.852 16.3154 160.213 16.1933 160.648 16.1933C161.08 16.1933 161.44 16.3154 161.725 16.5565C162.016 16.8007 162.163 17.1514 162.163 17.6086V26.8891C162.163 27.3588 162.016 27.7157 161.725 27.9662C161.44 28.2167 161.08 28.342 160.648 28.342ZM160.648 14.0516C160.103 14.0516 159.671 13.9076 159.345 13.6133C159.026 13.3127 158.869 12.9213 158.869 12.436C158.869 11.9601 159.026 11.5812 159.345 11.2963C159.671 11.0051 160.103 10.8579 160.648 10.8579C161.174 10.8579 161.6 11.0051 161.925 11.2963C162.257 11.5812 162.426 11.9601 162.426 12.436C162.426 12.9213 162.263 13.3127 161.938 13.6133C161.618 13.9076 161.189 14.0516 160.648 14.0516Z" fill="#D9D9D9" />
      <path d="M170.86 28.3795C169.689 28.3795 168.659 28.1353 167.767 27.6406C166.88 27.1396 166.195 26.4351 165.713 25.524C165.237 24.6065 164.999 23.542 164.999 22.3302C164.999 21.1122 165.249 20.0351 165.75 19.0989C166.257 18.1565 166.968 17.4301 167.879 16.9197C168.797 16.4031 169.849 16.1432 171.035 16.1432C171.662 16.1432 172.288 16.2309 172.914 16.4062C173.547 16.5815 174.107 16.8258 174.592 17.1326C175.1 17.4676 175.356 17.8935 175.356 18.4101C175.356 18.7608 175.272 19.0457 175.106 19.2618C174.937 19.4809 174.721 19.5874 174.455 19.5874C174.27 19.5874 174.082 19.5467 173.891 19.4622C173.697 19.3807 173.506 19.2837 173.315 19.1741C172.964 18.9674 172.626 18.8046 172.3 18.6856C171.981 18.5604 171.615 18.4978 171.198 18.4978C170.203 18.4978 169.439 18.8234 168.906 19.4747C168.371 20.1259 168.105 21.0621 168.105 22.2801C168.105 23.4825 168.371 24.4093 168.906 25.0606C169.439 25.7056 170.203 26.0249 171.198 26.0249C171.599 26.0249 171.953 25.9686 172.263 25.8496C172.579 25.7243 172.93 25.5584 173.315 25.3486C173.556 25.2077 173.766 25.1044 173.941 25.0355C174.116 24.9604 174.292 24.9228 174.467 24.9228C174.724 24.9228 174.943 25.0355 175.118 25.2609C175.294 25.4864 175.381 25.7682 175.381 26.1001C175.381 26.3756 175.322 26.6136 175.206 26.814C175.087 27.0144 174.893 27.196 174.617 27.3525C174.116 27.6719 173.534 27.9224 172.876 28.104C172.225 28.2856 171.552 28.3795 170.86 28.3795Z" fill="#D9D9D9" />
      <path d="M182.028 28.3795C180.274 28.3795 178.862 28.0382 177.795 27.3525C177.275 27.0457 177.018 26.6104 177.018 26.05C177.018 25.7337 177.106 25.4739 177.281 25.2735C177.463 25.0731 177.682 24.9729 177.932 24.9729C178.208 24.9729 178.584 25.0981 179.06 25.3486C179.576 25.5928 180.049 25.7807 180.475 25.9122C180.901 26.0375 181.439 26.1001 182.09 26.1001C182.767 26.1001 183.293 25.9874 183.669 25.7619C184.044 25.5365 184.232 25.2234 184.232 24.8226C184.232 24.5564 184.157 24.3435 184.007 24.1838C183.856 24.0179 183.584 23.8676 183.193 23.733C182.798 23.6015 182.203 23.4418 181.402 23.257C179.974 22.9752 178.95 22.5682 178.333 22.0422C177.713 21.5099 177.406 20.7772 177.406 19.8504C177.406 19.1428 177.613 18.504 178.033 17.9342C178.449 17.3674 179.022 16.9291 179.748 16.6191C180.481 16.3029 181.314 16.1432 182.241 16.1432C182.917 16.1432 183.562 16.2277 184.182 16.3937C184.808 16.5628 185.372 16.807 185.873 17.1326C186.38 17.452 186.637 17.8778 186.637 18.4101C186.637 18.7295 186.549 18.9956 186.374 19.2117C186.198 19.4308 185.979 19.5373 185.723 19.5373C185.547 19.5373 185.375 19.506 185.209 19.4371C185.04 19.362 184.827 19.2492 184.57 19.0989C184.101 18.8579 183.7 18.6794 183.368 18.5604C183.033 18.4445 182.616 18.3851 182.115 18.3851C181.521 18.3851 181.054 18.5072 180.713 18.7483C180.368 18.9831 180.199 19.3087 180.199 19.7252C180.199 20.1259 180.375 20.4328 180.725 20.6394C181.076 20.8492 181.755 21.059 182.767 21.2657C183.844 21.4911 184.686 21.751 185.297 22.0422C185.904 22.3271 186.339 22.6872 186.599 23.1193C186.865 23.5545 187 24.1056 187 24.7725C187 25.8684 186.543 26.7451 185.635 27.4026C184.733 28.0539 183.531 28.3795 182.028 28.3795Z" fill="#D9D9D9" />
    </svg>
  );

export default MainLogo;