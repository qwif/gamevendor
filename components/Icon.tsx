import React from 'react'

interface IconProps extends React.ComponentProps<'svg'> {
  name: string
}

export const Icon = ({ name, ...props }: IconProps) => {
  switch (name) {
    case 'logo':
      return (
        <svg width="152" height="26" viewBox="0 0 152 26" fill="none" {...props}>
          <g clipPath="url(#clip0_33_2548)">
            <path
              d="M6.09226 6.2688C7.09201 6.2688 7.97461 6.47433 8.74005 6.8854C9.52111 7.28066 10.1303 7.77868 10.5677 8.37947V6.48224H13.2624V19.7629C13.2624 20.9645 13.0124 22.0316 12.5126 22.9645C12.0127 23.9131 11.2863 24.6561 10.3334 25.1937C9.39614 25.7312 8.27141 26 6.95923 26C5.20966 26 3.75689 25.5811 2.60093 24.7431C1.89547 24.2414 1.37618 23.6278 1.04307 22.9023C0.689485 22.1322 1.37304 21.3755 2.2204 21.3755V21.3755C2.84942 21.3755 3.37444 21.8184 3.76711 22.3098C3.97995 22.5762 4.24731 22.8102 4.56919 23.0119C5.2409 23.4388 6.03758 23.6522 6.95923 23.6522C8.03709 23.6522 8.90407 23.3202 9.56016 22.6562C10.2319 21.9921 10.5677 21.0277 10.5677 19.7629V17.5811C10.1147 18.1977 9.49767 18.7194 8.71662 19.1463C7.95118 19.5573 7.07639 19.7629 6.09226 19.7629C4.96753 19.7629 3.93654 19.4783 2.99927 18.9091C2.07762 18.3241 1.34342 17.5178 0.79668 16.4901C0.26556 15.4467 0 14.2688 0 12.9565C0 11.6443 0.26556 10.4822 0.79668 9.47038C1.34342 8.45852 2.07762 7.67591 2.99927 7.12255C3.93654 6.55338 4.96753 6.2688 6.09226 6.2688ZM10.5677 13.004C10.5677 12.1028 10.3803 11.3202 10.0054 10.6561C9.64607 9.99212 9.16963 9.48619 8.57603 9.13836C7.98242 8.79054 7.34195 8.61662 6.65462 8.61662C5.96729 8.61662 5.32682 8.79054 4.73322 9.13836C4.13961 9.47038 3.65535 9.9684 3.28045 10.6324C2.92116 11.2807 2.74152 12.0554 2.74152 12.9565C2.74152 13.8577 2.92116 14.6482 3.28045 15.3281C3.65535 16.0079 4.13961 16.5297 4.73322 16.8933C5.34244 17.2411 5.98291 17.415 6.65462 17.415C7.34195 17.415 7.98242 17.2411 8.57603 16.8933C9.16963 16.5455 9.64607 16.0396 10.0054 15.3755C10.3803 14.6957 10.5677 13.9052 10.5677 13.004Z"
              fill="#101828"
            />
            <path
              d="M15.8805 12.9565C15.8805 11.6443 16.1461 10.4822 16.6772 9.47038C17.2239 8.45852 17.9581 7.67591 18.8798 7.12255C19.817 6.55338 20.848 6.2688 21.9728 6.2688C22.9881 6.2688 23.8707 6.47433 24.6206 6.8854C25.386 7.28066 25.9952 7.77868 26.4482 8.37947V6.48224H29.1429V19.5494H26.4482V17.6048C25.9952 18.2214 25.3782 18.7352 24.5971 19.1463C23.8161 19.5573 22.9257 19.7629 21.9259 19.7629C20.8168 19.7629 19.8014 19.4783 18.8798 18.9091C17.9581 18.3241 17.2239 17.5178 16.6772 16.4901C16.1461 15.4467 15.8805 14.2688 15.8805 12.9565ZM26.4482 13.004C26.4482 12.1028 26.2608 11.3202 25.8859 10.6561C25.5266 9.99212 25.0501 9.48619 24.4565 9.13836C23.8629 8.79054 23.2225 8.61662 22.5351 8.61662C21.8478 8.61662 21.2073 8.79054 20.6137 9.13836C20.0201 9.47038 19.5359 9.9684 19.161 10.6324C18.8017 11.2807 18.622 12.0554 18.622 12.9565C18.622 13.8577 18.8017 14.6482 19.161 15.3281C19.5359 16.0079 20.0201 16.5297 20.6137 16.8933C21.223 17.2411 21.8634 17.415 22.5351 17.415C23.2225 17.415 23.8629 17.2411 24.4565 16.8933C25.0501 16.5455 25.5266 16.0396 25.8859 15.3755C26.2608 14.6957 26.4482 13.9052 26.4482 13.004Z"
              fill="#101828"
            />
            <path
              d="M48.2804 6.2688C49.2958 6.2688 50.2018 6.48224 50.9985 6.90911C51.8108 7.33599 52.4435 7.9684 52.8965 8.80635C53.3651 9.64429 53.5994 10.6562 53.5994 11.8419V19.5494H50.9516V12.2451C50.9516 11.0751 50.6626 10.1818 50.0847 9.56524C49.5067 8.93283 48.7178 8.61662 47.7181 8.61662C46.7183 8.61662 45.9216 8.93283 45.328 9.56524C44.75 10.1818 44.461 11.0751 44.461 12.2451V19.5494H41.8132V12.2451C41.8132 11.0751 41.5243 10.1818 40.9463 9.56524C40.3683 8.93283 39.5794 8.61662 38.5797 8.61662C37.5799 8.61662 36.7832 8.93283 36.1896 9.56524C35.6116 10.1818 35.3226 11.0751 35.3226 12.2451V19.5494H32.6514V6.48224H35.3226V7.97631C35.76 7.43876 36.3146 7.01979 36.9863 6.71939C37.658 6.419 38.3766 6.2688 39.142 6.2688C40.173 6.2688 41.0947 6.49014 41.907 6.93283C42.7193 7.37552 43.3441 8.01583 43.7815 8.85378C44.172 8.06326 44.7813 7.43876 45.6092 6.98026C46.4371 6.50595 47.3275 6.2688 48.2804 6.2688Z"
              fill="#101828"
            />
            <path
              d="M68.8315 12.6957C68.8315 13.1858 68.8003 13.6285 68.7378 14.0237H58.873C58.9511 15.0672 59.3339 15.9052 60.0212 16.5376C60.7085 17.17 61.5521 17.4862 62.5518 17.4862C63.989 17.4862 65.0043 16.8775 65.5979 15.6601H68.48C68.0895 16.8617 67.3788 17.8498 66.3478 18.6245C65.3324 19.3834 64.0671 19.7629 62.5518 19.7629C61.3177 19.7629 60.2086 19.4862 59.2245 18.9328C58.256 18.3637 57.4906 17.5731 56.9282 16.5613C56.3815 15.5336 56.1081 14.3478 56.1081 13.004C56.1081 11.6601 56.3736 10.4822 56.9048 9.47038C57.4515 8.44271 58.2091 7.6522 59.1776 7.09884C60.1618 6.54548 61.2865 6.2688 62.5518 6.2688C63.7703 6.2688 64.8559 6.53757 65.8088 7.07512C66.7617 7.61267 67.5037 8.37157 68.0349 9.3518C68.566 10.3162 68.8315 11.4309 68.8315 12.6957ZM66.0432 11.8419C66.0275 10.8459 65.6761 10.0475 64.9887 9.44666C64.3014 8.84587 63.45 8.54548 62.4347 8.54548C61.513 8.54548 60.7241 8.84587 60.0681 9.44666C59.412 10.0316 59.0214 10.8301 58.8965 11.8419H66.0432Z"
              fill="#101828"
            />
            <path
              d="M76.4515 17.1304L81.7375 3.36795C81.9315 2.86295 82.4166 2.52964 82.9575 2.52964V2.52964C83.884 2.52964 84.5163 3.4669 84.1694 4.32592L78.61 18.092C78.2543 18.9728 77.3996 19.5494 76.4497 19.5494V19.5494C75.4783 19.5494 74.6089 18.9468 74.268 18.0372L70.6086 8.27287C70.2838 7.40637 70.9244 6.48221 71.8498 6.48221V6.48221C72.416 6.48221 72.9196 6.84183 73.1035 7.37734L76.4515 17.1304Z"
              fill="#6941C6"
            />
            <path
              d="M96.7943 12.6957C96.7943 13.1858 96.7631 13.6285 96.7006 14.0237H86.8358C86.9139 15.0672 87.2967 15.9051 87.984 16.5375C88.6713 17.17 89.5149 17.4862 90.5146 17.4862C91.9518 17.4862 92.9671 16.8775 93.5608 15.6601H96.4428C96.0523 16.8617 95.3416 17.8498 94.3106 18.6245C93.2952 19.3834 92.0299 19.7628 90.5146 19.7628C89.2805 19.7628 88.1714 19.4862 87.1873 18.9328C86.2188 18.3636 85.4534 17.5731 84.891 16.5613C84.3443 15.5336 84.0709 14.3478 84.0709 13.004C84.0709 11.6601 84.3364 10.4822 84.8676 9.47036C85.4143 8.44269 86.1719 7.65217 87.1404 7.09881C88.1246 6.54545 89.2493 6.26877 90.5146 6.26877C91.7331 6.26877 92.8187 6.53755 93.7716 7.0751C94.7245 7.61265 95.4665 8.37154 95.9977 9.35178C96.5288 10.3162 96.7943 11.4308 96.7943 12.6957ZM94.006 11.8419C93.9903 10.8458 93.6389 10.0474 92.9515 9.44664C92.2642 8.84585 91.4128 8.54545 90.3975 8.54545C89.4758 8.54545 88.6869 8.84585 88.0309 9.44664C87.3748 10.0316 86.9842 10.83 86.8593 11.8419H94.006Z"
              fill="#6941C6"
            />
            <path
              d="M105.937 6.26877C106.952 6.26877 107.859 6.48221 108.655 6.90909C109.467 7.33597 110.1 7.96838 110.553 8.80632C111.006 9.64427 111.233 10.6561 111.233 11.8419V19.5494H108.585V12.2451C108.585 11.0751 108.296 10.1818 107.718 9.56522C107.14 8.93281 106.351 8.6166 105.351 8.6166C104.352 8.6166 103.555 8.93281 102.961 9.56522C102.383 10.1818 102.094 11.0751 102.094 12.2451V19.5494H99.4231V6.48221H102.094V7.97628C102.532 7.43873 103.086 7.01976 103.758 6.71937C104.445 6.41897 105.172 6.26877 105.937 6.26877Z"
              fill="#6941C6"
            />
            <path
              d="M113.75 12.9565C113.75 11.6443 114.015 10.4822 114.546 9.47036C115.093 8.4585 115.827 7.67589 116.749 7.12253C117.686 6.55336 118.725 6.26877 119.865 6.26877C120.709 6.26877 121.537 6.4585 122.349 6.83794C123.177 7.20158 123.833 7.6917 124.317 8.3083V2H127.012V19.5494H124.317V17.581C123.88 18.2134 123.271 18.7352 122.49 19.1462C121.724 19.5573 120.842 19.7628 119.842 19.7628C118.717 19.7628 117.686 19.4783 116.749 18.9091C115.827 18.3241 115.093 17.5178 114.546 16.4901C114.015 15.4466 113.75 14.2688 113.75 12.9565ZM124.317 13.004C124.317 12.1028 124.13 11.3202 123.755 10.6561C123.396 9.99209 122.919 9.48617 122.326 9.13834C121.732 8.79051 121.092 8.6166 120.404 8.6166C119.717 8.6166 119.076 8.79051 118.483 9.13834C117.889 9.47036 117.405 9.96838 117.03 10.6324C116.671 11.2806 116.491 12.0553 116.491 12.9565C116.491 13.8577 116.671 14.6482 117.03 15.3281C117.405 16.0079 117.889 16.5296 118.483 16.8933C119.092 17.2411 119.733 17.415 120.404 17.415C121.092 17.415 121.732 17.2411 122.326 16.8933C122.919 16.5455 123.396 16.0395 123.755 15.3755C124.13 14.6957 124.317 13.9051 124.317 13.004Z"
              fill="#6941C6"
            />
            <path
              d="M136.121 19.7628C134.902 19.7628 133.801 19.4862 132.817 18.9328C131.833 18.3636 131.059 17.5731 130.497 16.5613C129.935 15.5336 129.654 14.3478 129.654 13.004C129.654 11.6759 129.943 10.498 130.521 9.47036C131.098 8.44269 131.887 7.65217 132.887 7.09881C133.887 6.54545 135.004 6.26877 136.238 6.26877C137.472 6.26877 138.589 6.54545 139.589 7.09881C140.588 7.65217 141.377 8.44269 141.955 9.47036C142.533 10.498 142.822 11.6759 142.822 13.004C142.822 14.332 142.525 15.5099 141.932 16.5375C141.338 17.5652 140.526 18.3636 139.495 18.9328C138.479 19.4862 137.355 19.7628 136.121 19.7628ZM136.121 17.415C136.808 17.415 137.448 17.249 138.042 16.917C138.651 16.585 139.143 16.087 139.518 15.4229C139.893 14.7589 140.081 13.9526 140.081 13.004C140.081 12.0553 139.901 11.2569 139.542 10.6087C139.182 9.94466 138.706 9.44664 138.112 9.11462C137.519 8.78261 136.878 8.6166 136.191 8.6166C135.504 8.6166 134.863 8.78261 134.27 9.11462C133.692 9.44664 133.231 9.94466 132.887 10.6087C132.543 11.2569 132.372 12.0553 132.372 13.004C132.372 14.4111 132.723 15.502 133.426 16.2767C134.145 17.0356 135.043 17.415 136.121 17.415Z"
              fill="#6941C6"
            />
            <path
              d="M148.134 8.37945C148.525 7.71541 149.04 7.20158 149.681 6.83794C150.337 6.4585 151.11 6.26877 152 6.26877V9.06719H151.321C150.274 9.06719 149.477 9.33597 148.931 9.87352C148.4 10.4111 148.134 11.3439 148.134 12.6719V19.5494H145.463V6.48221H148.134V8.37945Z"
              fill="#6941C6"
            />
          </g>
          <defs>
            <clipPath id="clip0_33_2548">
              <rect width="152" height="26" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'arrow-right':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path d="M13 10L13.5657 10.5657C13.7157 10.4157 13.8 10.2122 13.8 10C13.8 9.78783 13.7157 9.58434 13.5657 9.43432L13 10ZM9.56569 5.43431C9.25327 5.1219 8.74673 5.1219 8.43432 5.43431C8.1219 5.74673 8.1219 6.25327 8.43432 6.56569L9.56569 5.43431ZM8.43431 13.4343C8.1219 13.7467 8.1219 14.2533 8.43431 14.5657C8.74673 14.8781 9.25327 14.8781 9.56569 14.5657L8.43431 13.4343ZM8.43432 6.56569L12.4343 10.5657L13.5657 9.43432L9.56569 5.43431L8.43432 6.56569ZM12.4343 9.43431L8.43431 13.4343L9.56569 14.5657L13.5657 10.5657L12.4343 9.43431Z" />
        </svg>
      )
    case 'pin':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path d="M16.5 8.54545L17.3 8.54545L16.5 8.54545ZM10 18L9.5541 18.6642C9.8238 18.8453 10.1762 18.8453 10.4459 18.6642L10 18ZM3.5 8.54545H2.7H3.5ZM10 2V2.8V2ZM15.7 8.54545C15.7 10.7714 14.2601 12.9407 12.6673 14.6336C11.887 15.4631 11.104 16.1424 10.5152 16.6145C10.2214 16.8501 9.97757 17.0328 9.80876 17.1556C9.72439 17.2169 9.65888 17.2632 9.61536 17.2936C9.5936 17.3088 9.57736 17.3199 9.56701 17.327C9.56184 17.3305 9.55814 17.3331 9.55598 17.3345C9.55489 17.3353 9.55419 17.3357 9.55387 17.3359C9.55372 17.3361 9.55366 17.3361 9.55369 17.3361C9.55371 17.3361 9.55381 17.336 9.55382 17.336C9.55395 17.3359 9.5541 17.3358 10 18C10.4459 18.6642 10.4461 18.6641 10.4463 18.6639C10.4464 18.6639 10.4467 18.6637 10.4469 18.6635C10.4473 18.6632 10.4479 18.6629 10.4485 18.6625C10.4498 18.6616 10.4514 18.6605 10.4534 18.6591C10.4575 18.6564 10.4632 18.6525 10.4703 18.6476C10.4845 18.6379 10.5048 18.624 10.5306 18.6059C10.5823 18.5699 10.6565 18.5175 10.7498 18.4495C10.9365 18.3138 11.2005 18.1158 11.5161 17.8628C12.146 17.3576 12.988 16.6278 13.8327 15.73C15.4899 13.9684 17.3 11.4104 17.3 8.54545H15.7ZM10 18C10.4459 17.3358 10.4461 17.3359 10.4462 17.336C10.4462 17.336 10.4463 17.3361 10.4463 17.3361C10.4463 17.3361 10.4463 17.3361 10.4461 17.3359C10.4458 17.3357 10.4451 17.3353 10.444 17.3345C10.4419 17.3331 10.4382 17.3305 10.433 17.327C10.4226 17.3199 10.4064 17.3088 10.3846 17.2936C10.3411 17.2632 10.2756 17.2169 10.1912 17.1556C10.0224 17.0328 9.77861 16.8501 9.48484 16.6145C8.89605 16.1424 8.11302 15.4631 7.33267 14.6336C5.73993 12.9407 4.3 10.7714 4.3 8.54545H2.7C2.7 11.4104 4.51007 13.9684 6.16733 15.73C7.01198 16.6278 7.85395 17.3576 8.48391 17.8628C8.79951 18.1158 9.06351 18.3138 9.25017 18.4495C9.34353 18.5175 9.41767 18.5699 9.46936 18.6059C9.49521 18.624 9.51547 18.6379 9.52972 18.6476C9.53685 18.6525 9.54247 18.6564 9.54655 18.6591C9.54859 18.6605 9.55025 18.6616 9.55151 18.6625C9.55213 18.6629 9.55267 18.6632 9.5531 18.6635C9.55332 18.6637 9.55357 18.6639 9.55367 18.6639C9.5539 18.6641 9.5541 18.6642 10 18ZM4.3 8.54545C4.3 7.01987 4.90188 5.55789 5.97146 4.48083L4.83615 3.35341C3.46776 4.73137 2.7 6.59911 2.7 8.54545L4.3 8.54545ZM5.97146 4.48083C7.04085 3.40396 8.49007 2.8 10 2.8V1.2C8.06211 1.2 6.20473 1.97526 4.83615 3.35341L5.97146 4.48083ZM10 2.8C11.5099 2.8 12.9591 3.40396 14.0285 4.48083L15.1638 3.35341C13.7953 1.97526 11.9379 1.2 10 1.2V2.8ZM14.0285 4.48083C15.0981 5.55789 15.7 7.01987 15.7 8.54545L17.3 8.54545C17.3 6.59911 16.5322 4.73137 15.1638 3.35341L14.0285 4.48083ZM11.3667 8.54545C11.3667 9.31388 10.7495 9.92727 10 9.92727V11.5273C11.6437 11.5273 12.9667 10.187 12.9667 8.54545H11.3667ZM10 9.92727C9.25046 9.92727 8.63333 9.31388 8.63333 8.54545H7.03333C7.03333 10.187 8.35631 11.5273 10 11.5273V9.92727ZM8.63333 8.54545C8.63333 7.77703 9.25046 7.16364 10 7.16364V5.56364C8.35631 5.56364 7.03333 6.90391 7.03333 8.54545H8.63333ZM10 7.16364C10.7495 7.16364 11.3667 7.77703 11.3667 8.54545H12.9667C12.9667 6.90391 11.6437 5.56364 10 5.56364V7.16364Z" />
        </svg>
      )
    case 'search':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path d="M17.4343 18.5657C17.7467 18.8781 18.2533 18.8781 18.5657 18.5657C18.8781 18.2533 18.8781 17.7467 18.5657 17.4343L17.4343 18.5657ZM14.699 13.5676C14.3866 13.2552 13.8801 13.2552 13.5676 13.5676C13.2552 13.8801 13.2552 14.3866 13.5676 14.699L14.699 13.5676ZM15.4222 9.11111C15.4222 12.5966 12.5966 15.4222 9.11111 15.4222V17.0222C13.4803 17.0222 17.0222 13.4803 17.0222 9.11111H15.4222ZM9.11111 15.4222C5.62558 15.4222 2.8 12.5966 2.8 9.11111H1.2C1.2 13.4803 4.74193 17.0222 9.11111 17.0222V15.4222ZM2.8 9.11111C2.8 5.62558 5.62558 2.8 9.11111 2.8V1.2C4.74193 1.2 1.2 4.74193 1.2 9.11111H2.8ZM9.11111 2.8C12.5966 2.8 15.4222 5.62558 15.4222 9.11111H17.0222C17.0222 4.74193 13.4803 1.2 9.11111 1.2V2.8ZM18.5657 17.4343L14.699 13.5676L13.5676 14.699L17.4343 18.5657L18.5657 17.4343Z" />
        </svg>
      )
    case 'user':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path d="M16.2 18C16.2 18.4418 16.5582 18.8 17 18.8C17.4418 18.8 17.8 18.4418 17.8 18H16.2ZM13.5 12.6667V11.8667V12.6667ZM6.5 12.6667V11.8667V12.6667ZM3 16.2222H2.2H3ZM2.2 18C2.2 18.4418 2.55817 18.8 3 18.8C3.44183 18.8 3.8 18.4418 3.8 18H2.2ZM17.8 18V16.2222H16.2V18H17.8ZM17.8 16.2222C17.8 15.0711 17.35 13.9646 16.545 13.1469L15.4048 14.2693C15.9125 14.7851 16.2 15.4874 16.2 16.2222H17.8ZM16.545 13.1469C15.7396 12.3287 14.6445 11.8667 13.5 11.8667V13.4667C14.212 13.4667 14.8974 13.7539 15.4048 14.2693L16.545 13.1469ZM13.5 11.8667H6.5V13.4667H13.5V11.8667ZM6.5 11.8667C5.35547 11.8667 4.26041 12.3287 3.455 13.1469L4.59525 14.2693C5.1026 13.7539 5.78802 13.4667 6.5 13.4667V11.8667ZM3.455 13.1469C2.65002 13.9646 2.2 15.0711 2.2 16.2222H3.8C3.8 15.4874 4.08747 14.7851 4.59525 14.2693L3.455 13.1469ZM2.2 16.2222V18H3.8V16.2222H2.2ZM12.7 5.55556C12.7 7.08933 11.4793 8.31111 10 8.31111V9.91111C12.3867 9.91111 14.3 7.94914 14.3 5.55556H12.7ZM10 8.31111C8.52066 8.31111 7.3 7.08933 7.3 5.55556H5.7C5.7 7.94914 7.61334 9.91111 10 9.91111V8.31111ZM7.3 5.55556C7.3 4.02178 8.52066 2.8 10 2.8V1.2C7.61334 1.2 5.7 3.16197 5.7 5.55556H7.3ZM10 2.8C11.4793 2.8 12.7 4.02178 12.7 5.55556H14.3C14.3 3.16197 12.3867 1.2 10 1.2V2.8Z" />
        </svg>
      )
    case 'cart':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path d="M1 1.2C0.558172 1.2 0.2 1.55817 0.2 2C0.2 2.44183 0.558172 2.8 1 2.8V1.2ZM4.27273 2L5.05357 1.82599C4.97205 1.46018 4.64751 1.2 4.27273 1.2V2ZM6.46545 11.8395L7.24981 11.6821C7.2487 11.6765 7.24753 11.671 7.2463 11.6655L6.46545 11.8395ZM8.10182 13.1429V12.3429C8.09676 12.3429 8.09171 12.3429 8.08665 12.343L8.10182 13.1429ZM16.0545 13.1429L16.0697 12.343C16.0647 12.3429 16.0596 12.3429 16.0545 12.3429V13.1429ZM17.6909 11.8395L16.9106 11.6632C16.9092 11.6694 16.9078 11.6757 16.9066 11.6821L17.6909 11.8395ZM19 6.04762L19.7803 6.22399C19.8339 5.98681 19.7767 5.73812 19.6249 5.54817C19.4731 5.35821 19.2432 5.24762 19 5.24762V6.04762ZM5.09091 5.24762C4.64908 5.24762 4.29091 5.60579 4.29091 6.04762C4.29091 6.48945 4.64908 6.84762 5.09091 6.84762V5.24762ZM7.56364 17.1905C7.56364 17.192 7.56349 17.1917 7.56374 17.1911C7.56374 17.1911 7.56318 17.1924 7.56133 17.1942C7.55947 17.196 7.55727 17.1975 7.55509 17.1984C7.55342 17.1991 7.55066 17.2 7.54545 17.2V18.8C8.43111 18.8 9.16364 18.0874 9.16364 17.1905H7.56364ZM7.54545 17.2C7.54025 17.2 7.53749 17.1991 7.53582 17.1984C7.53364 17.1975 7.53143 17.196 7.52958 17.1942C7.52773 17.1924 7.52717 17.1911 7.52717 17.1911C7.52742 17.1917 7.52727 17.192 7.52727 17.1905H5.92727C5.92727 18.0874 6.6598 18.8 7.54545 18.8V17.2ZM7.52727 17.1905C7.52727 17.1889 7.52742 17.1893 7.52717 17.1898C7.52717 17.1899 7.52773 17.1886 7.52958 17.1867C7.53143 17.1849 7.53364 17.1835 7.53582 17.1826C7.53749 17.1819 7.54025 17.181 7.54545 17.181V15.581C6.6598 15.581 5.92727 16.2936 5.92727 17.1905H7.52727ZM7.54545 17.181C7.55066 17.181 7.55342 17.1819 7.55509 17.1826C7.55727 17.1835 7.55948 17.1849 7.56133 17.1867C7.56318 17.1886 7.56374 17.1899 7.56374 17.1898C7.56349 17.1893 7.56364 17.1889 7.56364 17.1905H9.16364C9.16364 16.2936 8.43111 15.581 7.54545 15.581V17.181ZM16.5636 17.1905C16.5636 17.192 16.5635 17.1917 16.5637 17.1911C16.5637 17.1911 16.5632 17.1924 16.5613 17.1942C16.5595 17.196 16.5573 17.1975 16.5551 17.1984C16.5534 17.1991 16.5507 17.2 16.5455 17.2V18.8C17.4311 18.8 18.1636 18.0874 18.1636 17.1905H16.5636ZM16.5455 17.2C16.5403 17.2 16.5375 17.1991 16.5358 17.1984C16.5336 17.1975 16.5314 17.196 16.5296 17.1942C16.5277 17.1924 16.5272 17.1911 16.5272 17.1911C16.5274 17.1917 16.5273 17.192 16.5273 17.1905H14.9273C14.9273 18.0874 15.6598 18.8 16.5455 18.8V17.2ZM16.5273 17.1905C16.5273 17.1889 16.5274 17.1893 16.5272 17.1898C16.5272 17.1899 16.5277 17.1886 16.5296 17.1867C16.5314 17.1849 16.5336 17.1835 16.5358 17.1826C16.5375 17.1819 16.5403 17.181 16.5455 17.181V15.581C15.6598 15.581 14.9273 16.2936 14.9273 17.1905H16.5273ZM16.5455 17.181C16.5507 17.181 16.5534 17.1819 16.5551 17.1826C16.5573 17.1835 16.5595 17.1849 16.5613 17.1867C16.5632 17.1886 16.5637 17.1899 16.5637 17.1898C16.5635 17.1893 16.5636 17.1889 16.5636 17.1905H18.1636C18.1636 16.2936 17.4311 15.581 16.5455 15.581V17.181ZM1 2.8H4.27273V1.2H1V2.8ZM3.49188 2.17401L5.68461 12.0135L7.2463 11.6655L5.05357 1.82599L3.49188 2.17401ZM5.6811 11.997C5.79329 12.5558 6.10023 13.0561 6.54594 13.4111L7.54277 12.1595C7.39016 12.038 7.28725 11.8686 7.24981 11.6821L5.6811 11.997ZM6.54594 13.4111C6.99147 13.7659 7.54762 13.9535 8.11698 13.9427L8.08665 12.343C7.88807 12.3468 7.69556 12.2812 7.54277 12.1595L6.54594 13.4111ZM8.10182 13.9429H16.0545V12.3429H8.10182V13.9429ZM16.0394 13.9427C16.6087 13.9535 17.1649 13.7659 17.6104 13.4111L16.6136 12.1595C16.4608 12.2812 16.2683 12.3468 16.0697 12.343L16.0394 13.9427ZM17.6104 13.4111C18.0561 13.0561 18.3631 12.5558 18.4753 11.997L16.9066 11.6821C16.8691 11.8686 16.7662 12.038 16.6136 12.1595L17.6104 13.4111ZM18.4712 12.0159L19.7803 6.22399L18.2197 5.87125L16.9106 11.6632L18.4712 12.0159ZM19 5.24762H5.09091V6.84762H19V5.24762Z" />
        </svg>
      )
    case 'filter':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path d="M2 4.2C1.55817 4.2 1.2 4.55817 1.2 5C1.2 5.44183 1.55817 5.8 2 5.8V4.2ZM18 5.8C18.4418 5.8 18.8 5.44183 18.8 5C18.8 4.55817 18.4418 4.2 18 4.2V5.8ZM4.66667 9.2C4.22484 9.2 3.86667 9.55817 3.86667 10C3.86667 10.4418 4.22484 10.8 4.66667 10.8V9.2ZM15.3333 10.8C15.7752 10.8 16.1333 10.4418 16.1333 10C16.1333 9.55817 15.7752 9.2 15.3333 9.2V10.8ZM7.33333 14.2C6.89151 14.2 6.53333 14.5582 6.53333 15C6.53333 15.4418 6.89151 15.8 7.33333 15.8V14.2ZM12.6667 15.8C13.1085 15.8 13.4667 15.4418 13.4667 15C13.4667 14.5582 13.1085 14.2 12.6667 14.2V15.8ZM2 5.8H18V4.2H2V5.8ZM4.66667 10.8H15.3333V9.2H4.66667V10.8ZM7.33333 15.8H12.6667V14.2H7.33333V15.8Z" />
        </svg>
      )
    case 'close':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path d="M14.5657 6.56569C14.8781 6.25327 14.8781 5.74673 14.5657 5.43431C14.2533 5.1219 13.7467 5.1219 13.4343 5.43431L14.5657 6.56569ZM5.43431 13.4343C5.1219 13.7467 5.1219 14.2533 5.43431 14.5657C5.74673 14.8781 6.25327 14.8781 6.56569 14.5657L5.43431 13.4343ZM6.56569 5.43431C6.25327 5.1219 5.74673 5.1219 5.43431 5.43431C5.1219 5.74673 5.1219 6.25327 5.43431 6.56569L6.56569 5.43431ZM13.4343 14.5657C13.7467 14.8781 14.2533 14.8781 14.5657 14.5657C14.8781 14.2533 14.8781 13.7467 14.5657 13.4343L13.4343 14.5657ZM13.4343 5.43431L5.43431 13.4343L6.56569 14.5657L14.5657 6.56569L13.4343 5.43431ZM5.43431 6.56569L13.4343 14.5657L14.5657 13.4343L6.56569 5.43431L5.43431 6.56569Z" />
        </svg>
      )
    case 'dot':
      return (
        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" {...props}>
          <circle cx="3" cy="3" r="3" />
        </svg>
      )
    case 'plus-circle':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path d="M10.8 6.8C10.8 6.35817 10.4418 6 10 6C9.55817 6 9.2 6.35817 9.2 6.8H10.8ZM9.2 13.2C9.2 13.6418 9.55817 14 10 14C10.4418 14 10.8 13.6418 10.8 13.2H9.2ZM6.8 9.2C6.35817 9.2 6 9.55817 6 10C6 10.4418 6.35817 10.8 6.8 10.8V9.2ZM13.2 10.8C13.6418 10.8 14 10.4418 14 10C14 9.55817 13.6418 9.2 13.2 9.2V10.8ZM17.2 10C17.2 13.9765 13.9765 17.2 10 17.2V18.8C14.8601 18.8 18.8 14.8601 18.8 10H17.2ZM10 17.2C6.02355 17.2 2.8 13.9765 2.8 10H1.2C1.2 14.8601 5.13989 18.8 10 18.8V17.2ZM2.8 10C2.8 6.02355 6.02355 2.8 10 2.8V1.2C5.13989 1.2 1.2 5.13989 1.2 10H2.8ZM10 2.8C13.9765 2.8 17.2 6.02355 17.2 10H18.8C18.8 5.13989 14.8601 1.2 10 1.2V2.8ZM9.2 6.8V13.2H10.8V6.8H9.2ZM6.8 10.8H13.2V9.2H6.8V10.8Z" />
        </svg>
      )
    case 'star':
      return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" {...props}>
          <path d="M6 0L8.03951 3.37501L12 4.20163L9.3 7.11411L9.7082 11L6 9.42501L2.2918 11L2.7 7.11411L0 4.20163L3.96049 3.37501L6 0Z" />
        </svg>
      )
    default:
      return <>Icon not found</>
  }
}
