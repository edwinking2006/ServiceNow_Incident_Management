function onSubmit() {
    var impact = g_form.getValue('impact');
    var assignedTo = g_form.getValue('assigned_to');

    // Impact High ah irundhu Assigned To empty ah irundha submit panna vidamal tadduthal
    if (impact == '1' && assignedTo == '') {
        g_form.addErrorMessage('Assigned to is mandatory when Impact is High.');
        return false; // Submit-a block panradhu
    }
}
