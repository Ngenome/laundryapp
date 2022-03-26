import * as React from "react";
import Svg, {
  Path,
  Rect,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

const SvgComponent = (props) => (
  <Svg
    width={420}
    height={420}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M387.494 74.047h-126.99v104.358c0 9.818 7.972 17.789 17.789 17.789h91.412c9.818 0 17.789-7.971 17.789-17.789V74.047Zm-63.495 17.295c-21.561 0-39.067 17.505-39.067 39.067s17.506 39.067 39.067 39.067c21.562 0 39.068-17.505 39.068-39.067s-17.506-39.067-39.068-39.067Z"
      fill="#26ABFF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M324.002 96.849c18.522 0 33.56 15.037 33.56 33.56 0 18.522-15.038 33.56-33.56 33.56-18.523 0-33.56-15.038-33.56-33.56 0-18.523 15.037-33.56 33.56-33.56Zm29.356 33.56c0 16.202-13.154 29.356-29.356 29.356-16.203 0-29.357-13.154-29.357-29.356 0 0 8.201-3.605 11.715-4.102 3.113-.44 6.47-.104 9.366 1.122 4.25 1.8 10.729 8.839 16.138 9.678 8.692 1.347 14.155-10.792 21.494-6.698Z"
      fill="url(#a)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M260.504 70.238h126.991V59.595c0-9.818-7.973-17.789-17.789-17.789h-91.413c-9.818 0-17.789 7.97-17.789 17.789v10.643Zm88.982-18.494a4.325 4.325 0 0 1 4.323 4.323 4.322 4.322 0 1 1-4.323-4.323Zm16.339 0a4.326 4.326 0 0 1 4.323 4.323 4.322 4.322 0 1 1-4.323-4.323Zm-54.23 2.58h-38.477v3.397h38.477v-3.396Z"
      fill="url(#b)"
    />
    <Path
      d="M102.701 303.691c61.33 59.375 158.748 58.238 217.588-2.541 17.851-18.438 30.1-40.247 36.791-63.343-5.128 28.892-18.593 56.558-40.473 79.159-58.84 60.778-156.258 61.916-217.59 2.541-42.724-41.362-56.665-101.179-41.3-154.213-8.663 48.802 6.46 101.102 44.984 138.397Z"
      fill="#F1FFF0"
    />
    <Path fill="url(#c)" d="M58 231h66v5H58z" />
    <Path
      d="M68.263 116.036c-1.356.444-8.042 4.074-13.144 5.939-2.875 1.562-7.415 3.61-12.729 12.608.998 3.424 6.238 10.054 11.603 11.521a14.921 14.921 0 0 1 2.318-1.837c8.547 21.998 2.593 32.743-1 49.619 8.409 3.839 18.618 5.019 25.482 4.87 6.863-.149 18.597-2.062 25.245-5.972-4.322-16.703-10.736-27.18-3.153-49.528.582.327 1.514.951 2.396 1.734 5.296-1.698 10.244-8.549 11.092-12.013-5.7-8.759-10.324-10.608-13.264-12.044-5.179-1.641-12.016-4.978-13.39-5.363-1.056.322-5.292 2.441-10.641 2.557v-.002l-.036.002h-.037v.002c-5.348.116-9.672-1.818-10.742-2.093Z"
      fill="url(#d)"
    />
    <Path
      d="M75.365 124.917h20.364l.24-.24h.24l.239-.24.24-.239v-.479l.24-.24-.24-.239V123h-.24l-.48-.24-.239-.239-.958-.24-1.198-.719-1.677-.479-1.917-.958-2.156-.958-1.917-1.198-1.677-1.198h-.24l-.239-.24-.48-.239-.718-.24-.719-.24-.958-.239h-1.198l-.958-.24H78l-.48-5.989h4.553l.48.958.718.958.719.959.958.958.719.719.958.958.719.719 1.198.719 1.198.958 1.677.958 1.677.719 1.916.958 1.917.719 1.438.719.958.239.48.24.239.24v.239l.239.24.24.239.239.24v.24l.24.239v.479l-.24.479v.48l-.239.239-.479.479-.48.24-.479.24-.479.239H74.646l.719-1.437Z"
      fill="#47B9FF"
    />
    <Path
      d="M80.875 102.635v-.479l-.24-.479-.24-.479-.239-.479-.479-.24-.24-.239h-.718l-.24-.24-.719.24h-.718l-.48.239-.24.24-.478.479-.24.479v.479l-.24.479v.24l.24.24v.479l.24.239v.24l.24.239.239.24.24.24.24.239.478.719.24.719.24.958.239 1.198v1.437"
      stroke="#47B9FF"
      strokeWidth={0.479}
    />
    <Path
      d="M78.48 114.615h.718l.24-.24h.718l.24-.24h.24l.239-.239h.24l.479-.24.24-.239h.239v-.24l.24-.24v-.479l.24-.239-.24-.24v-.479l-.24-.24-.24-.239-.24-.24-.478-.239H77.52"
      stroke="#fff"
      strokeWidth={0.479}
    />
    <Path
      d="M80.635 124.917H60.271l-.48-.24h-.239l-.24-.24-.24-.239V123h.48v-.24h.24l.479-.239.719-.24 1.437-.719 1.677-.479 1.917-.958 1.916-.958 1.917-1.198 1.917-1.198.24-.24.479-.239.718-.24.72-.24 1.197-.239h.958l1.198-.24H78l.48-5.989h-4.793l-.479.958-.718.958-.72.959-.718.958-.719.719-.958.958-.958.719-.72.719-1.197.958-1.677.958-1.917.719-1.916.958-1.678.719-1.437.719-1.198.239-.24.24-.479.24-.24.239-.239.24-.24.239v.24l-.239.24v1.197l.24.48.24.239.239.479.479.24.48.24.478.239h24.198l-.719-1.437Z"
      fill="#47B9FF"
    />
    <Path
      d="M78.48 114.615h-.96l-.478-.24h-.72l-.239-.24h-.479l-.24-.239h-.239l-.24-.24-.24-.239h-.239l-.24-.24v-.24l-.239-.479v-.479l.24-.479.24-.24.239-.239.24-.24.239-.239h4.073"
      stroke="#fff"
      strokeWidth={0.479}
    />
    <Path
      d="M68.263 116.036c-1.356.444-8.042 4.074-13.144 5.939-2.875 1.562-7.415 3.611-12.729 12.608.998 3.424 6.238 10.054 11.603 11.521a14.921 14.921 0 0 1 2.318-1.837c8.547 21.998 2.593 32.743-1 49.619 8.409 3.839 18.618 5.019 25.482 4.87 6.863-.149 18.597-2.062 25.245-5.972-4.322-16.703-10.736-27.18-3.153-49.528.582.327 1.514.951 2.396 1.734 5.296-1.698 10.244-8.549 11.092-12.013-5.7-8.759-10.324-10.608-13.264-12.044-5.179-1.641-12.016-4.978-13.39-5.363-1.388 3.062-9.811 17.793-10.346 17.804-.535.012-10.765-14.715-11.11-17.338Z"
      fill="url(#e)"
    />
    <Path
      d="m128.956 155.477-97.728-6.515c3.413 9.262 8.181 38.676 11.341 60.553 14.999-.255 49.519-.613 67.608 0 18.089.613 16.096 0 18.779-6.132 1.661-6.771 5.672-23.225 8.431-34.875 2.76-11.651-4.471-13.542-8.431-13.031Z"
      fill="#4F00F5"
    />
    <Path
      d="M9 138.614c5.62-1.405 17.936-1.303 22.228 10.348m0 0 97.728 6.515c3.96-.511 11.191 1.38 8.432 13.031-2.76 11.65-6.771 28.104-8.432 34.875-2.683 6.132-.69 6.745-18.779 6.132-18.09-.613-52.61-.255-67.608 0m-11.34-60.553c3.412 9.262 8.18 38.676 11.34 60.553m2.073 14.947c-.55-4.165-1.258-9.305-2.073-14.947"
      stroke="url(#f)"
      strokeWidth={3.832}
    />
    <Rect
      x={51.924}
      y={169.426}
      width={60.553}
      height={4.599}
      rx={2.299}
      fill="#fff"
    />
    <Rect
      x={52.283}
      y={187.145}
      width={60.553}
      height={5.738}
      rx={2.869}
      transform="rotate(6.41 52.283 187.145)"
      fill="#fff"
    />
    <Path
      d="M145.071 21.184c-3.801 7.214-6.571 279.52-6.571 279.52h23.355l19.326-159.643c7.602 3.801 5.819 4.939 27.298 11.268 16.521 4.171 37.788 2.97 57.813-9.367 55.527-34.209 31.837-103.744-3.389-121.777C237.54 8.2 211.5 7 194.5 8c-17 1-45.628 5.971-49.429 13.184Z"
      fill="url(#g)"
      stroke="#fff"
      strokeWidth={3.801}
    />
    <Path
      d="M284.518 88.507c-1.224 14.27-10.319 27.537-23.514 36.891-13.188 9.348-30.369 14.709-47.57 13.234-16.998-1.458-26.81-11.475-32.115-24.829-5.329-13.416-6.072-30.146-4.823-44.718 1.25-14.568 4.69-26.247 11.7-33.942 6.96-7.64 17.609-11.528 33.719-10.147 38.3 3.285 65.058 34.88 62.603 63.511Z"
      stroke="#fff"
      strokeWidth={2}
    />
    <Path
      d="M153.922 236.047c-50.173 15.204-113.397-15.204-140.638-38.01-4.434 2.534-13.303 22.806 7.603 45.612 29.312 31.978 95.058 115.265 178.647 100.727 87.424-15.204 199.554-115.931 209.057-167.245-43.712-7.602-102.628-13.303-157.743 13.304-25.672 12.394-34.209 26.607-96.926 45.612Z"
      fill="url(#h)"
    />
    <Ellipse cx={292.717} cy={213.12} rx={17.105} ry={20.906} fill="url(#i)" />
    <Ellipse cx={247.105} cy={221.265} rx={17.105} ry={20.906} fill="url(#j)" />
    <Ellipse cx={269.911} cy={202.26} rx={17.105} ry={20.906} fill="url(#k)" />
    <Ellipse cx={287.015} cy={175.653} rx={26.607} ry={24.707} fill="url(#l)" />
    <Ellipse cx={321.224} cy={190.857} rx={26.607} ry={24.707} fill="url(#m)" />
    <Ellipse cx={344.031} cy={179.454} rx={19.005} ry={17.648} fill="url(#n)" />
    <Ellipse cx={370.638} cy={172.395} rx={19.005} ry={17.648} fill="url(#o)" />
    <Ellipse cx={393.444} cy={176.196} rx={11.403} ry={10.589} fill="url(#p)" />
    <Ellipse cx={288.916} cy={206.061} rx={9.503} ry={11.614} fill="url(#q)" />
    <Ellipse cx={309.821} cy={142.53} rx={3.801} ry={3.53} fill="url(#r)" />
    <Ellipse cx={292.717} cy={216.921} rx={17.105} ry={20.906} fill="url(#s)" />
    <Ellipse cx={247.105} cy={225.066} rx={17.105} ry={20.906} fill="url(#t)" />
    <Ellipse cx={269.911} cy={206.061} rx={17.105} ry={20.906} fill="url(#u)" />
    <Ellipse cx={287.015} cy={179.454} rx={26.607} ry={24.707} fill="url(#v)" />
    <Ellipse cx={321.224} cy={194.658} rx={26.607} ry={24.707} fill="url(#w)" />
    <Ellipse cx={344.031} cy={183.255} rx={19.005} ry={17.648} fill="url(#x)" />
    <Ellipse cx={370.638} cy={176.196} rx={19.005} ry={17.648} fill="url(#y)" />
    <Ellipse cx={393.444} cy={179.997} rx={11.403} ry={10.589} fill="url(#z)" />
    <Ellipse cx={288.916} cy={209.862} rx={9.503} ry={11.614} fill="url(#A)" />
    <Ellipse cx={309.821} cy={146.331} rx={3.801} ry={3.53} fill="url(#B)" />
    <Path
      d="M298.361 190.435c-79.384 15.121-191.952 152.041-290.778 24.707-20.906 108.329 155.842 190.051 256.569 150.14 97.079-38.465 155.842-125.434 138.737-174.847 28.508 0-24.707-15.204-104.528 0Z"
      fill="#0F3B64"
    />
    <Path
      d="m312.357 298.256-105.47-147.692c-15.387-3.064-20.188-8.342-26.607-11.403 17.236 50.739 63.08 157.817 95.473 172.612 32.394 14.796 37.9-2.846 36.604-13.517Z"
      fill="url(#C)"
      stroke="#fff"
      strokeWidth={2}
    />
    <Path
      d="M145 234.222c0 6.176-5.318 11.278-12 11.278s-12-5.102-12-11.278c0-6.175 5.318-11.278 12-11.278s12 5.103 12 11.278Z"
      fill="#4340CE"
      stroke="#fff"
      strokeWidth={2}
    />
    <Path
      d="M191.1 370.728c119.1-.256 215.445-95.669 215.192-213.111-.076-35.629-9.034-69.192-24.804-98.656 22.97 33.721 36.409 74.29 36.503 117.962.252 117.442-96.092 212.856-215.193 213.112-82.968.178-183.514-68.338-188.766-116.571 33.81 51.187 102.257 97.425 177.068 97.264Z"
      fill="#6651E8"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={290.442}
        y1={-10.543}
        x2={354.537}
        y2={-9.917}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02FFFF" />
        <Stop offset={1} stopColor="#374BFF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={260.504}
        y1={-3.683}
        x2={381.554}
        y2={1.602}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02FFFF" />
        <Stop offset={1} stopColor="#374BFF" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={58}
        y1={223}
        x2={120}
        y2={231}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02FFFF" />
        <Stop offset={1} stopColor="#374BFF" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={39.118}
        y1={-16.117}
        x2={109.782}
        y2={-17.035}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02FFFF" />
        <Stop offset={1} stopColor="#374BFF" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={104.677}
        y1={196.726}
        x2={56.027}
        y2={119.12}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#308BF6" />
        <Stop offset={1} stopColor="#8CFEF7" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={73.5}
        y1={138}
        x2={73.5}
        y2={224.462}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00FFF0" />
        <Stop offset={1} stopColor="#0500FE" stopOpacity={0.75} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={207.788}
        y1={47.936}
        x2={222.992}
        y2={300.704}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0357A5" />
        <Stop offset={1} stopColor="#00C2FF" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={-11.422}
        y1={211.341}
        x2={448.501}
        y2={194.236}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0FF" />
        <Stop offset={1} stopColor="#5200FF" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={273.009}
        y1={206.848}
        x2={311.216}
        y2={205.04}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={227.397}
        y1={214.993}
        x2={265.604}
        y2={213.185}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={250.203}
        y1={195.988}
        x2={288.41}
        y2={194.18}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={256.359}
        y1={168.241}
        x2={315.694}
        y2={164.544}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={290.568}
        y1={183.445}
        x2={349.904}
        y2={179.748}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={322.133}
        y1={174.159}
        x2={364.516}
        y2={171.519}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={348.741}
        y1={167.1}
        x2={391.123}
        y2={164.46}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={380.306}
        y1={173.019}
        x2={405.735}
        y2={171.435}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="q"
        x1={277.967}
        y1={202.577}
        x2={299.193}
        y2={201.572}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="r"
        x1={305.442}
        y1={141.471}
        x2={313.918}
        y2={140.943}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4976EA" />
        <Stop offset={1} stopColor="#10E2FF" />
      </LinearGradient>
      <LinearGradient
        id="s"
        x1={292.717}
        y1={196.015}
        x2={292.717}
        y2={237.827}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="t"
        x1={247.105}
        y1={204.16}
        x2={247.105}
        y2={245.972}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="u"
        x1={269.911}
        y1={185.155}
        x2={269.911}
        y2={226.966}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="v"
        x1={287.015}
        y1={154.747}
        x2={287.015}
        y2={204.16}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="w"
        x1={321.224}
        y1={169.951}
        x2={321.224}
        y2={219.364}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="x"
        x1={344.031}
        y1={165.607}
        x2={344.031}
        y2={200.902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="y"
        x1={370.638}
        y1={158.548}
        x2={370.638}
        y2={193.843}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="z"
        x1={393.444}
        y1={169.408}
        x2={393.444}
        y2={190.585}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="A"
        x1={288.916}
        y1={198.248}
        x2={288.916}
        y2={221.476}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="B"
        x1={309.821}
        y1={142.801}
        x2={309.821}
        y2={149.86}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9F9F9" />
      </LinearGradient>
      <LinearGradient
        id="C"
        x1={193.054}
        y1={147.63}
        x2={272.31}
        y2={303.611}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1360A7" />
        <Stop offset={1} stopColor="#0084FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
