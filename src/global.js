import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--body-light-regular-18: Poppins;

/* font sizes */
--body-light-regular-18-size: 18px;
--heading-1-bold-48-size: 48px;

/* Colors */
--white-color: #fff;
--light-color-1: #737b86;
--secondary-1: #f78719;
--primary-1: #1575a7;
--color-gray-100: rgba(4, 7, 47, 0.4);

/* Border radiuses */
--br-9xs: 4px;
--br-5xs: 8px;

}
`;
