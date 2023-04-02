export default function KittyIcon() {
    return (
        <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg" viewBox="-250 -250 500 500">
            <g transform="translate(-255 -300)">
                <path d="M 130 140
                            C 150 300 150 160 200 190
                            C 200 190 175 160 130 140"
                      fill="sienna"/>

                <path d="M 130 140
                            C 150 300 150 160 200 190
                            C 200 190 175 160 130 140"
                      fill="sienna" transform="translate(430), scale(-1, 1)"/>

                <circle cx="215" cy="245" r="75" fill="sienna"/>

                <path d="M 215 280 230 265
                            H 230 200
                            M 200 265 215 280"
                      fill="black" stroke="black"/>

                <path d=" M 180,265 L 125,260" stroke="white" strokeWidth="2"/>
                <path d=" M 180,280 L 130,290" stroke="white" strokeWidth="2"/>
                <path d=" M 180,295 L 140,320" stroke="white" strokeWidth="2"/>

                <path d=" M 250,265 L 300,260" stroke="white" strokeWidth="2"/>
                <path d=" M 250,280 L 300,290" stroke="white" strokeWidth="2"/>
                <path d=" M 250,295 L 290,320" stroke="white" strokeWidth="2"/>
            </g>

            <g>
                <polygon transform="translate(-250 -295)" points="180,200 165,250 205,220 155,220 195,250" fill="orange"/>
                <polygon transform="translate(-250 -295)" points="250,200 235,250 275,220 225,220 265,250" fill="orange"/>
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    dur="1s"
                    values="1; 1.2; 1.1; 1.2; 1.2; 1;"
                    repeatCount="indefinite">
                </animateTransform>
            </g>
        </svg>
    )
}