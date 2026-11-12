# Shared inbox homepage preview provenance

The desktop preview composes the shipped `InboxSelector`, `SharedInboxConversationList`, `ConversationActionBar`, and `SharedInboxThreadView` components with the Venmail theme and synthetic fixture data. The components match deployed mailer_web commit `bacc3c0e7fc3197281460ed65c65eb8f0f3fbc2a`. The mobile preview renders the conversation list at a 350 px viewport. Names, addresses, subjects and messages are invented; no customer account or production data was used. These are component fixtures without the authenticated application shell, not captures of a live account. The homepage crops empty space below the workspace. Shared inbox access may be limited.

Recapture after material changes to the application component. Verify all visible data, responsive readability and the access condition before publishing a replacement.

## Venia signing preview

The signing previews capture the shipped `SigningDocuments.vue` requests section from vensuite commit `7326858` with a stubbed API response containing invented document names and signer identities. The mobile preview uses the same component at a narrow viewport. No production account or customer data was used. These are component crops, not the full application.
