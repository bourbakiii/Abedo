<template>
  <div class="partner-modal modal">
    <h3 class="partner-modal__title title-normal" >
      {{partner.name}}
    </h3>
    <button
    type='button'
      @click.prevent="$store.commit('modals/close')"
      class="partner-modal__close"
    >
      <svg
        class="partner-modal__close__icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.89533 10.0005L0.229061 1.33421C-0.0760555 1.02909 -0.0760555 0.534404 0.229061 0.229326C0.534178 -0.0757519 1.02886 -0.075791 1.33394 0.229326L10.0003 8.89565L18.6665 0.229326C18.9716 -0.075791 19.4663 -0.075791 19.7714 0.229326C20.0765 0.534443 20.0765 1.02913 19.7714 1.33421L11.1051 10.0005L19.7714 18.6668C20.0765 18.9719 20.0765 19.4666 19.7714 19.7717C19.6189 19.9242 19.4189 20.0005 19.2189 20.0005C19.019 20.0005 18.8191 19.9242 18.6665 19.7717L10.0003 11.1054L1.33398 19.7717C1.18144 19.9242 0.981482 20.0005 0.781521 20.0005C0.58156 20.0005 0.381639 19.9242 0.229061 19.7717C-0.0760555 19.4666 -0.0760555 18.9719 0.229061 18.6668L8.89533 10.0005Z"
          fill="#A6A8A8"
        />
      </svg>
    </button>
    <div class="partner-modal__content">
      <img
        v-if='partner.image.length'
        :src="`${$axios.defaults.baseURL}${partner.image[0].modal}`"
        class="partner-modal__content__image"
      />
      <div v-if="partner.description" class="partner-modal__content__description">
        <p class="partner-modal__content__description__pre">
          Описание ресторана “{{partner.name}}”
        </p>
        <p class="partner-modal__content__description__text" >
          {{partner.description}}
        </p>
      </div>
      <div class="partner-modal__content__information">
        <div v-if="worktime" class="partner-modal__content__information__item">
          <div class="partner-modal__content__information__item__hood">
            <svg
              class="partner-modal__content__information__item__hood__icon"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1905_5416)">
                <path
                  d="M7.50029 2.25635C4.34632 2.25635 1.78027 4.82242 1.78027 7.97637C1.78027 11.1305 4.34635 13.6966 7.50029 13.6966C10.6544 13.6966 13.2203 11.1305 13.2203 7.97637C13.2203 4.82242 10.6543 2.25635 7.50029 2.25635ZM7.50029 12.6599C4.91799 12.6599 2.81712 10.5589 2.81712 7.97657C2.81712 5.39427 4.91796 3.29339 7.50029 3.29339C10.0826 3.29339 12.1835 5.39427 12.1835 7.97657C12.1835 10.559 10.0826 12.6599 7.50029 12.6599Z"
                  fill="#F95738"
                />
                <path
                  d="M9.09023 7.80356H7.70777V5.79895C7.70777 5.51261 7.47568 5.28052 7.18933 5.28052C6.90299 5.28052 6.6709 5.51261 6.6709 5.79895V8.32199C6.6709 8.60834 6.90299 8.84043 7.18933 8.84043H9.09026C9.3766 8.84043 9.60869 8.60834 9.60869 8.32199C9.60866 8.03565 9.37657 7.80356 9.09023 7.80356Z"
                  fill="#F95738"
                />
                <path
                  d="M4.56318 11.6868C4.35028 11.4952 4.02245 11.5126 3.83099 11.7253L2.27569 13.4534C2.08403 13.6662 2.10149 13.994 2.31421 14.1855C2.41323 14.2748 2.53731 14.3187 2.66088 14.3187C2.80276 14.3187 2.94412 14.2608 3.04642 14.147L4.60173 12.4189C4.79336 12.2061 4.7759 11.8783 4.56318 11.6868Z"
                  fill="#F95738"
                />
                <path
                  d="M12.7246 13.4535L11.1693 11.7254C10.9782 11.5125 10.6502 11.4952 10.4372 11.6869C10.2243 11.8784 10.2072 12.2062 10.3987 12.4189L11.954 14.147C12.0562 14.2607 12.1975 14.3186 12.3394 14.3186C12.4628 14.3186 12.5869 14.2747 12.6861 14.1855C12.899 13.9941 12.9161 13.6662 12.7246 13.4535Z"
                  fill="#F95738"
                />
                <path
                  d="M4.4755 1.43686C3.44536 0.428168 1.78485 0.42972 0.774085 1.44066C0.271177 1.94337 -0.00359723 2.60852 3.55659e-05 3.31358C0.00384414 4.01017 0.279995 4.66237 0.777865 5.15004C0.878792 5.24872 1.0096 5.29796 1.14059 5.29796C1.2733 5.29796 1.40602 5.24716 1.50712 5.14624L4.47945 2.1739C4.57727 2.07594 4.63188 1.94302 4.63118 1.80462C4.63051 1.66616 4.57449 1.5338 4.4755 1.43686ZM1.19745 3.98942C1.0936 3.78016 1.03811 3.5486 1.03691 3.30804C1.03465 2.88224 1.20158 2.47923 1.50712 2.1737C1.81195 1.86904 2.21496 1.71679 2.62019 1.71679C2.85711 1.71679 3.09492 1.76879 3.31403 1.87282L1.19745 3.98942Z"
                  fill="#F95738"
                />
                <path
                  d="M14.2264 1.4406C13.2155 0.42983 11.555 0.428102 10.5249 1.43679C10.426 1.53373 10.3699 1.66612 10.3691 1.80452C10.3684 1.94295 10.4232 2.07601 10.5211 2.17381L13.4934 5.14614C13.5945 5.24742 13.7272 5.29804 13.8599 5.29804C13.9909 5.29804 14.1219 5.2488 14.2226 5.14977C14.7207 4.66227 14.9968 4.0101 15.0005 3.31348C15.0041 2.60863 14.7291 1.94348 14.2264 1.4406ZM13.8031 3.98953L11.6865 1.87296C12.2806 1.59092 13.0104 1.691 13.4934 2.17398C13.7989 2.47952 13.9659 2.88232 13.9636 3.30832C13.9624 3.5487 13.9069 3.78044 13.8031 3.98953Z"
                  fill="#F95738"
                />
              </g>
              <rect x="0.5" y="0.5" width="14" height="14" stroke="#DDE2F2" />
              <defs>
                <clipPath id="clip0_1905_5416">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
            График работы:
          </div>
          <p
            class="partner-modal__content__information__item__content"
            
          >
           {{worktime}}
          </p>
        </div>
        <div v-if='partner.requisites.address' class="partner-modal__content__information__item">
          <div class="partner-modal__content__information__item__hood">
            <svg
              class="partner-modal__content__information__item__hood__icon"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1905_5395)">
                <path
                  d="M11.9599 4.36366C11.805 1.981 9.86035 0.114502 7.53275 0.114502C5.22457 0.114502 3.28014 1.97922 3.10579 4.36286C3.03636 5.40469 3.36528 6.48214 4.0357 7.40142L7.14026 11.5517C7.23275 11.6754 7.37818 11.7483 7.53275 11.7483C7.68732 11.7483 7.83257 11.6754 7.92524 11.5517L11.0293 7.40206C11.7014 6.50616 12.0318 5.42675 11.9599 4.36366ZM10.2447 6.81416L7.53275 10.4396L4.82426 6.81891C4.29273 6.09 4.02964 5.2408 4.08372 4.43116C4.20366 2.79112 5.52671 1.09472 7.53275 1.09472C9.55578 1.09472 10.8751 2.78898 10.9816 4.42855C11.0378 5.25844 10.7762 6.10567 10.2447 6.81416Z"
                  fill="#F95738"
                />
                <path
                  d="M7.50026 2.40186C6.5001 2.40186 5.68652 3.21543 5.68652 4.21559C5.68652 5.21576 6.5001 6.02933 7.50026 6.02933C8.50025 6.02933 9.31399 5.21576 9.31399 4.21559C9.31397 3.2154 8.50042 2.40186 7.50026 2.40186ZM7.50026 5.04891C7.0408 5.04891 6.66694 4.67505 6.66694 4.21559C6.66694 3.74828 7.03295 3.38227 7.50026 3.38227C7.96757 3.38227 8.33358 3.74828 8.33358 4.21559C8.33358 4.67505 7.95972 5.04891 7.50026 5.04891Z"
                  fill="#F95738"
                />
                <path
                  d="M14.9777 14.2493L13.2129 8.59559C13.1492 8.39101 12.9597 8.25146 12.7451 8.25146H9.46085V9.23185H12.3847L13.8434 13.905H1.17345L2.75366 9.23185H5.70268V8.25146H2.40204C2.19175 8.25146 2.00498 8.38544 1.93766 8.58448L0.0258952 14.2382C-0.024759 14.3879 -0.000237585 14.5527 0.0919009 14.681C0.184039 14.8093 0.332252 14.8854 0.490279 14.8854H14.5099C14.6657 14.8854 14.8125 14.8114 14.9048 14.6858C14.9971 14.5601 15.0242 14.398 14.9777 14.2493Z"
                  fill="#F95738"
                />
                <path
                  d="M5.61789 11.0358C5.5254 10.9379 5.3965 10.8823 5.26167 10.8823H1.60156V11.8627H4.74306L4.60891 14.2369L5.58766 14.2921L5.75105 11.4C5.75872 11.2655 5.71053 11.1338 5.61789 11.0358Z"
                  fill="#F95738"
                />
                <path
                  d="M13.2679 10.2451H10.4248C10.154 10.2451 9.93457 10.4645 9.93457 10.7353C9.93457 11.0061 10.154 11.2255 10.4248 11.2255H13.2679C13.5387 11.2255 13.7581 11.0061 13.7581 10.7353C13.7581 10.4645 13.5387 10.2451 13.2679 10.2451Z"
                  fill="#F95738"
                />
                <path
                  d="M7.58199 12.0098C7.31123 12.0098 7.0918 12.2292 7.0918 12.5V14.3954H8.07218V12.9902H13.9709V12.0098H7.58199Z"
                  fill="#F95738"
                />
              </g>
              <rect x="0.5" y="0.5" width="14" height="14" stroke="#DDE2F2" />
              <defs>
                <clipPath id="clip0_1905_5395">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Адрес:
          </div>
          <p
            class="partner-modal__content__information__item__content"
            
          >
            {{partner.requisites.address}}
          </p>
        </div>
        <div v-if="partner.contact_phone" class="partner-modal__content__information__item">
          <div class="partner-modal__content__information__item__hood">
            <svg
              class="partner-modal__content__information__item__hood__icon"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1905_5386)">
                <path
                  d="M11.8546 9.29201C11.5475 8.97226 11.1771 8.8013 10.7845 8.8013C10.3951 8.8013 10.0215 8.96909 9.70178 9.28884L8.70137 10.2861C8.61906 10.2418 8.53675 10.2006 8.4576 10.1595C8.34363 10.1025 8.23599 10.0486 8.14418 9.99166C7.20709 9.39648 6.35547 8.62085 5.53868 7.61727C5.14295 7.11707 4.87702 6.69601 4.6839 6.26862C4.9435 6.03118 5.18411 5.78424 5.41838 5.54681C5.50703 5.45816 5.59567 5.36635 5.68431 5.27771C6.34914 4.61288 6.34914 3.75177 5.68431 3.08694L4.82004 2.22266C4.72189 2.12452 4.62059 2.02321 4.52561 1.9219C4.33566 1.72562 4.13621 1.52301 3.93043 1.33306C3.62334 1.02913 3.2561 0.867676 2.86987 0.867676C2.48364 0.867676 2.11007 1.02913 1.79348 1.33306C1.79031 1.33622 1.79031 1.33622 1.78715 1.33939L0.710759 2.42528C0.30553 2.8305 0.0744228 3.32438 0.0237692 3.8974C-0.0522113 4.82183 0.220052 5.68294 0.428998 6.24646C0.941866 7.62994 1.708 8.91211 2.85088 10.2861C4.23752 11.9418 5.90592 13.2493 7.81177 14.1706C8.53991 14.5157 9.51183 14.9241 10.5977 14.9937C10.6642 14.9969 10.7338 15 10.7972 15C11.5285 15 12.1427 14.7373 12.6239 14.2149C12.627 14.2086 12.6334 14.2054 12.6365 14.1991C12.8011 13.9996 12.9911 13.8192 13.1905 13.6261C13.3267 13.4963 13.466 13.3601 13.6021 13.2177C13.9155 12.8916 14.0802 12.5117 14.0802 12.1223C14.0802 11.7297 13.9124 11.353 13.5926 11.0364L11.8546 9.29201ZM12.9879 12.6257C12.9848 12.6257 12.9848 12.6288 12.9879 12.6257C12.8645 12.7586 12.7378 12.8789 12.6017 13.0119C12.3959 13.2082 12.187 13.4139 11.9907 13.6451C11.6709 13.987 11.2942 14.1484 10.8003 14.1484C10.7528 14.1484 10.7022 14.1484 10.6547 14.1453C9.71444 14.0851 8.84067 13.7179 8.18534 13.4045C6.39346 12.537 4.82004 11.3055 3.51254 9.74473C2.43298 8.44356 1.71117 7.24054 1.23312 5.94887C0.938701 5.16057 0.831062 4.5464 0.878549 3.96705C0.910208 3.59664 1.05267 3.28955 1.31544 3.02679L2.39499 1.94723C2.55012 1.8016 2.71474 1.72246 2.8762 1.72246C3.07565 1.72246 3.23711 1.84276 3.33842 1.94407C3.34158 1.94723 3.34475 1.9504 3.34791 1.95356C3.54103 2.13402 3.72465 2.3208 3.91777 2.52025C4.01591 2.62156 4.11722 2.72287 4.21852 2.82734L5.0828 3.69162C5.41838 4.0272 5.41838 4.33745 5.0828 4.67303C4.99099 4.76484 4.90235 4.85665 4.81054 4.94529C4.54461 5.21756 4.29134 5.47083 4.01591 5.71776C4.00958 5.72409 4.00325 5.72726 4.00008 5.73359C3.72782 6.00585 3.77847 6.27179 3.83546 6.45224C3.83862 6.46174 3.84179 6.47123 3.84495 6.48073C4.06973 7.02526 4.38631 7.53813 4.86752 8.14914L4.87069 8.1523C5.74446 9.22869 6.66573 10.0676 7.68197 10.7103C7.81177 10.7926 7.94473 10.8591 8.07137 10.9224C8.18534 10.9794 8.29298 11.0332 8.38478 11.0902C8.39745 11.0965 8.41011 11.106 8.42278 11.1124C8.53041 11.1662 8.63172 11.1915 8.73619 11.1915C8.99896 11.1915 9.16358 11.0269 9.2174 10.9731L10.3001 9.89036C10.4078 9.78272 10.5787 9.65292 10.7782 9.65292C10.9745 9.65292 11.1359 9.77638 11.2341 9.88402C11.2372 9.88719 11.2372 9.88719 11.2404 9.89036L12.9848 11.6347C13.3109 11.9577 13.3109 12.2901 12.9879 12.6257Z"
                  fill="#F95738"
                />
                <path
                  d="M8.1057 3.56805C8.93516 3.70735 9.68863 4.09992 10.2901 4.70143C10.8917 5.30294 11.2811 6.05641 11.4235 6.88587C11.4583 7.09481 11.6388 7.24044 11.8446 7.24044C11.8699 7.24044 11.8921 7.23728 11.9174 7.23411C12.1517 7.19612 12.3068 6.97451 12.2688 6.74024C12.0978 5.73666 11.623 4.82173 10.898 4.09675C10.173 3.37177 9.25808 2.89689 8.2545 2.72594C8.02023 2.68795 7.80178 2.84307 7.76063 3.07418C7.71947 3.30529 7.87143 3.53006 8.1057 3.56805Z"
                  fill="#F95738"
                />
                <path
                  d="M14.9827 6.61682C14.7009 4.96424 13.9221 3.46046 12.7254 2.26377C11.5288 1.06708 10.025 0.288277 8.3724 0.00651579C8.1413 -0.0346403 7.92285 0.123652 7.8817 0.35476C7.8437 0.589033 7.99883 0.807477 8.23311 0.848633C9.70839 1.09873 11.0539 1.79839 12.1239 2.86528C13.194 3.93534 13.8905 5.28083 14.1406 6.75611C14.1754 6.96506 14.3559 7.11069 14.5616 7.11069C14.587 7.11069 14.6091 7.10752 14.6345 7.10436C14.8656 7.06953 15.0239 6.84792 14.9827 6.61682Z"
                  fill="#F95738"
                />
              </g>
              <rect x="0.5" y="0.5" width="14" height="14" stroke="#DDE2F2" />
              <defs>
                <clipPath id="clip0_1905_5386">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Телефон
          </div>
          <p
            class="partner-modal__content__information__item__content"
            
          >
            +7{{partner.contact_phone}}
          </p>
        </div>
        <div  v-if="partner.requisites.length" class="partner-modal__content__information__item">
          <div class="partner-modal__content__information__item__hood">
            <svg
              class="partner-modal__content__information__item__hood__icon"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1905_5364)">
                <path
                  d="M7.50029 2.25635C4.34632 2.25635 1.78027 4.82242 1.78027 7.97637C1.78027 11.1305 4.34635 13.6966 7.50029 13.6966C10.6544 13.6966 13.2203 11.1305 13.2203 7.97637C13.2203 4.82242 10.6543 2.25635 7.50029 2.25635ZM7.50029 12.6599C4.91799 12.6599 2.81712 10.5589 2.81712 7.97657C2.81712 5.39427 4.91796 3.29339 7.50029 3.29339C10.0826 3.29339 12.1835 5.39427 12.1835 7.97657C12.1835 10.559 10.0826 12.6599 7.50029 12.6599Z"
                  fill="#F95738"
                />
                <path
                  d="M9.09023 7.80356H7.70777V5.79895C7.70777 5.51261 7.47568 5.28052 7.18933 5.28052C6.90299 5.28052 6.6709 5.51261 6.6709 5.79895V8.32199C6.6709 8.60834 6.90299 8.84043 7.18933 8.84043H9.09026C9.3766 8.84043 9.60869 8.60834 9.60869 8.32199C9.60866 8.03565 9.37657 7.80356 9.09023 7.80356Z"
                  fill="#F95738"
                />
                <path
                  d="M4.56318 11.6868C4.35028 11.4952 4.02245 11.5126 3.83099 11.7253L2.27569 13.4534C2.08403 13.6662 2.10149 13.994 2.31421 14.1855C2.41323 14.2748 2.53731 14.3187 2.66088 14.3187C2.80276 14.3187 2.94412 14.2608 3.04642 14.147L4.60173 12.4189C4.79336 12.2061 4.7759 11.8783 4.56318 11.6868Z"
                  fill="#F95738"
                />
                <path
                  d="M12.7246 13.4535L11.1693 11.7254C10.9782 11.5125 10.6502 11.4952 10.4372 11.6869C10.2243 11.8784 10.2072 12.2062 10.3987 12.4189L11.954 14.147C12.0562 14.2607 12.1975 14.3186 12.3394 14.3186C12.4628 14.3186 12.5869 14.2747 12.6861 14.1855C12.899 13.9941 12.9161 13.6662 12.7246 13.4535Z"
                  fill="#F95738"
                />
                <path
                  d="M4.4755 1.43686C3.44536 0.428168 1.78485 0.42972 0.774085 1.44066C0.271177 1.94337 -0.00359723 2.60852 3.55659e-05 3.31358C0.00384414 4.01017 0.279995 4.66237 0.777865 5.15004C0.878792 5.24872 1.0096 5.29796 1.14059 5.29796C1.2733 5.29796 1.40602 5.24716 1.50712 5.14624L4.47945 2.1739C4.57727 2.07594 4.63188 1.94302 4.63118 1.80462C4.63051 1.66616 4.57449 1.5338 4.4755 1.43686ZM1.19745 3.98942C1.0936 3.78016 1.03811 3.5486 1.03691 3.30804C1.03465 2.88224 1.20158 2.47923 1.50712 2.1737C1.81195 1.86904 2.21496 1.71679 2.62019 1.71679C2.85711 1.71679 3.09492 1.76879 3.31403 1.87282L1.19745 3.98942Z"
                  fill="#F95738"
                />
                <path
                  d="M14.2264 1.4406C13.2155 0.42983 11.555 0.428102 10.5249 1.43679C10.426 1.53373 10.3699 1.66612 10.3691 1.80452C10.3684 1.94295 10.4232 2.07601 10.5211 2.17381L13.4934 5.14614C13.5945 5.24742 13.7272 5.29804 13.8599 5.29804C13.9909 5.29804 14.1219 5.2488 14.2226 5.14977C14.7207 4.66227 14.9968 4.0101 15.0005 3.31348C15.0041 2.60863 14.7291 1.94348 14.2264 1.4406ZM13.8031 3.98953L11.6865 1.87296C12.2806 1.59092 13.0104 1.691 13.4934 2.17398C13.7989 2.47952 13.9659 2.88232 13.9636 3.30832C13.9624 3.5487 13.9069 3.78044 13.8031 3.98953Z"
                  fill="#F95738"
                />
              </g>
              <rect x="0.5" y="0.5" width="14" height="14" stroke="#DDE2F2" />
              <defs>
                <clipPath id="clip0_1905_5364">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Реквизиты:
          </div>
          <div
         
            class="partner-modal__content__information__item__content__subcontent"
          >
            <div
             v-if="partner.requisites.name"
              class="partner-modal__content__information__item__content__subcontent__item"
            >
              <p
                class="partner-modal__content__information__item__content__subcontent__item__name"
              >
                Наименование:
              </p>
              <p
                class="partner-modal__content__information__item__content__subcontent__item__value"
                
              >
               {{partner.requisites.name}}
              </p>
            </div>
            <div
            v-if="partner.requisites.inn"
              class="partner-modal__content__information__item__content__subcontent__item"
            >
              <p
                class="partner-modal__content__information__item__content__subcontent__item__name"
              >
                ИНН:
              </p>
              <p
                class="partner-modal__content__information__item__content__subcontent__item__value"
                
              >
                {{partner.requisites.inn}}
              </p>
            </div>
            <div
            v-if="partner.requisites.ogrn"
              class="partner-modal__content__information__item__content__subcontent__item"
            >
              <p
                class="partner-modal__content__information__item__content__subcontent__item__name"
              >
                ОГРН:
              </p>
              <p
                class="partner-modal__content__information__item__content__subcontent__item__value"
                
              >
                {{partner.requisites.ogrn}}
              </p>
            </div>
            <div
            v-if="partner.requisites.address"
              class="partner-modal__content__information__item__content__subcontent__item"
            >
              <p
                class="partner-modal__content__information__item__content__subcontent__item__name"
              >
                Юр. адрес:
              </p>
              <p
                class="partner-modal__content__information__item__content__subcontent__item__value"
                
              >
                {{partner.requisites.address}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    partner(){
      return this.$store.state.modals.partner.partner;
    },
    worktime(){
      let result = "";
      let days ={ 
        1:"Пн",
        2:"Вт",
        3:"Ср",
        4:"Чт",
        5:"Пн",
        6:"Сб",
        7:"Вс"
      }
      return "Нужно будет спарсить";
    }
  }
}
</script>
<style lang="scss" scoped>
.partner-modal {
  background-color: $white;
  position: relative;
  width: 100%;
  max-width: 1028px;
  padding: 60px;
  @media screen and (max-width: $notebook) {
    padding: 45px;
  }
  @media screen and (max-width: $tablet) {
    height:100%;
      padding: 55px 24px 40px 24px;
    }
  &__title {
    margin-bottom: 30px;
     @media screen and (max-width: $notebook) {
       font-size: 25px;
     }
    @media screen and (max-width: $tablet) {
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
    }
  }
  &__close {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  &__content {
    @media screen and (max-width: $notebook) {
      padding: 30px;
    }
    @media screen and (max-width: $tablet) {
      padding: 0px;
      border:none;
    }
    padding: 50px;
    width: 100%;
    height: auto;
    border: 1px solid $dark_grey;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    &__image {
      width: 100%;
      height: auto;
      object-fit: contain;
      margin-bottom: 30px;
      @media screen and (max-width: $tablet) {
        margin-bottom: 36px;
      }
    }
    &__description {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      margin-bottom: 30px;
      width:100%; text-align: left;
      &__pre,
      &__text {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        @media screen and (max-width: $tablet) {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 17px;
        }
      }
    }
    &__information {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      &__item {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        margin-bottom: 32px;
        &:last-of-type {
          margin-bottom: 0px;
        }
        &__hood {
          margin-bottom: 15px;
          width: 100%;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 17px;
          color: $extra_dark_grey;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          @media screen and (max-width: $tablet) {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 17px;
          }
          &__icon {
            margin-right: 5px;
          }
        }
        &__content {
          font-family: "SF Pro Display";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          width: 100%;
          @media screen and (max-width: $tablet) {
            font-family: "SF Pro Display";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
          }
          &__subcontent {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            width: 100%;
            &__item {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: row;
              width: 100%;
              margin-bottom: 15px;
              &:last-of-type {
                margin-bottom: 0px;
              }
              &__name {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
                color: $extra_dark_grey;
                width: 125px;
                margin-right: 10px;
              }
              &__value {
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                line-height: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
