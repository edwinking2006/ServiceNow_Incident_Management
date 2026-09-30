function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    var saveAndClose = false;

    // List view-la State field change panna try panna alert kaatti block panradhu
    alert('State cannot be updated using list editing. Please open the Incident.');
    
    callback(saveAndClose); // Changes save aagadhau
}
