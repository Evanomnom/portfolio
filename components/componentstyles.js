import Boop from "./boop"
import Link from "next/link"

function ContentBox (props) {
    return (
        <div className="flex flex-col h-screen w-screen justify-center items-center pb-12 md:pb-0">
            {props.children}
        </div>
    )
}

function Title(props) {
    return (
        <span className="text-3xl lg:text-5xl font-bold tracking-wide pb-5 lg:pb-8">
            {props.children}
        </span>
    )
}

function LongTitle(props) {
    return (
        <span className="text-2xl lg:text-4xl font-bold tracking-wide pb-5 lg:pb-8">
            {props.children}
        </span>
    )
}

function InfoBox(props) {
    return (
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 items-center align-center px-10 lg:p-0 lg:items-start">
            {props.children}
        </div>
    )
}

function Image(props) {
    return (
        <img className="max-h-80 max-w-80 rounded-lg px-4 lg:px-0" src={props.src} alt={props.alt} />
    )
}

function LinkedImage(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <Boop>
                <img className="max-h-80 max-w-80 rounded-lg px-4 lg:px-0" src={props.src} alt={props.alt} />
            </Boop>
        </a>
    )
}

function Description(props) {
    return (
        <div className="text-sm md:text-lg lg:text-xl xl:text-2xl lg:max-w-md xl:max-w-lg lg:text-left">
            {props.children}
        </div>
    )
}

function LinkedText(props){
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <span className="font-bold">
                {props.text}
            </span>
        </a>
    );
}

function SectionBox(props){
    return (
        <div className="flex flex-col items-center justify-center max-w-sm lg:max-w-xs">
            <Link href={props.link}>
                <a>
                    <Boop>
                        <span className="text-2xl underline font-semibold lg:text-4xl">{props.title}</span>
                    </Boop>
                </a>
            </Link>
            <span className="text-lg pt-1 lg:pt-3 lg:text-xl">{props.info}</span>
        </div>
    );
}

function LinkedIcon(props){
    return(
        <a href={props.link} target="_blank" rel="noreferrer">
            <Boop rotation={8}>
                <img className="h-32 w-32 lg:h-40 lg:w-40" src={props.src} alt={props.alt} />
            </Boop>
        </a>
    );
}


export {ContentBox, Title, LongTitle, InfoBox, Image, LinkedImage, Description, LinkedText, SectionBox, LinkedIcon};