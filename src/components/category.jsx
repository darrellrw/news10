function Category() {
    const kategori = [
        { nama: '#Musik' },
        { nama: '#Sport' },
        { nama: '#Car' },
        { nama: '#Food' }
    ];
    return (
        <div className="flex flex-wrap max-w-xl justify-center">
            {kategori.map((item, index) => (
                <div key={index} className=" flex h-10 w-32 m-2 text-white bg-black items-center justify-center rounded-xl">
                    <p className="">{item.nama}</p>
                </div>
            ))}
        </div>
    )
}

export default Category