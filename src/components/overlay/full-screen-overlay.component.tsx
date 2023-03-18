/* This example requires Tailwind CSS v2.0+ */
import { FullScreenOverlayProps } from './full-screen-overlay.interface';

const FullScreenOverlay = (props: FullScreenOverlayProps) => {

    return (
        <div className="fixed z-50 top-0 left-0 bg-gray-100 h-screen w-screen">
            {
                props.children
            }
        </div>
    )
}

export default FullScreenOverlay;