# Chronicle SOAR Webhook Integration with Google Forms

Want to use a custom Google Form as a way to create a case in Chronicle SOAR. This reference code will enable the submission of a form to be sent to Chronicle SOAR for case creation and playbook automation.

## Usage

1) Create a new Google Form with the questions you want. Next we'll need to add the script by clicking the menu in the upper-right and choosing "Script editor"

2) In the editor, you can paste the code from this repo into the Code.gs that's open in the editor, overwriting anything that may already be there.
   
3) On the left-hand menu, chose "Triggers" and fill out the dialog like below. This casues the script to execute when a user submits it. The system will prompt you to grant permissions to post the data to an external service (Chronicle SOAR for this integration)

![Alt text](trigger-settings.png?raw=true)


