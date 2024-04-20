function List() {
    const arr = ['html', 'css', 'js','react'];
    const li = arr.map((el) => {
      return <li>{el}</li>;
    });
    console.log(li);
    return (
      <ul>
        {li}
      </ul>
    );
  }
  
  export default List;
  