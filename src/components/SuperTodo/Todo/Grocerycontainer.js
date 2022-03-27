const Grocerycontainer = (props) => {
  const list = props.list;
  const deletedata = props.deletedata;
  const onedit = props.onedit;

  return (
    <div className="grocery-list">
      {list.map((lst, idx) => {
        return (
          <article className="grocery-items" key={idx}>
            <p className="title">{lst.title}</p>
            <div className="btn">
              <button
                className="edit"
                onClick={() => onedit(lst.title, lst.id)}
              >
                <i class="far fa-edit "></i>
              </button>
              <button
                className="dlt"
                onClick={() => {
                  deletedata(lst.id);
                }}
              >
                <i class="fas fa-trash "></i>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Grocerycontainer;
