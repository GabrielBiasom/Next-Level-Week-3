const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async function (db) {

    //   inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-16.6399859",
        lng: "-49.2467302",
        name: "Lar das meninas",
        about: "Presta assistência à crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "62991920794",
        images: [
            "https://images.unsplash.com/photo-1550475476-44c382c5f2a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",

            "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",

            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&auto=format&fit=crop&w=723&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas das 8h até 18h",
        open_on_weekends: "0"
    }) 

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente um orfanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // deletar dado da tabela
    //await db.run("DELETE FROM orphanages WHERE id ='3'")

})