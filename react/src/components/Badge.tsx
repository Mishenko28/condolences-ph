export default function Badge({
    children,
    className,
    color = "gray",
    ...props
}: React.ComponentProps<"div"> & {
    children?: React.ReactNode
    color?: "blue" | "red" | "green" | "orange" | "gray"
}) {
    const colors = {
        blue: "bg-blue-700/30 text-blue-700 [&_svg]:stroke-blue-700",
        red: "bg-red-700/30 text-red-700 [&_svg]:stroke-red-700",
        green: "bg-green-700/30 text-green-700 [&_svg]:stroke-green-700",
        orange: "bg-orange-700/30 text-orange-700 [&_svg]:stroke-orange-700",
        gray: "bg-gray-700/30 text-gray-700 [&_svg]:stroke-gray-700",
    }

    return (
        <div className={`${className} has-[svg]:p-3 p-2 rounded-full font-medium text-sm w-min [&_svg]:size-4 ${colors[color]}`} {...props}>
            {children}
        </div>
    )
}
