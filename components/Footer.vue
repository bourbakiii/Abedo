<template>
  <div class="footer-wrapper wrapper adaptive-non">
    <div class="footer">
      <div class="footer__logo-block">
        <NuxtLink to="/" class="footer__logo-block-logo">
          <img
            src="@/assets/images/abedo-logo.png"
            alt=""
            class="footer__logo-block-logo-logo"
          />
          <img
            src="@/assets/images/abedo-logo-text.png"
            alt=""
            class="footer__logo-block-logo-logo"
          />
        </NuxtLink>
        <p class="footer__logo-block-text">© {{ new Date().getFullYear() }}</p>
        <p class="footer__logo-block-text">Все права защищены</p>
      </div>
      <div class="footer__links">
        <NuxtLink to="#" class="footer__links-link"> О сервисе </NuxtLink>
        <NuxtLink to="#" class="footer__links-link">
          Добавить заведение
        </NuxtLink>
        <NuxtLink to="#" class="footer__links-link"> Новости сервиса </NuxtLink>
      </div>
      <div class="footer__social">
        <h3 class="footer__social-title">Узнай первым:</h3>
        <span class="footer__social-content">
          <NuxtLink class="footer__social-content-link" to="#">
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3517 5.9854L13.3436 5.97783C13.2155 5.85938 12.8232 5.47686 12.6909 5.30968C12.5357 5.10111 12.5715 4.96443 12.6879 4.75963C12.8349 4.50084 13.1296 4.10387 13.4415 3.6835C14.4403 2.33757 15.0852 1.4058 14.9524 0.743957L14.8809 0.390445L11.1921 0.39205C11.1792 0.426908 10.9867 1.27417 10.1744 2.71688C9.58536 3.76297 9.19901 4.0916 9.06294 4.14962L9.04188 4.1432C8.99759 4.08839 8.92023 3.94047 8.88841 3.55921C8.85523 3.15983 8.88464 2.67629 8.91313 2.20869C8.94644 1.66036 8.97516 1.18679 8.90638 0.847958L8.79434 0.295961C8.65896 0.274289 8.16331 0.0826843 6.78235 0.0681218C5.58679 0.0558527 5.23557 0.228882 5.0631 0.381386L4.49262 0.885797L5.21371 1.12889C5.48814 1.22142 5.57923 1.32817 5.65396 1.85735C5.70272 2.20226 5.72824 2.78189 5.67559 3.29938C5.59995 4.04137 5.41856 4.17943 5.40917 4.18677C5.37793 4.1761 5.113 4.05995 4.65306 3.08564C4.334 2.40992 4.05431 1.61059 3.84991 1.02695C3.616 0.358568 3.65811 0.500867 3.53944 0.18508L-0.0292969 0.184965L0.201645 0.783516C1.16444 3.28126 2.04781 5.23182 3.22999 6.6328C4.5361 8.18066 6.15934 8.99111 8.34585 8.99111H8.7853V8.5508C8.7853 8.13915 8.81929 7.84274 8.89219 7.618C8.93671 7.48109 8.99587 7.36792 9.05802 7.24924C9.15026 7.07449 9.24044 6.99961 9.28965 6.98849C9.33428 6.97828 9.41278 7.01108 9.49976 7.07609C9.74947 7.26265 9.94768 7.50781 10.1576 7.76741C10.4604 8.14202 10.7735 8.52924 11.2703 8.78277C11.5417 8.92128 12.0393 8.99123 12.3132 8.99123C12.3856 8.99123 14.9675 8.99111 14.9707 8.99111L14.9518 8.53268C14.9237 7.84721 14.3853 6.99009 13.3517 5.9854ZM12.3302 8.11049H12.3231C12.1343 8.11358 11.7739 8.05155 11.6691 7.99811C11.3388 7.82956 11.108 7.54393 10.8406 7.21323C10.6058 6.92279 10.3631 6.62248 10.0252 6.3701C9.75187 6.16588 9.50365 6.10614 9.30658 6.10614C9.22785 6.10614 9.15712 6.11566 9.09647 6.12942C8.8677 6.18102 8.54051 6.34591 8.28039 6.83885C8.20703 6.97909 8.12383 7.1379 8.05643 7.34567C7.98582 7.56308 7.94187 7.80467 7.92093 8.09856C6.27321 8.00476 4.98746 7.35163 3.90118 6.06429C2.89124 4.8673 2.09668 3.19308 1.25519 1.06525C1.31607 1.06525 2.84169 1.06548 2.93175 1.06548C2.95933 1.1431 2.98909 1.22819 3.02067 1.31831C3.24097 1.94794 3.54275 2.8101 3.89832 3.54533C4.40747 4.59819 4.87245 5.06774 5.40586 5.06774C5.67216 5.06774 5.911 4.95468 6.09651 4.7406C6.36098 4.43548 6.51456 3.93187 6.56606 3.20088C6.60669 2.62446 6.56892 2.05033 6.52429 1.73397C6.48744 1.47368 6.43491 1.20044 6.30674 0.955628C6.85296 0.930975 7.58436 0.969961 8.04773 1.03658C8.08984 1.26637 8.06238 1.71803 8.03583 2.15502C7.97163 3.21063 7.90536 4.29994 8.46304 4.80963C8.56111 4.8993 8.66514 4.94734 8.66811 4.94929L8.95193 5.03655C9.06145 5.00272 9.6958 5.32516 10.897 3.22485C11.2818 2.55188 11.6402 1.7764 11.8331 1.26992C12.2806 1.26901 13.805 1.27073 13.9841 1.27096C13.7304 1.83041 13.1291 2.62836 12.7362 3.158C12.3935 3.61964 12.0977 4.01833 11.9241 4.32379C11.6016 4.89127 11.6558 5.39706 11.9917 5.84322L11.997 5.8501C12.1844 6.08917 12.6473 6.53178 12.7434 6.62099C13.4389 7.29763 13.7741 7.78369 13.9337 8.11037H12.3302V8.11049Z"
                fill="white"
              />
            </svg>
          </NuxtLink>
          <NuxtLink class="footer__social-content-link" to="#">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1832_27)">
                <path
                  d="M12.0144 7.80254C11.6356 7.06317 10.7138 6.78254 9.81125 7.49192C9.8025 7.49879 8.90875 8.18442 7.50188 8.18442C6.095 8.18442 5.20125 7.49817 5.1925 7.49192C4.29375 6.78192 3.36438 7.06004 2.98813 7.80442C2.98688 7.80629 2.98625 7.80817 2.985 7.81067C2.42563 8.95504 3.34938 9.55129 4.0925 10.0307C4.55188 10.3263 5.13938 10.5494 5.845 10.6969L3.84188 12.7044C2.6325 13.9113 4.5275 15.8157 5.74938 14.6213L7.50813 12.8538C8.185 13.5319 8.81563 14.165 9.27063 14.6282C10.4769 15.8125 12.3844 13.9413 11.1819 12.7069C9.7475 11.2738 9.43875 10.9644 9.1675 10.6975C10.665 10.3769 12.7481 9.32629 12.0144 7.80254ZM8.24875 9.89942C7.925 9.74379 7.495 10.335 7.84875 10.7025L7.8525 10.7063C7.85313 10.7069 7.85438 10.7082 7.855 10.7088C7.85625 10.71 7.85688 10.7113 7.85813 10.7119C8.03813 10.8913 10.46 13.3107 10.5138 13.365C10.85 13.7107 10.2575 14.2819 9.93188 13.9644C9.35063 13.3732 8.42875 12.45 7.83813 11.8582C7.65563 11.675 7.3575 11.6738 7.17438 11.8582L5.08813 13.9544C4.7575 14.2775 4.16813 13.7007 4.50313 13.3663L7.15563 10.7088C7.15688 10.7075 7.15813 10.7063 7.15875 10.705C7.48813 10.3813 7.15563 9.78129 6.76813 9.89567C5.845 9.78754 5.09688 9.56192 4.59875 9.24192C3.63625 8.62004 3.68438 8.51067 3.82375 8.22504C4.22875 7.44942 4.94625 9.12192 7.50063 9.12192C9.25 9.12192 10.3475 8.26254 10.3906 8.22817C10.6756 8.00442 11.01 7.90004 11.1744 8.21942C11.3138 8.50879 11.3656 8.61692 10.4006 9.24379C9.74188 9.66317 8.81063 9.83254 8.24875 9.89942Z"
                  fill="white"
                />
                <path
                  d="M7.49938 6.24819C8.72063 6.24819 9.71375 5.25319 9.71375 4.03069C9.71375 2.80319 8.72063 1.80444 7.49938 1.80444C6.27875 1.80444 5.28563 2.80319 5.28563 4.03069C5.285 5.25319 6.27813 6.24819 7.49938 6.24819ZM7.49938 2.74194C8.20313 2.74194 8.77625 3.32007 8.77625 4.03069C8.77625 4.73632 8.20313 5.31069 7.49938 5.31069C6.79563 5.31069 6.2225 4.73632 6.2225 4.03007C6.2225 3.32007 6.795 2.74194 7.49938 2.74194Z"
                  fill="white"
                />
                <path
                  d="M7.49937 8.05188C9.7175 8.05188 11.5225 6.2475 11.5225 4.03C11.5219 1.80812 9.7175 0 7.49937 0C5.28125 0 3.47625 1.80812 3.47625 4.03C3.47625 6.2475 5.28062 8.05188 7.49937 8.05188ZM7.49937 0.9375C9.20062 0.9375 10.585 2.325 10.585 4.03C10.585 5.73063 9.20125 7.11438 7.49937 7.11438C5.7975 7.11438 4.41375 5.73063 4.41375 4.03C4.41375 2.325 5.7975 0.9375 7.49937 0.9375Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1832_27">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NuxtLink>
        </span>
      </div>
      <div class="footer__contacts">
        <p class="footer__contacts-text">Служба качества:</p>
        <a href="tel:+7%20(495)%20989-10-85" class="footer__contacts-phone"
          >+7 (495) 989-10-85</a
        >
      </div>
    </div>
    <div class="footer-wrapper__bottom-wrapper">
      <div class="footer-wrapper__bottom">
        <NuxtLink class="footer-wrapper__bottom-link" to="#"
          >Условия использования</NuxtLink
        >
        <NuxtLink class="footer-wrapper__bottom-link" to="#"
          >Политика конфиденциальности</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: $black;
  flex-direction: column !important;
  box-sizing: border-box;
  
  &__bottom-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid $lightblack;
    width: 100%;
    height: 71px;
    
  }
  &__bottom {
    width: 100%;
    max-width: $maxwidth;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    &-link {
      text-decoration: none;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: $white;
      white-space: nowrap;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.footer {
  width: 100%;
  max-width: $maxwidth;
  color: $white;
  height: 198px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding: 63px 0px;
  &__logo-block {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 185px;
    margin-right: 140px;
       @media screen and (max-width: $notebook) {
         margin-right:auto;
       }
    &-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      &-logo {
        &:first-of-type {
          width: 30px;
          height: 30px;
          object-fit: contain;
        }
        &:last-of-type {
          width: 77px;
          height: 24px;
          object-fit: contain;
        }
      }
    }
    &-text {
      margin: 0;
      color: $white;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
    }
  }
  &__links {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-right: 40px;
    &-link {
      color: $white;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__social {
    &-title {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      display: flex;
      align-items: center;
      color: $white;
      margin-bottom: 20px;
      margin-top: 0px;
          @media screen and (max-width: $notebook) {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
    }    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      &-link {
        margin-right: 5px;
        width: 45px;
        height: 45px;
        border-radius: 90px;
        border: 1px solid $lightblack;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;

        &:hover {
          border-color: $white;
        }
        &:last-of-type {
          margin-right: 0px;
        }
      }
    }

  }
  &__contacts {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: auto;
    &-text {
      color: $white;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 16px;
       @media screen and (max-width: $notebook) {
         font-size: 16px;
      line-height: 19px;
      margin-bottom: 10px;
       }
    }
    &-phone {
      text-decoration: none;
      color: $white;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: right;
       @media screen and (max-width: $notebook) {
         font-size: 17px;
      line-height: 20px;
       }
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>
