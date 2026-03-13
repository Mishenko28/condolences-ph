export default function Button({
    children,
    className,
    size = "md",
    ...props
}: React.ComponentProps<"button"> & {
    children?: React.ReactNode
    size?: "sm" | "md"
}) {
    const sizeClasses = {
        sm: "h-10 py-2 px-4",
        md: "h-12 py-3 px-5",
    }

    return (
        <button
            className={`${className} ${sizeClasses[size]} flex items-center gap-2 bg-primary text-white font-normal text-sm rounded-lg [&_svg]:size-4 [&_svg]:stroke-white cursor-pointer hover:bg-primary/90 transition-colors duration-200`}
            {...props}
        >
            {children}
        </button>
    )
}
