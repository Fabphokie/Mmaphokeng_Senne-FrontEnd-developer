document.addEventListener('DOMContentLoaded', function () {
    renderDataTable();
});

function renderDataTable() {
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('tableBody');
            const designationDropdown = document.getElementById('designationDropdown');

            // Populate the dropdown menu with designations
            const designations = [...new Set(data.map(item => item.designation))];
            designations.forEach(designation => {
                const option = document.createElement('option');
                option.textContent = designation;
                designationDropdown.appendChild(option);
            });

            // Render table
            renderTableData(data, tableBody);

            // Event listener for dropdown change
            designationDropdown.addEventListener('change', function () {
                const selectedDesignation = this.value;
                const filteredData = data.filter(item => item.designation === selectedDesignation);
                renderTableData(filteredData, tableBody);
            });
        });
}

function renderTableData(data, tableBody) {
    // Clear existing table data
    tableBody.innerHTML = '';

    // Render table rows
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
