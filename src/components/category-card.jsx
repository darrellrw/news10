function Category() {
    const kategori = [
        { nama: '#Music', gambar: './images/music.jpg' },
        { nama: '#Sport', gambar: './images/sports.jpg' },
        { nama: '#Car', gambar: './images/car.jpeg' },
        { nama: '#Food', gambar: './images/food.png' },
        { nama: '#Animal', gambar: './images/animal.jpg'}
    ];
    return (
        <div className="flex flex-wrap max-w-xl justify-center">
            {kategori.map((item, index) => (
                <div key={index} 
                className=" flex h-10 w-32 m-2 text-white bg-black items-center justify-center rounded-xl"
                style={{ backgroundImage: `url(${item.gambar})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <p className="">{item.nama}</p>
                </div>
            ))}
        </div>
    )
}

export default Category