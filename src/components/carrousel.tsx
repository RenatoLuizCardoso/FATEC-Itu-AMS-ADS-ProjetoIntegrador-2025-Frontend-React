export function Carrousel() {
  const imgs = [
    {
      name: '',
      img: '',
    },
  ];
  return (
    <section className="w-screen flex py-8 text-amber-900 bg-amber-50 ">
      <div className="mx-auto px-12 md:px-12 ">
        <div className="carousel h-50 max-w-6xl  md:max-w-6xl md:h-135 rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
          <div id="item1" className="carousel-item w-full auto max-w-full ">
            <img
              src="https://images3.alphacoders.com/133/thumb-1920-1330428.png"
              alt="img1"
              className="w-full auto h-auto max-w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://images8.alphacoders.com/134/thumb-1920-1342857.png"
              alt="img2"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?t=st=1746739260~exp=1746742860~hmac=60a58b7d2ba7c481057e0ee492f99b190ce82be0397d055459517c0087205b3c&w=826"
              alt="img3"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full ">
            <img
              src="https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?t=st=1746739259~exp=1746742859~hmac=778ac6103230dd473b901097879cce87d1995314def8dfb7c5a2ea0c7c77cb5b&w=900"
              alt="img4"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </section>
  );
}
