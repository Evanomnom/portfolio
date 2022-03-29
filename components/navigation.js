import { useSpring, animated, config } from 'react-spring'
import { ParallaxLayer } from '@react-spring/parallax'
import useWindowDimensions from '../hooks/useWindowDimensions.js'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

export default function Navigation(props) {
    const { height, width } = useWindowDimensions();
    var mobileWidth = width < 768;

    //window check
    var hasWindow = typeof window !== 'undefined';

    //router check
    const router = useRouter();

    return (
        <div style={props.animation} className="absolute top-0 z-10">
            {hasWindow && mobileWidth &&
                <div className="ml-2 mt-2">
                    <Menu menuButton={<MenuButton><img src="menu.png" alt="menu" className="icon w-10" /></MenuButton>}>
                        <Link href="/">
                            <a className={router.pathname == "/" ? "font-black" : "font-light"}>
                                <MenuItem>Home</MenuItem>
                            </a>
                        </Link>
                        <Link href="/major_projects">
                            <a className={router.pathname == "/major_projects" ? "font-black" : "font-light"}>
                                <MenuItem>Major Projects</MenuItem>
                            </a>
                        </Link>
                        <Link href="/minor_projects">
                            <a className={router.pathname == "/minor_projects" ? "font-black" : "font-light"}>
                                <MenuItem>Minor Projects</MenuItem>
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a className={router.pathname == "/contact" ? "font-black" : "font-light"}>
                                <MenuItem>Contact</MenuItem>
                            </a>
                        </Link>
                    </Menu>
                </div>
            }
            {hasWindow && !mobileWidth &&
                <div className="flex w-screen justify-center items-center gap-x-8 lg:gap-x-12 xl:gap-x-16 pt-3 text-xl z-10">
                    <Link href="/">
                        <a className={router.pathname == "/" ? "font-black" : "font-light hover:font-semibold"}>Home</a>
                    </Link>
                    <Link href="/major_projects">
                        <a className={router.pathname == "/major_projects" ? "font-black" : "font-light hover:font-semibold"}>Major Projects</a>
                    </Link>
                    <Link href="/minor_projects">
                        <a className={router.pathname == "/minor_projects" ? "font-black" : "font-light hover:font-semibold"}>Minor Projects</a>
                    </Link>
                    <Link href="/contact">
                        <a className={router.pathname == "/contact" ? "font-black" : "font-light hover:font-semibold"}>Contact</a>
                    </Link>
                </div>
            }
        </div>
    )
}