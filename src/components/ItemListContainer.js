import './style.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container container-fluid">
            <p className="itemsPresentation">{greeting}</p>
        </div>
    )
}

export default ItemListContainer