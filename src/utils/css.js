// these sizes are arbitrary and you can set them to whatever you wish
import { css } from "styled-components"

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 415
}

export const resetList = () => css`
  margin-left: 0 !important;
  padding-left: 0 !important;
  list-style-type: none !important;
`

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  /* eslint-disable-next-line */
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})