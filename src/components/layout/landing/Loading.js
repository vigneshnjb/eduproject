
import React from 'react';
import './Loading.css';

export const Loading = (props) => {
  return (
    <div className="loadingMain">
      <svg id="logo" width="672" height="547" viewBox="0 0 672 547" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M147.652 10.664V53.256H102.156V182H48.432V53.256H3.42004V10.664H147.652Z" stroke="white" stroke-width="5"/>
      <path d="M257.813 44.544C273.462 44.544 285.643 49.7873 294.355 60.274C303.228 70.7607 307.665 84.958 307.665 102.866V182H254.183V109.642C254.183 103.189 252.408 98.1067 248.859 94.396C245.471 90.524 240.873 88.588 235.065 88.588C229.096 88.588 224.417 90.524 221.029 94.396C217.641 98.1067 215.947 103.189 215.947 109.642V182H162.223V2.92H215.947V66.324C220.142 59.8707 225.708 54.6273 232.645 50.594C239.744 46.5607 248.133 44.544 257.813 44.544Z" stroke="white" stroke-width="5"/>
      <path d="M463.093 112.546C463.093 116.257 462.851 119.806 462.367 123.194H375.973C376.78 134.971 381.701 140.86 390.735 140.86C396.543 140.86 400.738 138.198 403.319 132.874H460.189C458.253 142.554 454.139 151.266 447.847 159.01C441.717 166.593 433.892 172.643 424.373 177.16C415.016 181.516 404.691 183.694 393.397 183.694C379.845 183.694 367.745 180.871 357.097 175.224C346.611 169.577 338.383 161.511 332.413 151.024C326.605 140.376 323.701 127.953 323.701 113.756C323.701 99.5587 326.605 87.2167 332.413 76.73C338.383 66.082 346.611 57.9347 357.097 52.288C367.745 46.6413 379.845 43.818 393.397 43.818C406.949 43.818 418.969 46.6413 429.455 52.288C440.103 57.7733 448.331 65.6787 454.139 76.004C460.109 86.3293 463.093 98.51 463.093 112.546ZM408.643 99.72C408.643 95.2027 407.191 91.8147 404.287 89.556C401.383 87.136 397.753 85.926 393.397 85.926C383.879 85.926 378.313 90.524 376.699 99.72H408.643Z" stroke="white" stroke-width="5"/>
      <path d="M80.134 363.694C59.6447 363.694 42.7047 358.935 29.314 349.416C16.0847 339.736 8.90538 325.619 7.77604 307.066H64.888C65.6947 316.907 70.0507 321.828 77.956 321.828C80.86 321.828 83.2801 321.183 85.216 319.892C87.3134 318.44 88.3621 316.262 88.3621 313.358C88.3621 309.325 86.1841 306.098 81.828 303.678C77.472 301.097 70.696 298.193 61.5 294.966C50.5294 291.094 41.414 287.303 34.154 283.592C27.0554 279.881 20.9247 274.477 15.762 267.378C10.5994 260.279 8.09871 251.164 8.26004 240.032C8.26004 228.9 11.0834 219.462 16.73 211.718C22.538 203.813 30.3627 197.843 40.204 193.81C50.2067 189.777 61.4194 187.76 73.8421 187.76C94.8154 187.76 111.433 192.6 123.694 202.28C136.117 211.96 142.651 225.593 143.296 243.178H85.458C85.2967 238.338 84.0867 234.869 81.828 232.772C79.5694 230.675 76.8267 229.626 73.6001 229.626C71.3414 229.626 69.4861 230.433 68.034 232.046C66.582 233.498 65.856 235.595 65.856 238.338C65.856 242.21 67.9534 245.437 72.148 248.018C76.5041 250.438 83.3607 253.423 92.718 256.972C103.527 261.005 112.401 264.877 119.338 268.588C126.437 272.299 132.567 277.461 137.73 284.076C142.893 290.691 145.474 298.999 145.474 309.002C145.474 319.489 142.893 328.927 137.73 337.316C132.567 345.544 125.065 351.997 115.224 356.676C105.383 361.355 93.686 363.694 80.134 363.694Z" stroke="white" stroke-width="5"/>
      <path d="M229.206 363.694C215.493 363.694 203.151 360.871 192.18 355.224C181.209 349.577 172.578 341.511 166.286 331.024C160.155 320.376 157.09 307.953 157.09 293.756C157.09 279.559 160.155 267.217 166.286 256.73C172.578 246.082 181.209 237.935 192.18 232.288C203.151 226.641 215.493 223.818 229.206 223.818C242.919 223.818 255.261 226.641 266.232 232.288C277.203 237.935 285.753 246.082 291.884 256.73C298.176 267.217 301.322 279.559 301.322 293.756C301.322 307.953 298.176 320.376 291.884 331.024C285.753 341.511 277.203 349.577 266.232 355.224C255.261 360.871 242.919 363.694 229.206 363.694ZM229.206 317.23C234.207 317.23 238.402 315.294 241.79 311.422C245.178 307.389 246.872 301.5 246.872 293.756C246.872 286.012 245.178 280.204 241.79 276.332C238.402 272.299 234.207 270.282 229.206 270.282C224.205 270.282 220.01 272.299 216.622 276.332C213.234 280.204 211.54 286.012 211.54 293.756C211.54 301.5 213.153 307.389 216.38 311.422C219.768 315.294 224.043 317.23 229.206 317.23Z" stroke="white" stroke-width="5"/>
      <path d="M371.924 182.92V362H318.2V182.92H371.924Z" stroke="white" stroke-width="5"/>
      <path d="M528.32 292.546C528.32 296.257 528.078 299.806 527.594 303.194H441.2C442.007 314.971 446.927 320.86 455.962 320.86C461.77 320.86 465.965 318.198 468.546 312.874H525.416C523.48 322.554 519.366 331.266 513.074 339.01C506.943 346.593 499.119 352.643 489.6 357.16C480.243 361.516 469.917 363.694 458.624 363.694C445.072 363.694 432.972 360.871 422.324 355.224C411.837 349.577 403.609 341.511 397.64 331.024C391.832 320.376 388.928 307.953 388.928 293.756C388.928 279.559 391.832 267.217 397.64 256.73C403.609 246.082 411.837 237.935 422.324 232.288C432.972 226.641 445.072 223.818 458.624 223.818C472.176 223.818 484.195 226.641 494.682 232.288C505.33 237.773 513.558 245.679 519.366 256.004C525.335 266.329 528.32 278.51 528.32 292.546ZM473.87 279.72C473.87 275.203 472.418 271.815 469.514 269.556C466.61 267.136 462.98 265.926 458.624 265.926C449.105 265.926 443.539 270.524 441.926 279.72H473.87Z" stroke="white" stroke-width="5"/>
      <path d="M80.134 543.694C59.6447 543.694 42.7047 538.935 29.314 529.416C16.0847 519.736 8.90538 505.619 7.77604 487.066H64.888C65.6947 496.907 70.0507 501.828 77.956 501.828C80.86 501.828 83.2801 501.183 85.216 499.892C87.3134 498.44 88.3621 496.262 88.3621 493.358C88.3621 489.325 86.1841 486.098 81.828 483.678C77.472 481.097 70.696 478.193 61.5 474.966C50.5294 471.094 41.414 467.303 34.154 463.592C27.0554 459.881 20.9247 454.477 15.762 447.378C10.5994 440.279 8.09871 431.164 8.26004 420.032C8.26004 408.9 11.0834 399.462 16.73 391.718C22.538 383.813 30.3627 377.843 40.204 373.81C50.2067 369.777 61.4194 367.76 73.8421 367.76C94.8154 367.76 111.433 372.6 123.694 382.28C136.117 391.96 142.651 405.593 143.296 423.178H85.458C85.2967 418.338 84.0867 414.869 81.828 412.772C79.5694 410.675 76.8267 409.626 73.6001 409.626C71.3414 409.626 69.4861 410.433 68.034 412.046C66.582 413.498 65.856 415.595 65.856 418.338C65.856 422.21 67.9534 425.437 72.148 428.018C76.5041 430.438 83.3607 433.423 92.718 436.972C103.527 441.005 112.401 444.877 119.338 448.588C126.437 452.299 132.567 457.461 137.73 464.076C142.893 470.691 145.474 478.999 145.474 489.002C145.474 499.489 142.893 508.927 137.73 517.316C132.567 525.544 125.065 531.997 115.224 536.676C105.383 541.355 93.686 543.694 80.134 543.694Z" stroke="white" stroke-width="5"/>
      <path d="M249.292 496.262V542H228.964C191.535 542 172.82 523.366 172.82 486.098V450.282H155.88V405.512H172.82V372.6H226.544V405.512H248.808V450.282H226.544V487.066C226.544 490.293 227.27 492.632 228.722 494.084C230.335 495.536 232.917 496.262 236.466 496.262H249.292Z" stroke="white" stroke-width="5"/>
      <path d="M334.608 543.694C320.895 543.694 308.553 540.871 297.582 535.224C286.612 529.577 277.98 521.511 271.688 511.024C265.558 500.376 262.492 487.953 262.492 473.756C262.492 459.559 265.558 447.217 271.688 436.73C277.98 426.082 286.612 417.935 297.582 412.288C308.553 406.641 320.895 403.818 334.608 403.818C348.322 403.818 360.664 406.641 371.634 412.288C382.605 417.935 391.156 426.082 397.286 436.73C403.578 447.217 406.724 459.559 406.724 473.756C406.724 487.953 403.578 500.376 397.286 511.024C391.156 521.511 382.605 529.577 371.634 535.224C360.664 540.871 348.322 543.694 334.608 543.694ZM334.608 497.23C339.61 497.23 343.804 495.294 347.192 491.422C350.58 487.389 352.274 481.5 352.274 473.756C352.274 466.012 350.58 460.204 347.192 456.332C343.804 452.299 339.61 450.282 334.608 450.282C329.607 450.282 325.412 452.299 322.024 456.332C318.636 460.204 316.942 466.012 316.942 473.756C316.942 481.5 318.556 487.389 321.782 491.422C325.17 495.294 329.446 497.23 334.608 497.23Z" stroke="white" stroke-width="5"/>
      <path d="M477.326 430.68C482.811 422.775 489.507 416.483 497.412 411.804C505.317 406.964 513.545 404.544 522.096 404.544V461.898H506.85C496.686 461.898 489.184 463.673 484.344 467.222C479.665 470.771 477.326 477.063 477.326 486.098V542H423.602V405.512H477.326V430.68Z" stroke="white" stroke-width="5"/>
      <path d="M668.699 472.546C668.699 476.257 668.457 479.806 667.973 483.194H581.579C582.386 494.971 587.306 500.86 596.341 500.86C602.149 500.86 606.344 498.198 608.925 492.874H665.795C663.859 502.554 659.745 511.266 653.453 519.01C647.322 526.593 639.498 532.643 629.979 537.16C620.622 541.516 610.296 543.694 599.003 543.694C585.451 543.694 573.351 540.871 562.703 535.224C552.216 529.577 543.988 521.511 538.019 511.024C532.211 500.376 529.307 487.953 529.307 473.756C529.307 459.559 532.211 447.217 538.019 436.73C543.988 426.082 552.216 417.935 562.703 412.288C573.351 406.641 585.451 403.818 599.003 403.818C612.555 403.818 624.574 406.641 635.061 412.288C645.709 417.773 653.937 425.679 659.745 436.004C665.714 446.329 668.699 458.51 668.699 472.546ZM614.249 459.72C614.249 455.203 612.797 451.815 609.893 449.556C606.989 447.136 603.359 445.926 599.003 445.926C589.484 445.926 583.918 450.524 582.305 459.72H614.249Z" stroke="white" stroke-width="5"/>
      </svg>
  </div>
  )
}

export default Loading;
