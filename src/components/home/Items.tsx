

const itemList: Array<{name: string, description: string, price: number, image: string}> = [
    {
        name: "Headphones",
        description: "Wireless Headphones",
        price: 100,
        image: "https://img.freepik.com/free-photo/black-headphones-digital-device_53876-97302.jpg?t=st=1725640570~exp=1725644170~hmac=65c55dcfadf227c9f1530e2526f83f11912a28113e3390a846035a4670819b6e&w=740"
    }
];

function Item(){

    return (
        <div className="itemBlock">
            <h1>Item</h1>
            <div className="itemDetail">
                <div className="itemImage">
                    <img src="https://img.freepik.com/free-photo/black-headphones-digital-device_53876-97302.jpg?t=st=1725640570~exp=1725644170~hmac=65c55dcfadf227c9f1530e2526f83f11912a28113e3390a846035a4670819b6e&w=740" alt="item" />
                </div>
                <div className="itemInfo">
                    <h2>Item Name</h2>
                    <p>Item Description</p>
                    <p>Item Price</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Item;