import Card from "./Card";


const OrderTab = ({bears}) => {
    return (
        <div className='grid lg:grid-cols-4 w-[80%] mx-auto'>
            {
                bears.map(bear => <Card key={bear._id} bear={bear}></Card>)
            }
        </div>
    );
};

export default OrderTab;