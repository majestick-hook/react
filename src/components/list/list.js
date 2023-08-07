import Item from "../item/item";

function List({arr}) {
    
    const items = arr.map((iteme) => {
       return <Item key={iteme} title={iteme}/>
    });
    return (
        <>
        {items}
        </>
    );
  }
  
  export default List;
  