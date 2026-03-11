
const totals = [
    { title: "MESSAGES", value: 5 },
    { title: "MEDIAS", value: 12 },
    { title: "BLOG POSTS", value: 3 },
    { title: "EVENTS", value: 4 },
]

export default function Overview() {
    return (
        <main className="flex gap-8">
            <div className="flex-1">
                <div className="flex gap-4">
                    {totals.map(({ title, value }) => (
                        <div key={title} className="w-full flex flex-col items-center justify-center gap-2 rounded-lg bg-gray-100 p-4">
                            <h1>{title}</h1>
                            <h2>{value}</h2>
                        </div>
                    ))}
                </div>
                <div></div>
            </div>
            <div className="w-60 border">right side</div>
        </main>
    )
}
