function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    // Impact High (1) ah irukumpodhu Urgency High (1) ah auto-update panradhu
    if (newValue == '1') {
        g_form.setValue('urgency', '1');
    }
}
