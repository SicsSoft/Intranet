new DataTable('#example', {
    searching: false,
    paging: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.4/i18n/pt-BR.json",
    },
    createdRow: function (row, data, dataIndex) {
        let hoje = new Date();
        let dia = hoje.getDate();
        let mes = hoje.getMonth() + 1;

        // pega a data de aniversário (2ª coluna)
        let dataAniver = $('td', row).eq(1).text().trim();
        let [diaNiver, mesNiver] = dataAniver.split('/').map(Number);

        if (dia === diaNiver && mes === mesNiver) {
            // adiciona classe na <tr>
            $(row).addClass('linha-aniver');
        }
    }
});
new DataTable('hours', {
    searching: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.4/i18n/pt-BR.json",
    }
});
new DataTable('#gym', {
    paging: false,
    scrollCollapse: true,
    scrollY: '1000px',
    searching: false,
    paging: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.4/i18n/pt-BR.json",
    }
});
new DataTable('#ram', {
    paging: false,
    scroll: true,
    scrollCollapse: true,
    scrollY: '1000px',
    paging: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/2.3.4/i18n/pt-BR.json",
    }
});