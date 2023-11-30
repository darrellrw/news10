function News() {
    const news = [
        {
            title: 'Rencana IKN akan segera direalisasikan',
            keterangan: 'balblablabalbalblablablablablablalbalblablablalb',
            images: 'INI GAMBAR'
        },
        {
            title: 'Bagus Main Billiard',
            keterangan: 'BABABABABBABABABABABBABABA',
            images: 'INI GAMBAR'
        },
    ];
    return (
        <div className="flex justify-between m-4 max-w-xl items-center">
            <div>INI FOTO</div>
            <div>
                <p>INI JUDUL</p>
                <p>INI KETERANGAN</p>
            </div>
        </div>

    )
}

export default News