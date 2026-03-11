export function CardFamily({ children, className, ...props }: React.ComponentProps<"div"> & { children?: React.ReactNode }) {
    return (
        <div className={`${className} space-y-3`} {...props}>
            {children}
        </div>
    )
}

export function CardFamilyTitle({ children, className, ...props }: React.ComponentProps<"div"> & { children?: React.ReactNode }) {
    return (
        <h1 className={`${className} font-bold`} {...props}>
            {children}
        </h1>
    )
}

export function CardFamilyContent({ children, className, ...props }: React.ComponentProps<"div"> & { children?: React.ReactNode }) {
    return (
        <div className={`${className} space-y-2`} {...props}>
            {children}
        </div>
    )
}
