import Link from 'next/link';

type RouteButtonType = {
    path_1: string;
    path_2?: string | undefined;
    text: string;
    top: string;
    right: string;
}

export const RouteButton = ({ path_1, path_2, text, top, right }: RouteButtonType) => {
    return (
        <Link
            href={`/${path_1}/${path_2 !== undefined ? path_2 : ''}`}
            className={`bg-indigo-500 rounded-lg py-2 px-4 text-white absolute ${top} ${right} w-[150px] text-center`}
        >
            {text}
        </Link>
    )
}