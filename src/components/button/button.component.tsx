import { ButtonProps } from "./button.interface";

export function Button(props: ButtonProps) {
    return (
        <button
            type="button"
            className="rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}