
const JordanSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    height="24"
    viewBox="0 0 32 24"
    width="32"
  >
    <mask
      id="a"
      height="24"
      maskUnits="userSpaceOnUse"
      width="32"
      x="0"
      y="0"
    >
      <path
        d="m0 0h32v24h-32z"
        fill="#fff"
      />
    </mask>
    <mask
      id="b"
      height="24"
      maskUnits="userSpaceOnUse"
      width="32"
      x="0"
      y="0"
    >
      <path
        clip-rule="evenodd"
        d="m0 0v24h32v-24z"
        fill="#fff"
        fill-rule="evenodd"
      />
    </mask>
    <mask
      id="c"
      height="24"
      maskUnits="userSpaceOnUse"
      width="20"
      x="0"
      y="0"
    >
      <path
        clip-rule="evenodd"
        d="m0 0v24l20-12z"
        fill="#fff"
        fill-rule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <g
        clip-rule="evenodd"
        fill-rule="evenodd"
      >
        <path
          d="m0 0v24h32v-24z"
          fill="#f7fcff"
        />
        <g mask="url(#b)">
          <path
            d="m0 0v8h32v-8z"
            fill="#272727"
          />
          <path
            d="m0 16v8h32v-8z"
            fill="#093"
          />
        </g>
        <path
          d="m0 0v24l20-12z"
          fill="#e31d1c"
        />
      </g>
      <g mask="url(#c)">
        <path
          clip-rule="evenodd"
          d="m9.00179 13.8707-1.87067 1.1293.42669-2.2038-1.55781-1.6493 2.10936-.0891.89243-2.0578.89244 2.0578h2.10577l-1.5542 1.7384.4679 2.2038z"
          fill="#f7fcff"
          fill-rule="evenodd"
        />
      </g>
    </g>
  </svg>
);

export default JordanSVG;
