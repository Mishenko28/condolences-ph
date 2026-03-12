import Button from "./Button"

export function PostCard({ children, className, ...props }: React.ComponentProps<"div"> & { children?: React.ReactNode }) {
    return (
        <div className={`${className} space-y-4 w-56 p-6 border rounded-2xl bg-border/30`} {...props}>
            {children}
        </div>
    )
}

export function PostCardHeading({ children, className, ...props }: React.ComponentProps<"h1"> & { children?: React.ReactNode }) {
    return (
        <h1 className={`${className} font-medium leading-normal text-lg`} {...props}>
            {children}
        </h1>
    )
}

export function PostCardButton({ children, className, ...props }: React.ComponentProps<"button"> & { children?: React.ReactNode }) {
    return (
        <Button className={`${className} w-full`} {...props}>
            {children}
        </Button>
    )
}
