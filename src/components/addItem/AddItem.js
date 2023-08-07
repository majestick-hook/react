
function AddItem({onAdd}) {
    let itemName = "";
    const onSubmitHandler = (event) => {
        event.preventDefault();
        onAdd(itemName);

    };
    const onInputChangeHandler = (event) => {
        itemName = event.target.value;
    }
    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <div>
                <lable for="my-input">Item Name</lable>
                <input id="my-input" onChange={onInputChangeHandler}/>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
        </>
    );
  }
  
  export default AddItem;
  