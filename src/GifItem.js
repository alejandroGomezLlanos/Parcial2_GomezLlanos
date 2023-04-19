const GifItem = ({ userid, id, title, body }) => {
  return (
    <div className="card">
      <h1> {userid} </h1>
      <h2> {id} </h2>
      <h3> {title} </h3>
      <h4> {body} </h4>
    </div>
  );
};
export default GifItem;
