import { primaryColor } from "../../constant/color";


const FaceBookSVG = ({ primary = false }: { primary?: boolean }) => (
  <svg
    width="9"
    height="15"
    viewBox="0 0 9 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.62891 8.31543H5.57812V14.4404H2.84375V8.31543H0.601562V5.7998H2.84375V3.8584C2.84375 1.6709 4.15625 0.44043 6.15234 0.44043C7.10938 0.44043 8.12109 0.631836 8.12109 0.631836V2.79199H7C5.90625 2.79199 5.57812 3.44824 5.57812 4.15918V5.7998H8.01172L7.62891 8.31543Z"
      fill={primary ? primaryColor : 'white'}
    />
  </svg>
);

export default FaceBookSVG;
