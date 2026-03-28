function Todoitem({TodoName, TodoDate} ){

    return <div class="row">
    <div class="col-6">{TodoName}</div>
    <div class="col-4">{TodoDate}</div>
    
    <div class="col-2">
      
      <button type="button" class="btn btn-danger">x Remove</button>
    </div>
    </div>
    

}

export default Todoitem;