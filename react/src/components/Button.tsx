export default function Button({
    children,
    className,
    ...props
}: React.ComponentProps<"button"> & {
    children?: React.ReactNode
    className?: string
}) {
    return (
        <button
            className={`${className} flex items-center gap-2 bg-primary text-white text-sm h-12 py-3 px-5 rounded-lg [&_svg:not([class*='size-'])]:size-4 cursor-pointer hover:bg-primary/90 transition-colors duration-200`}
            {...props}
        >
            {children}
        </button>
    )
}
