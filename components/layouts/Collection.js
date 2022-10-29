export default function Collection ({title, children}) {
    return (
        <div className="collection-container">
            <div className="collection-title">
                {title}
            </div>
            <div className="grid-container">
                {children}
            </div>
        </div>
    )
}