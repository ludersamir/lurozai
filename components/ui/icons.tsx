'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function IconNextChat({
  className,
  inverted,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
  const id = React.useId()

  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={`gradient-${id}-1`}
          x1="10.6889"
          y1="10.3556"
          x2="13.8445"
          y2="14.2667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={`gradient-${id}-2`}
          x1="11.7555"
          y1="4.8"
          x2="11.7376"
          y2="9.50002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <path
        d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
        fill={inverted ? 'black' : 'white'}
        stroke={inverted ? 'black' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="mask0_91_2047"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={16}
      >
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
      </mask>
      <g mask="url(#mask0_91_2047)">
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
        <path
          d="M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z"
          fill={`url(#gradient-${id}-1)`}
        />
        <rect
          x="11.2222"
          y="4.8"
          width="1.06667"
          height="6.4"
          fill={`url(#gradient-${id}-2)`}
        />
      </g>
    </svg>
  )
}

function IconOpenAI({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <title>OpenAI icon</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

function IconVercel({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-label="Vercel logomark"
      role="img"
      viewBox="0 0 74 64"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

function IconGitHub({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconMetamask({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 240">
      <title>Metamask</title>
      <path fill="#E17726" d="M250.066 0L140.219 81.279l20.427-47.9z"/><path fill="#E27625" d="m6.191.096l89.181 33.289l19.396 48.528zM205.86 172.858l48.551.924l-16.968 57.642l-59.243-16.311zm-155.721 0l27.557 42.255l-59.143 16.312l-16.865-57.643z"/><path fill="#E27625" d="m112.131 69.552l1.984 64.083l-59.371-2.701l16.888-25.478l.214-.245zm31.123-.715l40.9 36.376l.212.244l16.888 25.478l-59.358 2.7zM79.435 173.044l32.418 25.259l-37.658 18.181zm97.136-.004l5.131 43.445l-37.553-18.184z"/><path fill="#D5BFB2" d="m144.978 195.922l38.107 18.452l-35.447 16.846l.368-11.134zm-33.967.008l-2.909 23.974l.239 11.303l-35.53-16.833z"/><path fill="#233447" d="m100.007 141.999l9.958 20.928l-33.903-9.932zm55.985.002l24.058 10.994l-34.014 9.929z"/><path fill="#CC6228" d="m82.026 172.83l-5.48 45.04l-29.373-44.055zm91.95.001l34.854.984l-29.483 44.057zm28.136-44.444l-25.365 25.851l-19.557-8.937l-9.363 19.684l-6.138-33.849zm-148.237 0l60.435 2.749l-6.139 33.849l-9.365-19.681l-19.453 8.935z"/><path fill="#E27525" d="m52.166 123.082l28.698 29.121l.994 28.749zm151.697-.052l-29.746 57.973l1.12-28.8zm-90.956 1.826l1.155 7.27l2.854 18.111l-1.835 55.625l-8.675-44.685l-.003-.462zm30.171-.101l6.521 35.96l-.003.462l-8.697 44.797l-.344-11.205l-1.357-44.862z"/><path fill="#F5841F" d="m177.788 151.046l-.971 24.978l-30.274 23.587l-6.12-4.324l6.86-35.335zm-99.471 0l30.399 8.906l6.86 35.335l-6.12 4.324l-30.275-23.589z"/><path fill="#C0AC9D" d="m67.018 208.858l38.732 18.352l-.164-7.837l3.241-2.845h38.334l3.358 2.835l-.248 7.831l38.487-18.29l-18.728 15.476l-22.645 15.553h-38.869l-22.63-15.617z"/><path fill="#161616" d="m142.204 193.479l5.476 3.869l3.209 25.604l-4.644-3.921h-36.476l-4.556 4l3.104-25.681l5.478-3.871z"/><path fill="#763E1A" d="M242.814 2.25L256 41.807l-8.235 39.997l5.864 4.523l-7.935 6.054l5.964 4.606l-7.897 7.191l4.848 3.511l-12.866 15.026l-52.77-15.365l-.457-.245l-38.027-32.078zm-229.628 0l98.326 72.777l-38.028 32.078l-.457.245l-52.77 15.365l-12.866-15.026l4.844-3.508l-7.892-7.194l5.952-4.601l-8.054-6.071l6.085-4.526L0 41.809z"/><path fill="#F5841F" d="m180.392 103.99l55.913 16.279l18.165 55.986h-47.924l-33.02.416l24.014-46.808zm-104.784 0l-17.151 25.873l24.017 46.808l-33.005-.416H1.631l18.063-55.985zm87.776-70.878l-15.639 42.239l-3.319 57.06l-1.27 17.885l-.101 45.688h-30.111l-.098-45.602l-1.274-17.986l-3.32-57.045l-15.637-42.239z"/>
    </svg>
  )
}

function IconSolana({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
      <svg className="my-5" width="323" height="48" viewBox="0 0 323 48" fill="none"><g clip-path="url(#clip0_174_4480)"><path d="M54.2702 37.8403L45.4102 47.3503C45.2151 47.5546 44.9809 47.7175 44.7214 47.8292C44.462 47.9409 44.1826 47.9991 43.9002 48.0003H1.90017C1.69388 48.0146 1.48823 47.9646 1.31155 47.8571C1.13486 47.7497 0.995814 47.5901 0.913564 47.4004C0.831315 47.2107 0.809902 47.0001 0.852276 46.7977C0.894649 46.5954 0.998725 46.4111 1.15017 46.2703L10.0002 36.7703C10.1933 36.5627 10.4269 36.3971 10.6867 36.2835C10.9464 36.17 11.2267 36.111 11.5102 36.1103H53.5102C53.7173 36.0937 53.9245 36.142 54.1029 36.2485C54.2813 36.3551 54.4221 36.5146 54.5057 36.7049C54.5893 36.8951 54.6115 37.1067 54.5693 37.3102C54.5271 37.5137 54.4225 37.699 54.2702 37.8403ZM45.4102 18.7103C45.2166 18.5041 44.9826 18.3399 44.7228 18.2281C44.463 18.1163 44.183 18.0592 43.9002 18.0603H1.90017C1.69388 18.046 1.48823 18.096 1.31155 18.2034C1.13486 18.3108 0.995814 18.4704 0.913564 18.6601C0.831315 18.8498 0.809902 19.0604 0.852276 19.2628C0.894649 19.4652 0.998725 19.6495 1.15017 19.7903L10.0002 29.2903C10.1938 29.4965 10.4277 29.6606 10.6875 29.7724C10.9473 29.8843 11.2273 29.9414 11.5102 29.9403H53.5102C53.7173 29.9569 53.9245 29.9086 54.1029 29.802C54.2813 29.6955 54.4221 29.536 54.5057 29.3457C54.5893 29.1554 54.6115 28.9438 54.5693 28.7404C54.5271 28.5369 54.4225 28.3516 54.2702 28.2103L45.4102 18.7103ZM1.90017 11.8903H43.9002C44.1836 11.8895 44.4639 11.8305 44.7237 11.717C44.9834 11.6035 45.2171 11.4378 45.4102 11.2303L54.2702 1.73028C54.4225 1.58896 54.5271 1.40368 54.5693 1.2002C54.6115 0.996712 54.5893 0.785131 54.5057 0.594865C54.4221 0.404598 54.2813 0.245099 54.1029 0.138539C53.9245 0.031979 53.7173 -0.0163481 53.5102 0.000275547H11.5102C11.2277 0.00149481 10.9484 0.059689 10.6889 0.171375C10.4295 0.283062 10.1952 0.445944 10.0002 0.650276L1.15017 10.1603C0.998725 10.3011 0.894649 10.4854 0.852276 10.6877C0.809902 10.8901 0.831315 11.1007 0.913564 11.2904C0.995814 11.4801 1.13486 11.6397 1.31155 11.7471C1.48823 11.8546 1.69388 11.9046 1.90017 11.8903Z" fill="url(#paint0_linear_174_4480)"></path><path d="M105.47 20.3001H83V12.9001H111.31V5.50011H82.93C81.9595 5.49484 80.9975 5.68078 80.0989 6.0473C79.2003 6.41383 78.3827 6.95376 77.6927 7.63627C77.0028 8.31879 76.454 9.13051 76.0778 10.0251C75.7016 10.9197 75.5052 11.8796 75.5 12.8501V20.3501C75.5052 21.3206 75.7016 22.2805 76.0778 23.1751C76.454 24.0697 77.0028 24.8814 77.6927 25.5639C78.3827 26.2465 79.2003 26.7864 80.0989 27.1529C80.9975 27.5194 81.9595 27.7054 82.93 27.7001H105.42V35.1001H76V42.5001H105.44C106.41 42.5054 107.372 42.3194 108.27 41.9527C109.168 41.5861 109.985 41.046 110.674 40.3633C111.363 39.6807 111.911 38.8689 112.286 37.9744C112.661 37.0798 112.856 36.1201 112.86 35.1501V27.6501C112.852 25.6963 112.07 23.8253 110.684 22.4475C109.299 21.0697 107.424 20.2974 105.47 20.3001Z" fill="white"></path><path d="M149 5.50024H126.45C125.478 5.49234 124.514 5.67632 123.613 6.04166C122.712 6.407 121.892 6.94652 121.2 7.62929C120.508 8.31207 119.957 9.12469 119.58 10.0206C119.202 10.9165 119.005 11.8781 119 12.8502V35.1502C119.005 36.1207 119.202 37.0807 119.578 37.9752C119.954 38.8698 120.503 39.6816 121.193 40.3641C121.883 41.0466 122.7 41.5865 123.599 41.953C124.498 42.3196 125.46 42.5055 126.43 42.5002H149C149.97 42.5055 150.932 42.3195 151.83 41.9529C152.728 41.5862 153.545 41.0461 154.234 40.3635C154.923 39.6808 155.471 38.869 155.846 37.9745C156.221 37.08 156.416 36.1202 156.42 35.1502V12.8502C156.416 11.8802 156.221 10.9205 155.846 10.026C155.471 9.13146 154.923 8.31966 154.234 7.63701C153.545 6.95437 152.728 6.41428 151.83 6.04764C150.932 5.68099 149.97 5.49498 149 5.50024ZM148.95 35.1002H126.5V12.9002H148.94L148.95 35.1002Z" fill="white"></path><path d="M228 5.4997H206C205.03 5.49443 204.068 5.68037 203.169 6.0469C202.271 6.41342 201.453 6.95335 200.763 7.63587C200.073 8.31838 199.524 9.13011 199.148 10.0247C198.772 10.9193 198.576 11.8792 198.57 12.8497V42.4997H206.05V30.3397H228V42.4997H235.48V12.8497C235.476 11.8746 235.279 10.9099 234.9 10.0114C234.522 9.11296 233.968 8.29847 233.273 7.61503C232.577 6.9316 231.753 6.39277 230.848 6.02969C229.943 5.66662 228.975 5.48648 228 5.4997ZM228 22.9397H206.1V12.9397H228V22.9397Z" fill="white"></path><path d="M315.57 5.50011H293.57C292.599 5.49484 291.637 5.68078 290.739 6.0473C289.84 6.41383 289.022 6.95376 288.332 7.63627C287.642 8.31879 287.094 9.13051 286.717 10.0251C286.341 10.9197 286.145 11.8796 286.14 12.8501V42.5001H293.62V30.3401H315.52V42.5001H323V12.8501C322.994 11.8796 322.798 10.9197 322.422 10.0251C322.046 9.13051 321.497 8.31879 320.807 7.63627C320.117 6.95376 319.299 6.41383 318.401 6.0473C317.502 5.68078 316.54 5.49484 315.57 5.50011ZM315.52 22.9401H293.62V12.9401H315.52V22.9401Z" fill="white"></path><path d="M272 35.1H269L258.29 8.58004C257.919 7.66757 257.284 6.88678 256.466 6.33796C255.648 5.78914 254.685 5.49734 253.7 5.50004H247C245.694 5.49472 244.439 6.00767 243.511 6.92631C242.583 7.84496 242.058 9.09426 242.05 10.4V42.5H249.53V12.9H252.53L263.25 39.42C263.628 40.3294 264.266 41.1068 265.085 41.6548C265.903 42.2027 266.865 42.4968 267.85 42.5H274.5C275.151 42.5106 275.798 42.3919 276.403 42.1506C277.007 41.9094 277.558 41.5504 278.023 41.0946C278.489 40.6388 278.859 40.0952 279.112 39.4953C279.365 38.8955 279.497 38.2512 279.5 37.6V5.50004H272V35.1Z" fill="white"></path><path d="M170.55 5.5H163.07V35.15C163.076 36.1205 163.272 37.0804 163.648 37.975C164.024 38.8696 164.573 39.6813 165.263 40.3638C165.953 41.0463 166.771 41.5863 167.669 41.9528C168.568 42.3193 169.53 42.5053 170.5 42.5H193V35.1H170.55V5.5Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_174_4480" x1="5.40017" y1="49.1403" x2="49.4502" y2="-0.509725" gradientUnits="userSpaceOnUse"><stop offset="0.08" stop-color="#9945FF"></stop><stop offset="0.3" stop-color="#8752F3"></stop><stop offset="0.5" stop-color="#5497D5"></stop><stop offset="0.6" stop-color="#43B4CA"></stop><stop offset="0.72" stop-color="#28E0B9"></stop><stop offset="0.97" stop-color="#19FB9B"></stop></linearGradient><clipPath id="clip0_174_4480"><rect width="323" height="48" fill="white"></rect></clipPath></defs></svg>
  )
}

function IconSeparator({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  )
}

function IconArrowDown({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconArrowRight({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  )
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  )
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconSpinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4 animate-spin', className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  )
}

function IconMessage({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  )
}

function IconTrash({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconRefresh({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconStop({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" />
    </svg>
  )
}

function IconSidebar({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  )
}

function IconMoon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  )
}

function IconSun({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  )
}

function IconCopy({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  )
}

function IconCheck({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconDownload({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  )
}

function IconClose({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  )
}

function IconEdit({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  )
}

function IconShare({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
    </svg>
  )
}

function IconUsers({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" />
    </svg>
  )
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" />
    </svg>
  )
}

export {
  IconEdit,
  IconNextChat,
  IconOpenAI,
  IconVercel,
  IconGitHub,
  IconMetamask,
  IconSolana,
  IconSeparator,
  IconArrowDown,
  IconArrowRight,
  IconUser,
  IconPlus,
  IconArrowElbow,
  IconSpinner,
  IconMessage,
  IconTrash,
  IconRefresh,
  IconStop,
  IconSidebar,
  IconMoon,
  IconSun,
  IconCopy,
  IconCheck,
  IconDownload,
  IconClose,
  IconShare,
  IconUsers,
  IconExternalLink,
  IconChevronUpDown
}
