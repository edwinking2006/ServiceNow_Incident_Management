# ServiceNow Incident Management - Client Scripts & UI Policies

This repository contains all configuration scripts and policies developed for the ServiceNow Incident Management Micro-Project.

## Overview
The **Implement Client Script & UI Policy (Incident)** project demonstrates how UI Policies and Client Scripts work together to enforce dynamic field behavior, automate updates, and prevent incorrect data submission on Incident forms in ServiceNow.

## Key Implementations:
1. **UI Policy - High Impact Control:**
   - **Table:** Incident (`incident`)
   - **Condition:** `Impact` = `1 - High`
   - **Action:** Sets `Urgency` to Read-Only when Impact is High.

2. **onChange Client Script (Impact-based Urgency):**
   - **Table:** Incident (`incident`)
   - **Field:** `Impact`
   - Automatically updates `Urgency` to `1 - High` when `Impact` is set to `1 - High`.

3. **onSubmit Client Script (Assigned To Validation):**
   - **Table:** Incident (`incident`)
   - Validates that `Assigned To` is not empty when `Impact` is `1 - High` prior to form submission.

4. **onCellEdit Client Script (List Edit Restriction):**
   - **Table:** Incident (`incident`)
   - **Field:** `State`
   - Restricts changing the `State` field directly from the Incident List View and alerts the user to open the form.

---
*Developed as part of ServiceNow System Administrator Certification Micro-Project.*
