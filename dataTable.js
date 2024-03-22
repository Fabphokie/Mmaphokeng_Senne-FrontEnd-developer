document.addEventListener('DOMContentLoaded', function () {
    renderDataTable();
});

function renderDataTable() {
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            const designationDropdown = document.getElementById('designationDropdown');
            const designations = [...new Set(data.map(item => item.designation))];
            designations.forEach(designation => {
                const option = document.createElement('option');
                option.textContent = designation;
                designationDropdown.appendChild(option);
            });

            
            renderTableData(data, tableBody);

            designationDropdown.addEventListener('change', function () {
                const selectedDesignation = this.value;
                const filteredData = data.filter(item => item.designation === selectedDesignation);
                renderTableData(filteredData, tableBody);
            });
        });
}

function renderTableData(data, tableBody) {
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.surname}</td>
        <td>${item.designation}</td>
        <td>${item.department}</td>
      `;
        tableBody.appendChild(row);
    });
}
