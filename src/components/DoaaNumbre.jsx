import * as React from "react"
import Svg, { Defs, G, Rect, Text, TSpan } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function DoaaNumber(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={31.698}
      height={31.698}
      viewBox="0 0 29.698 29.698"
      stroke="#cfb559"
      {...props}
    >
      <Defs></Defs>
      <G className="prefix__a" transform="translate(4.349 4.349)">
        <Rect className="prefix__b" width={21} height={21} rx={3} />
        <Rect className="prefix__c" x={1} y={1} width={19} height={19} rx={2} />
      </G>
      <G className="prefix__a" transform="rotate(45 7.425 17.924)">
        <Rect className="prefix__b" width={21} height={21} rx={3} />
        <Rect className="prefix__c" x={1} y={1} width={19} height={19} rx={2} />
      </G>
      <Text
        x="100"
        y="100"
        transform="translate(7 10)"
        fontSize={props.doaaNumber>99?10:13}
        textAnchor="middle"
      >
        <TSpan x={8} y={10} textAnchor="middle">
         { props.doaaNumber}
        </TSpan>
      </Text>
    </Svg>
  )
}

export default DoaaNumber