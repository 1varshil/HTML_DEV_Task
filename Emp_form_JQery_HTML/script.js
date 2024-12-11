$(document).ready(function () {
  // Form submission
  $('#employeeForm').on('submit', function (e) {
    e.preventDefault();

    // Input values
    const name = $('#name').val();
    const email = $('#email').val();
    const position = $('#position').val();

    // Validation
    if (name === '' || email === '' || position === '') {
      alert("Please fill in all fields.");
      return;
    }

    // Adding row in the table
    const newRow = `<tr>
      <td>${name}</td>
      <td>${email}</td>
      <td>${position}</td>
      <td>
        <button class="updateBtn">Update</button>
        <button class="deleteBtn">Delete</button>
      </td>
    </tr>`;

    $('#employeeTable tbody').append(newRow);

    // Clear form fields
    $('#name').val('');
    $('#email').val('');
    $('#position').val('');
  });

  // Delete button
  $('#employeeTable').on('click', '.deleteBtn', function () {
    $(this).closest('tr').remove();
  });

  // Update button
  $('#employeeTable').on('click', '.updateBtn', function () {
    const row = $(this).closest('tr');
    const name = row.find('td:eq(0)').text();
    const email = row.find('td:eq(1)').text();
    const position = row.find('td:eq(2)').text();

    // Populate form with current values
    $('#name').val(name);
    $('#email').val(email);
    $('#position').val(position);

    // Remove the row (will be added back on form submit with updated data)
    row.remove();
  });
});
